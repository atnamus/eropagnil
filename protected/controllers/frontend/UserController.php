<?php

class UserController extends FrontController {

    public $layout = "//layouts/main";

    protected function performAjaxValidation($model) {
        if (isset($_POST['ajax']) && $_POST['ajax'] === 'user-signup-form') {
            echo CActiveForm::validate($model);
            Yii::app()->end();
        }
    }

    public function actionAjaxlogin() {
        $request = Yii::app()->request;
        if ($request->isAjaxRequest && $request->isPostRequest) {

            $username = $request->getPost("email");
            $password = md5($request->getPost("password"));

            $status = 0;
            $message = "";

            $username_check = User::model()->findByAttributes(array("username" => str_replace("'", "", $username), "password" => str_replace("'", "", $password)));
            $email_check = User::model()->findByAttributes(array("email" => str_replace("'", "", $username), "password" => str_replace("'", "", $password)));

            if (empty($username_check) && empty($email_check)) {
                $status = 0;
                $message = "Invalid login credential";
            } else {
                $user_name = "";
                $user_id = "";
                $membership = "";
                if (isset($username_check->status)) {
                    if ($username_check->status == User::ACTIVE) {
                        $status = 1;
                        $user_id = $username_check->id;
                        $user_name = $username_check->username;
                        $first_name = $username_check->first_name;
                        $last_name = $username_check->last_name;
                        $membership = $username_check->membership_id;
                    } else {
                        $status = 0;
                        $message = "Please activate your account from your email account.";
                    }
                } else {
                    if ($email_check->status == User::ACTIVE) {
                        $status = 1;
                        $user_id = $email_check->id;
                        $user_name = $email_check->username;
                        $first_name = $email_check->first_name;
                        $last_name = $email_check->last_name;
                        $membership = $email_check->membership_id;
                    } else {
                        $message = "Please activate your account from your email account.";
                    }
                }

                if ($status == 1) {
                    Yii::app()->user->setState('user', $user_id);
                    $user_info = array(
                        "username" => $user_name,
                        "first_name" => $first_name,
                        "last_name" => $last_name,
                        "membership" => $membership
                    );
                    Yii::app()->user->setState('user_info', $user_info);
                    Yii::app()->user->setState('id', $user_id);
                }
            }

            $status = $status == 0 ? "error" : "success";

            echo json_encode(array("status" => $status, "message" => $message));
            Yii::app()->end();
        }
    }

    public function actionLogout() {
        Yii::app()->user->setState('user', null);
        Yii::app()->user->setState('user_info', null);
        Yii::app()->user->logout();
        $this->redirect($this->createUrl("user/Signup"));
    }

    public function actionSignup() {
        $data_msg = array();

        if ($this->user_id != "") {
            $this->redirect($this->createUrl("home/Memberhome"));
        }

        $user_type = "";

        if (Yii::app()->request->getParam("user_type")) {
            $user_type = Yii::app()->request->getParam("user_type");
        }

        $data_msg['user_type'] = $user_type;

        $first_name = "";
        $last_name = "";
        $full_name = "";
        $email = "";

        $user_model = new User('signup');

        $this->performAjaxValidation($user_model);

        if (isset($_GET['provider'])) {
            try {
                $haComp = new HybridAuthIdentity();
                if (!$haComp->validateProviderName($_GET['provider']))
                    throw new CHttpException('500', 'Invalid Action. Please try again.');

                $haComp->adapter = $haComp->hybridAuth->authenticate($_GET['provider']);
                $haComp->userProfile = $haComp->adapter->getUserProfile();

                if (empty($haComp->userProfile)) {
                    $haComp->processLogin();  //further action based on successful login or re-direct user to the required url
                } else {
                    $user_profile = $haComp->userProfile;
                    $first_name = $user_profile->firstName;
                    $last_name = $user_profile->lastName;
                    $full_name = $first_name . " " . $last_name;
                    $email = $user_profile->email;
                }
            } catch (Exception $e) {
                echo "Invalid Request";
                exit;
            }
        }

        $data_msg['first_name'] = $first_name;
        $data_msg['last_name'] = $last_name;
        $data_msg['full_name'] = $full_name;
        $data_msg['email'] = $email;

        $data_msg['model'] = $user_model;

        $criteria = new CDbCriteria;
        $criteria->addCondition("t.status = '1'");
        $criteria->addCondition("t.name != 'admin'");

        $user_type = UserType::model()->findAll($criteria);
        $data_msg['account_type'] = CHtml::listData($user_type, 'id', 'name');

        if (isset($_POST['User'])) {

            $user_type_id = "";

            $user_model->attributes = $_POST['User'];
            $user_model->status = '0';
            $user_model->create_at = date("Y-m-d H:i:s");
            $user_model->password = md5($_POST['User']['password']);
//            $user_model->confirm_password = md5($_POST['User']['confirm_password']);
            $activation_key = $this->getKey($user_model->email);
            $user_model->activation_code = $activation_key;
            $user_type = Yii::app()->request->getPost("user_type");

            switch ($user_type) {
                case "learner":
                    $user_type_id = "2";
                    break;

                case "parent":
                    $user_type_id = "4";
                    break;

                case "school":
                    $user_type_id = "5";
                    break;

                case "company":
                    $user_type_id = "6";
                    break;

                case "business_guide":
                    $user_type_id = "7";
                    break;
            }

            $user_model->user_type_id = $user_type_id;

            if ($user_model->validate()) {
                $user_model->save();
//                $to = $user_model->UserEmail;
//                $subject = 'Account Activation';
//                $content = '';
//                Yii::app()->mailer->send($to, $subject, $content);

                $to = $user_model->email;
                $content = '<a href="' . Yii::app()->request->getBaseUrl(true) . '/activate-account/' . $activation_key . '"/>Activate Account</a>';
                $subject = 'Account Activation';

                $headers = "From: account@lingapore.com\r\n";
                $headers .= "Reply-To: " . strip_tags("account@lingapore.com") . "\r\n";
                $headers .= "MIME-Version: 1.0\r\n";
                $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

                mail($to, $subject, $content, $headers);

                Yii::app()->user->setFlash('success_msg', "You have registered successfully. Please activate your account from your email account.");
                $this->refresh();
            }
        }

        $this->render("/sign_up", $data_msg);
    }

