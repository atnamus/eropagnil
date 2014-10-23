<?php

class HomeController extends FrontController {

    public $layout = "//layouts/main";

    protected function performAjaxValidation($model) {
        if (isset($_POST['ajax']) && $_POST['ajax'] === 'contactform') {
            echo CActiveForm::validate($model);
            Yii::app()->end();
        }
    }

    public function actionMemberhome() {
        
        $this->set_page_seo("home_page");
        
        $data_msg = array();

        $blocks = array();

        $block_data = CmsBlocks::model()->findByAttributes(array("slug" => "up-for-fun", "language_id" => $this->language_id));
        $blocks['up-for-fun'] = $block_data;

        $block_data = CmsBlocks::model()->findByAttributes(array("slug" => "see-my-score", "language_id" => $this->language_id));
        $blocks['see-my-score'] = $block_data;

        $block_data = CmsBlocks::model()->findByAttributes(array("slug" => "collect-mileage", "language_id" => $this->language_id));
        $blocks['collect-mileage'] = $block_data;

        $block_data = CmsBlocks::model()->findByAttributes(array("slug" => "way-to-being-a-pro", "language_id" => $this->language_id));
        $blocks['way-to-being-a-pro'] = $block_data;

        $data_msg['blocks'] = $blocks;

        $stages = LessonStage::model()->findAllByAttributes(array("status" => "1"));

        $data_msg['stages'] = $stages;
        
        $languages = Languages::model()->findAllByAttributes(array("status" => "1"));
        
        $data_msg['languages'] = $languages;

        $this->render("/home", $data_msg);
    }

    public function actionAboutus() {
        $data_msg = array();
        $this->set_page_seo("about_us");
        $this->render("/about_us", $data_msg);
    }

    public function actionPrivacy() {
        $data_msg = array();
        $this->set_page_seo("privacy");
        $this->render("/privacy", $data_msg);
    }

    public function actionTerms() {
        $data_msg = array();
        $this->set_page_seo("terms");
        $this->render("/terms", $data_msg);
    }

    public function actionSignup() {
        $data_msg = array();
        $this->set_page_seo("sign_up");
        $this->render("/sign_up", $data_msg);
    }

}