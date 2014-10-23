<?php

class MyprofileController extends AdminController {

    public function actionIndex() {
        $model = AdminUser::model()->findByPk(Yii::app()->user->id);
        $this->data['model'] = $model;
        if (isset($_POST['AdminUser'])) {
            $model->attributes = $_POST['AdminUser'];
            $model->scenario = 'update';
            if ($model->save()) {
                Yii::app()->user->setFlash('success_msg', "Profile updated successfully");
                $this->refresh();
            } else {
                // $erros = $model->getErrors();
                // $error = array_pop($erros);
                //Yii::app()->user->setFlash('error_msg', $error);
            }
        }
        $this->render('update', $this->data);
    }

}