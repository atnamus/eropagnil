<?php

class OrganizationController extends FrontController {

    public $layout = "//layouts/main";

    protected function performAjaxValidation($model) {
        if (isset($_POST['ajax']) && $_POST['ajax'] === 'account-settings-form') {
            echo CActiveForm::validate($model);
            Yii::app()->end();
        }
    }

    public function actionViewprofile($username) {
        $data_msg = array();

        $this->render("/learner_profile", $data_msg);
    }

    public function actionOauthSyncSave() {
        if (!Yii::app()->request->isAjaxRequest) {
            throw new CHttpException('403', 'Forbidden access.');
        }
        $ok = 0;
        $msg = '';
        $id = @$_POST['id'];
        $email = @$_POST['email'];
        $provider = @$_POST['provider']; //provider
//check email id in user table         
        $criteria = new CDbCriteria();
        $criteria->addCondition('email = "' . $email . '"');
        $criteria->addCondition('id != ' . Yii::app()->user->id);
        if (User::Model()->count($criteria)) {
            $ok = 0;
            $msg = "Sorry, another lingapore account is already using that login or its email address. You need to disconnect that login from your other lingapore account first.";
        } else {//check email id in user_social_account table         
//SocialAccount::;;
            $criteria = new CDbCriteria();
            $criteria->addCondition('social_id = "' . $id . '"');
            $criteria->addCondition('provider = "' . $provider . '"');
            if (SocialAccount::Model()->count($criteria)) {//erro
                $ok = 0;
                $msg = "Sorry, another lingapore account is already using that login or its email address. You need to disconnect that login from your other lingapore account first.";
            } else {//add
                $social = new SocialAccount();
                $social->user_id = Yii::app()->user->id;
                $social->provider = $provider;
                $social->email = $email;
                $social->social_id = $id;
                $social->create_at = date("Y-m-d H:i:s");
                if ($social->save()) {
                    $ok = 1;
                    $msg = "Account is saved successfully.";
                } else {
                    $ok = 0;
                    foreach ($social->getErrors() as $v) {
                        $msg = $v[0];
                        break;
                    }
                }
            }
        }


        $response['ok'] = $ok;
        $response['msg'] = $msg;
        header('Content-Type: application/json; charset="UTF-8"');
        echo json_encode($response);
        Yii::app()->end();
    }

    public function actionOauthSyncRemove() {
        if (!Yii::app()->request->isAjaxRequest) {
            throw new CHttpException('403', 'Forbidden access.');
        }
        $ok = 0;
        $msg = '';
        if (isset($_POST['provider']) && $_POST['provider'] != '') {
            $criteria = new CDbCriteria();
            $criteria->addCondition("t.user_id='" . Yii::app()->user->id . "'");
            $criteria->addCondition("t.provider='" . $_POST['provider'] . "'");
            SocialAccount::model()->find($criteria)->delete();
            $ok = 1;
            $msg = ucfirst($_POST['provider'] . ' account remove from your successfully.');
        }
        $response['ok'] = $ok;
        $response['msg'] = $msg;
        header('Content-Type: application/json; charset="UTF-8"');
        echo json_encode($response);
        Yii::app()->end();
    }

    public function actionSettings() {
        Yii::app()->request->getBaseUrl(true);
        $data_msg = array();

        $this->set_page_seo("my_account");

        $user_data = User::model()->findByPk($this->user_id);
        $user_pass = $user_data->password;
        $user_data->setScenario('settings_update');
        $this->performAjaxValidation($user_data);
        if (isset($_POST['User'])) {
            $user_data->attributes = $_POST['User'];
            $user_data->password = $user_pass;
            if ($user_data->validate()) {
                //$user_data->first_name = $_POST['User']['first_name'];
                //$user_data->last_name = $_POST['User']['last_name'];
                $user_data->full_name = $_POST['User']['full_name'];
                $user_data->gender = $_POST['User']['gender'];
                $user_data->language_id = $_POST['User']['language_id'];
                $user_data->sound_effect = $_POST['User']['sound_effect'];
                //$user_data->microphone = $_POST['User']['microphone'];
                //$user_data->facebook_url = $_POST['User']['facebook_url'];
                //$user_data->twitter_url = $_POST['User']['twitter_url'];
                //$user_data->gplus_url = $_POST['User']['gplus_url'];
                $user_data->save(false);
                Yii::app()->user->setFlash("success_msg", "Account settings updated successfully!");
                $this->refresh();
            }
        }

        $lcriteria = new CDbCriteria();
        $lcriteria->addCondition("t.Status='1'");
        $languages = Languages::model()->findAll($lcriteria);
        $data_msg['languages'] = CHtml::listData($languages, 'id', 'name');
        $data_msg['model'] = $user_data;
        $data_msg['username'] = $user_data->username;
        $l_criteria = new CDbCriteria();
        $l_criteria->addCondition("t.user_id='" . $this->user_id . "'");
        $l_criteria->addCondition("t.status!='3'");
        $lessons = Lesson::model()->findAll($l_criteria);
        $data_msg['lessons'] = $lessons;
        $data_msg['child_model'] = new Child();
        $this->render("/organization/account_settings", $data_msg);
    }

    public function actionAjaxfetchcategory() {
        
    }

    public function actionPostPassword() {
        $model = User::model()->findByPk($this->user_id);
        $model->setScenario('changePwd');

        if (isset($_POST['ajax']) && $_POST['ajax'] === 'password-settings-form') {
            echo CActiveForm::validate($model);
            Yii::app()->end();
        }

        if (isset($_POST['User'])) {
            $model->attributes = $_POST['User'];
            $model->password = md5($model->new_password);
            $model->save(false);
            Yii::app()->user->setFlash("success_msg", "Account password updated successfully!");
            $this->redirect($this->createUrl('o/account-settings') . "?t=password");
        }
    }

    public function actionCreateChild() {
        if (!Yii::app()->request->isAjaxRequest) {
            throw new CHttpException('403', 'Forbidden access.');
        }

        $child = new Child();
        $child->attributes = $_POST['Child'];
        /* $social->user_id = Yii::app()->user->id;
          $social->provider = $provider;
          $social->email = $email;
          $social->social_id = $id; */
        $child->create_at = date("Y-m-d H:i:s");
        $child->scenario = 'signup';
        if ($child->validate()) {
            $child->activation_code = $this->getKey($child->email);
            $child->save();
            $ok = 1;
            $msg = "Your child's account is created successfully.<br/>Activation mail has been sent.";
            //mail

            $to = $child->email;
            $content = '<a href="' . Yii::app()->request->getBaseUrl(true) . '/activate-account/' . $child->activation_code . '"/>Activate Account</a>';
            $subject = 'Account Activation';
            $headers = "From: account@lingapore.com\r\n";
            $headers .= "Reply-To: " . strip_tags("no-reply@lingapore.com") . "\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
            mail($to, $subject, $content, $headers);
            $list = $this->renderPartial('/organization/child_list', [], true);
            //mail
        } else {
            $ok = 0;
            foreach ($child->getErrors() as $v) {
                $msg = $v[0];
                break;
            }
        }

        $response['ok'] = $ok;
        $response['msg'] = $msg;
        $response['list'] = isset($list) ? $list : '';
        header('Content-Type: application/json; charset="UTF-8"');
        echo json_encode($response);
        Yii::app()->end();
    }

    public function actionSaveRole() {
        echo "<pre>";
        print_r($_POST);
        echo "</pre>";
        exit;
    }

}