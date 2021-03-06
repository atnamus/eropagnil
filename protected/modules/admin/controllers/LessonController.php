<?php

class LessonController extends AdminController {

    /**
     * @return array action filters
     */
    public function filters() {
        return array(
            'accessControl', // perform access control for CRUD operations
            'postOnly + delete', // we only allow deletion via POST request
        );
    }

    /**
     * Specifies the access control rules.
     * This method is used by the 'accessControl' filter.
     * @return array access control rules
     */
    public function accessRules() {
        return [
            [
                'allow', // allow admin user to perform 'admin' and 'delete' actions
                'actions' => array('index', 'view', 'delete', 'create', 'update'),
                'roles' => array('admin'),
            ],
            [
                'deny', // deny all users
                'users' => array('*'),
            ],
        ];
    }

    /**
     * Displays a particular model.
     * @param integer $id the ID of the model to be displayed
     */
    public function actionView($id) {
        $this->render('view', array(
            'model' => $this->loadModel($id),
        ));
    }

    /**
     * Creates a new model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     */
    public function actionCreate() {
        $model = new Lesson;
        // $this->performAjaxValidation($model);
        if (isset($_POST['Lesson'])) {
            $model->attributes = $_POST['Lesson'];
            if ($model->save()) {
                Yii::app()->user->setFlash('success_msg', "Lesson created successfully");
               // $this->redirect(array('update', 'id' => $model->id));
                $this->redirect(array('Index'));
                
            }
        }
        $this->render('create', array(
            'model' => $model,
        ));
    }

    /**
     * Updates a particular model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id the ID of the model to be updated
     */
    public function actionUpdate($id) {
        $model = $this->loadModel($id);
        if (isset($_POST['Lesson'])) {
            $model->attributes = $_POST['Lesson'];
            if ($model->save()) {
                Yii::app()->user->setFlash('success_msg', "Lesson updated successfully");
                $this->redirect(array('update', 'id' => $model->id));
            }
        }

        $this->render('update', array(
            'model' => $model,
        ));
    }

    /**
     * Deletes a particular model.
     * If deletion is successful, the browser will be redirected to the 'admin' page.
     * @param integer $id the ID of the model to be deleted
     */
    public function actionDelete($id) {
        $this->loadModel($id)->delete();
        // if AJAX request (triggered by deletion via admin grid view), we should not redirect the browser
        if (!isset($_GET['ajax']))
            $this->redirect(isset($_POST['returnUrl']) ? $_POST['returnUrl'] : array('admin'));
    }

    /**
     * Manages all models.
     */
    public function actionIndex() {
        $model = new Lesson('search');
        $model->unsetAttributes();  // clear any default values
        if (isset($_GET['Lesson']))
            $model->attributes = $_GET['Lesson'];

        $this->render('list', array(
            'model' => $model,
        ));
    }

    /**
     * Returns the data model based on the primary key given in the GET variable.
     * If the data model is not found, an HTTP exception will be raised.
     * @param integer $id the ID of the model to be loaded
     * @return Lesson the loaded model
     * @throws CHttpException
     */
    public function loadModel($id) {
        $model = Lesson::model()->findByPk($id);
        if ($model === null)
            throw new CHttpException(404, 'The requested page does not exist.');
        return $model;
    }

    /**
     * Performs the AJAX validation.
     * @param Lesson $model the model to be validated
     */
    protected function performAjaxValidation($model) {
        if (isset($_POST['ajax']) && $_POST['ajax'] === 'lesson-form') {
            echo CActiveForm::validate($model);
            Yii::app()->end();
        }
    }

}
