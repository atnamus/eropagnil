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

        $this->render("/learner_profile", $data_msg);
    }

    public function actionSettings() {
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

        $l_criteria->addCondition("t.user_id='".$this->user_id."'");
        
        $l_criteria->addCondition("t.status!='3'");

        $lessons = Lesson::model()->findAll($l_criteria);
        
        $data_msg['lessons']=$lessons;

        $this->render("/account_settings", $data_msg);
    }

    public function actionAjaxfetchcategory() {
        
    }

}