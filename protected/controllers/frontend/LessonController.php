<?php

class LessonController extends FrontController {

    public $layout = "/layouts/frontend";

    protected function performAjaxValidation($model) {
        if (isset($_POST['ajax']) && $_POST['ajax'] === 'contactform') {
            echo CActiveForm::validate($model);
            Yii::app()->end();
        }
    }

    public function actionIndex() {
        $data_msg = array();
        
        $this->render("/home", $data_msg);
    }

    public function actionCreatelession(){
        $data_msg=array();
        
        
        $this->render("/create_lession");
    }
    
    public function actionAjaxsavelession(){
        if(yii::app()->request->isAjaxRequest){
            $model=new Lesson();
            
            $request=Yii::app()->request;
            $title=$request->getPost("title");
            $stage=$request->getPost("stage");
            $category=$request->getPost("category");
            $level=$request->getPost("level");
            $tags=$request->getPost("tags");
            $memo=$request->getPost("memo");
            
            $model->Title=$title;
            $model->Stage=$stage;
            $model->CategoryId=$category;
            $model->Level=$level;
            $model->Memo=$memo;
            $model->AddedDate=date("Y-m-d H:i:s");
            $model->UpdatedDate=date("Y-m-d H:i:s");
            $model->Status="";
            
        }
    }
}