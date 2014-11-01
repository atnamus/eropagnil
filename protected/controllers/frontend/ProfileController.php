<?php

class ProfileController extends FrontController {

    public $layout = "//layouts/main";

    protected function performAjaxValidation($model) {
        if (isset($_POST['ajax']) && $_POST['ajax'] === 'account-settings-form') {
            echo CActiveForm::validate($model);
            Yii::app()->end();
        }
    }

    public function actionViewprofile($username) {
        $data_msg = array();
        if ($this->user_type_id >= "3") {
            $this->redirect($this->createUrl("home/Memberhome"));
            exit;
        }

        $criteria = new CDbCriteria();

        $criteria->addCondition("t.username='" . $username . "'");

        $user_details = User::model()->find($criteria);

        if (empty($user_details)) {
            $this->redirect($this->createUrl("home/Memberhome"));
            exit;
        }

        $data_msg['user_details'] = $user_details;

        $criteria = new CDbCriteria();

        $criteria->addCondition("t.user_id='" . $user_details->id . "'");

        $criteria->order = "t.create_at DESC";

        $criteria->limit = 6;

        $correction_post = Correction::model()->findAll($criteria);

        $data_msg['correction_post'] = $correction_post;

        $criteria = new CDbCriteria();

        $criteria->addCondition("t.user_id='" . $user_details->id . "'");
        $criteria->addCondition("t.comment_type='0'");

        $criteria->order = "t.create_at DESC";
        $criteria->limit = 6;
//        $criteria->group = "t.correction_id";


        $correction_made = CorrectionComments::model()->with("correction")->findAll($criteria);

        $data_msg['correction_post'] = $correction_post;
        $data_msg['correction_made'] = $correction_made;

        $criteria = new CDbCriteria();

        $criteria->addCondition("t.user_id='" . $user_details->id . "'");
        $criteria->addCondition("t.status='1'");

        $criteria->order = "t.create_at DESC";

        $criteria->limit = 6;

        $lessons = Lesson::model()->findAll($criteria);

        $data_msg['lessons'] = $lessons;

        $followers = UserFollow::model()->get_followers($user_details->id, 10);

        $data_msg['total_followers'] = $followers['total'];

        $data_msg['all_followers'] = $followers['all_data'];
        
        $following = UserFollow::model()->get_following($user_details->id, 10);
        
        $data_msg['total_following'] = $following['total'];

        $data_msg['all_following'] = $following['all_data'];
        
        $follow_status="U";
        
        $follow=UserFollow::model()->findByAttributes(array("follower_id"=>$this->user_id,"following_id"=>$user_details->id,"status"=>"1"));
        
        if(!empty($follow)){
            $follow_status="F";
        }
        
        $data_msg['follow_status']=$follow_status;

        $this->render("/learner_profile", $data_msg);
    }

    public function actionSettings() {
        $data_msg = array();

        if ($this->user_type_id >= "3") {
            $this->redirect($this->createUrl("home/Memberhome"));
            exit;
        }

        $this->set_page_seo("my_account");

        $user_data = User::model()->findByPk($this->user_id);
        $user_pass = $user_data->password;

        $user_data->setScenario('settings_update');

        $this->performAjaxValidation($user_data);

        if (isset($_POST['User'])) {
            $user_data->attributes = $_POST['User'];
            $user_data->password = $user_pass;

            if ($user_data->validate()) {
//                $user_data->first_name = $_POST['User']['first_name'];
//                $user_data->last_name = $_POST['User']['last_name'];
                $user_data->full_name = $_POST['User']['full_name'];
                $user_data->gender = $_POST['User']['gender'];
                $user_data->language_id = $_POST['User']['language_id'];
                $user_data->sound_effect = $_POST['User']['sound_effect'];
                $user_data->microphone = $_POST['User']['microphone'];
                $user_data->facebook_url = $_POST['User']['facebook_url'];
                $user_data->twitter_url = $_POST['User']['twitter_url'];
                $user_data->gplus_url = $_POST['User']['gplus_url'];

                if (trim($_POST['User']['password']) != "") {
                    $user_data->password = md5($_POST['User']['password']);
                }

                $user_data->save();
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

        $stages = LessonStage::model()->findAllByAttributes(array("status" => "1"));

        $data_msg['stages'] = $stages;

        $languages = Languages::model()->findAllByAttributes(array("status" => "1"));

        $data_msg['all_languages'] = $languages;

        $this->render("/account_settings", $data_msg);
    }

    public function actionAjaxfetchcategory() {
        
    }

}