    public function actionActivateaccount($activation_key) {
        $user = User::model()->findByAttributes(array("activation_code" => $activation_key));
        if (!empty($user)) {
            $user->status = "1";
            $user->activation_code = "";
            $user->save();
            $mem_history = new MembershipHistory();
            $mem_history->user_id = $user->id;
            $mem_history->membership_id = $user->membership_id;
            $mem_history->create_at = date("Y-m-d H:i:s");
            $mem_history->status = "1";
            $mem_history->save();
            Yii::app()->user->setFlash("success_msg", "Your account has been activated successfully. Please login to your account.");
        } else {
            Yii::app()->user->setFlash("error_msg", "Invalid activation link.");
        }

//        Yii::app()->user->setFlash("success_msg", "Password has been changed successfully!");
        $this->redirect(array("/user/Signup"));
    }

    public function actionResetpassword($reset_key) {
        $data_msg = array();

        $user = User::model()->findByAttributes(array("reset_key" => $reset_key));

        if (empty($user)) {
            $data_msg['invalid_request'] = 1;
        }

        $model = new PasswordResetForm();
        $this->performAjaxValidation($model);

        if (isset($_POST['PasswordResetForm'])) {
            User::model()->updateByPk($user->id, array("password" => md5($_POST['PasswordResetForm']['Password']), "reset_key" => ""));
            Yii::app()->user->setFlash("success_msg", "Password has been changed successfully!");
            $this->redirect(array("/user/Signup"));
            Yii::app()->end();
        }

        $data_msg['model'] = $model;

        $this->render("/reset_password", $data_msg);
    }

    public function actionForgotpassword() {
        $request = Yii::app()->request;
        if ($request->isAjaxRequest && $request->isPostRequest) {
            $email = $request->getPost("email");

            $status = "error";
            $msg = "";

            $user = User::model()->findByAttributes(array("email" => $email));

            if (empty($user)) {
                $status = "error";
                $msg = "This email address is not registered.";
            } else {
                $status = "success";

                $reset_key = $this->getKey($email);

                $to = $email;
                $content = '<a href="' . Yii::app()->request->getBaseUrl(true) . '/reset-password/' . $reset_key . '"/>Reset Password</a>';
                $subject = 'Password Reset';

                $headers = "From: account@lingapore.com\r\n";
                $headers .= "Reply-To: " . strip_tags("account@lingapore.com") . "\r\n";
                $headers .= "MIME-Version: 1.0\r\n";
                $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

                mail($to, $subject, $content, $headers);

//                Yii::app()->mailer->send($to, $subject, $content);

                User::model()->updateByPk($user->id, array("reset_key" => $reset_key));
                $msg = "A password reset link has been sent to your email.";
            }

            echo json_encode(array("status" => $status, "message" => $msg));
        }
    }

    

    public function actionSocialLogin() {
//        Yii::import('components.HybridAuthIdentity');
//        $path = Yii::getPathOfAlias('ext.HybridAuth');
//        require_once $path . '/hybridauth-' . HybridAuthIdentity::VERSION . '/hybridauth/index.php';
        $path = Yii::getPathOfAlias('ext.HybridAuth');
        require_once $path . '/index.php';
    }

}
