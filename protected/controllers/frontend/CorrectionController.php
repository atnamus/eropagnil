<?php

class CorrectionController extends FrontController {

    /**
     * @var string the default layout for the views. Defaults to '//layouts/column2', meaning
     * using two-column layout. See 'protected/views/layouts/column2.php'.
     */
    public $layout = "//layouts/main";

    public function actionPost() {

        $data_msg = array();
        
        $total_corrections = Correction::model()->get_correction_counts($this->user_id);

        $data_msg['entries_written'] = $total_corrections['entries_written'];

        $languages = Languages::model()->findAllByAttributes(array("status" => "1"));

        $data_msg['languages'] = $languages;

        $this->render("/post_correction", $data_msg);
    }

    public function actionViewcorrection($display_id) {
        $data_msg = array();
        
        $criteria=new CDbCriteria();
        $criteria->addCondition("t.display_id='$display_id'");
        $criteria->addCondition("t.status!=3");

        $correction_details = Correction::model()->with("language")->find($criteria);

        if (empty($correction_details)) {
            $this->redirect(Yii::app()->request->baseUrl);
            exit;
        }

        $total_corrections = Correction::model()->get_correction_counts($this->user_id);

        $data_msg['entries_written'] = $total_corrections['entries_written'];

        $is_owner = false;

        if ($correction_details->user_id == $this->user_id) {
            $is_owner = true;
        }
        if ($correction_details->user_id != $this->user_id) {
            $visited = CorrectionVisit::model()->findByAttributes(array("user_id" => $this->user_id, "correction_id" => $correction_details->id));

            if (empty($visited)) {
                $visit = new CorrectionVisit();
                $visit->user_id = $this->user_id;
                $visit->correction_id = $correction_details->id;
                $visit->create_at = date("Y-m-d H:i:s");
                $visit->save();

                $v_criteria = new CDbCriteria();
                $v_criteria->select = "count(id) as `Total`";
                $v_criteria->addCondition("t.correction_id='" . $correction_details->id . "'");
                $visit_count = CorrectionVisit::model()->find($v_criteria);
                $correction_details->total_views = $visit_count->Total;
                $correction_details->save();
            }
        }

        $data_msg['is_owner'] = $is_owner;

        $title = $correction_details->title;

        if ($correction_details->title == "") {
            $expl = explode("\n", $correction_details->intro_text);

            if (count($expl) == 0) {
                $title = $correction_details->intro_text;
            } else {
                $title = $expl[0];
            }
        }

        $data_msg['title'] = $title;

        $data_msg['post_date'] = date("M d, Y h:s", strtotime($correction_details->create_at));

        $visible_to = 0;

        $visibility = "";

        switch ($correction_details->visible_to) {

            case "0":
                $visibility = "Public";
                break;

            case "1":
                $visibility = "Users";
                break;

            case "2":
                $visibility = "Friends";
                break;

            case "3":
                $visibility = "Private";
                break;
        }

        $data_msg['visible_to'] = $correction_details->visible_to;
        $data_msg['visibility'] = $visibility;

        $data_msg['total_likes'] = $correction_details->total_likes;
        $data_msg['total_views'] = $correction_details->total_views;
        $data_msg['total_comments'] = $correction_details->total_comments;
        $data_msg['total_corrections'] = $correction_details->total_corrections;

        $lang_details = Languages::model()->findByPk($correction_details->language_id);

        $data_msg['language'] = $lang_details->name;

        $data_msg['cor_dtls'] = $correction_details;

        $i_liked = 0;

        $criteria = new CDbCriteria();

        $criteria->select = "count(*) as `TotalLikes`";

        $criteria->addCondition("t.user_id!='" . $this->user_id . "'");

        $criteria->addCondition("t.correction_id='" . $correction_details->id . "'");

        $likes = CorrectionLike::model()->find($criteria);

        $other_likes = $likes->TotalLikes;

        $data_msg['other_likes'] = $other_likes;

        $criteria = new CDbCriteria();

        $criteria->select = "count(*) as `TotalLikes`";

        $criteria->addCondition("t.user_id='" . $this->user_id . "'");

        $criteria->addCondition("t.correction_id='" . $correction_details->id . "'");

        $my_likes = CorrectionLike::model()->find($criteria);

        if ($my_likes->TotalLikes == 1) {
            $i_liked = 1;
        }

        $data_msg['i_liked'] = $i_liked;

        $this->render("/correction_details", $data_msg);
    }

    public function actionListcorrection() {
        $data_msg = array();

        $criteria=new CDbCriteria();

        $criteria->addCondition("t.status!='3'");
        $criteria->order="t.create_at DESC";
        
        $latest_entries=Correction::model()->with("user","language")->findAll($criteria);

        $data_msg['latest_entries']=$latest_entries;

        $this->render("/correction_list", $data_msg);
    }

    public function actionEditcorrection($display_id) {
        $data_msg = array();
        
        $criteria=new CDbCriteria();
        $criteria->addCondition("display_id='$display_id'");
        $criteria->addCondition("status!=3");

        $correction_model = Correction::model()->find($criteria);

        if (empty($correction_model)) {
            $this->redirect(Yii::app()->request->baseUrl);
            exit;
        }
        
        if($correction_model->user_id!=$this->user_id){
            $this->redirect(Yii::app()->request->baseUrl);
            exit;
        }
        
        $data_msg['display_id']=$display_id;
        
        $total_corrections = Correction::model()->get_correction_counts($this->user_id);

        $data_msg['entries_written'] = $total_corrections['entries_written'];

        $data_msg['correction'] = $correction_model;

        $languages = Languages::model()->findAllByAttributes(array("status" => "1"));

        $data_msg['languages'] = $languages;

        $tags = CorrectionTags::model()->with("tag")->findAllByAttributes(array("correction_id" => $correction_model->id));

        $tags_array = array();

        $tag_str = "";

        foreach ($tags as $key => $val) {
            if ($key == 0) {
                $tag_str = $val['tag']->name;
            } else {
                $tag_str.=" " . $val['tag']->name;
            }
        }

        $data_msg['tags'] = $tag_str;

        $this->render("/edit_correction", $data_msg);
    }
    
    function actionDeletecorrection($display_id){
        $correction_model = Correction::model()->findByAttributes(array("display_id" => $display_id));

        if (empty($correction_model)) {
            $this->redirect(Yii::app()->request->baseUrl);
            exit;
        }
        
        if($correction_model->user_id!=$this->user_id){
            $this->redirect(Yii::app()->request->baseUrl);
            exit;
        }
        
        $correction_model->status="3";
        $correction_model->save();
        Yii::app()->user->setFlash("success_msg","Correction Deleted Successfully!");
        $this->redirect(array("/home/Memberhome"));
        exit;
    }

    /**
     * Returns the data model based on the primary key given in the GET variable.
     * If the data model is not found, an HTTP exception will be raised.
     * @param integer $id the ID of the model to be loaded
     * @return UserMaster the loaded model
     * @throws CHttpException
     */
    public function loadModel($id) {
        $model = UserMaster::model()->findByPk($id);
        if ($model === null)
            throw new CHttpException(404, 'The requested page does not exist.');
        return $model;
    }

    /**
     * Performs the AJAX validation.
     * @param UserMaster $model the model to be validated
     */
    protected function performAjaxValidation($model) {
        if (isset($_POST['ajax']) && $_POST['ajax'] === 'user-master-form') {
            echo CActiveForm::validate($model);
            Yii::app()->end();
        }
    }

}
