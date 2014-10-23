<?php

class DefaultController extends AdminController {

    public function actionIndex() {
        if (!Yii::app()->user->isGuest) {
            $this->render('index', $this->data);
        } else {//non login user
            $this->layout = '//layouts/auth';
            $this->loadJsPlugin('jquery-validation')
                    ->loadPageJs('login.js')
                    ->loadPageCss('login.css');
            $this->render('login', $this->data);
        }
    }

    public function actionError() {
        parent::actionError();
        $this->loadPageCss('error.css');
        $this->render('error-404', $this->data);
    }

}