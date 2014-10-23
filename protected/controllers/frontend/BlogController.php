<?php

class BlogController extends FrontController {

    public $layout = "//layouts/main";

    public function actionIndex() {
        $data_msg = array();
        $criteria = new CDbCriteria();
        $criteria->compare('status', Blog::STATUS_ACTIVE);
        $data_msg['blog_list'] = Blog::model()->findAll($criteria, ['order' => 'create_at DESC']);
        $this->render("/blog_home", $data_msg);
    }

    public function actionBlogDetails($slug, $id) {
        if (isset($_POST['submit'])) {
            $comment = $_POST['comment'];
            if (!$comment == "") {
                $model = new BlogComment;
                $model->blog_id = $id;
                $model->author_id = Yii::app()->user->id;
                $model->comment = $comment;
                $model->status =2;
                $model->save();
            }
            Yii::app()->controller->refresh();
        }
        $data_msg = array();
        $data_msg['blog_details'] = Blog::model()->findByPk($id);
        $data_msg['blog_comments'] = Blogcomment::model()->findAll();
        $this->render("/blog_details", $data_msg);
    }

    public function actionAddBlog() {
        $upload_error = array();
        $upload_error['error'] = "";
        if (isset($_POST['button'])) {
            //if (!$_POST['blog'] == "") {
            $model = new Blog;
            $model->author_id = Yii::app()->user->id;
            $model->title = $_POST['title'];
            $model->content = $_POST['blog'];
            $model->blog_category_id = 1;
            $model->slug = "abc-fgd";
            $model->status =1;
            if(isset($file))
            $file = CUploadedFile::getInstance($model, 'image');
            $file = $_FILES["image"]["name"];
             if(isset($file)){
            $allowedExts = array("gif", "jpeg", "jpg", "png");
            $temp = explode(".", $_FILES["image"]["name"]);
            $extension = end($temp);
            if ((($_FILES["image"]["type"] == "image/gif") || ($_FILES["image"]["type"] == "image/jpeg") || ($_FILES
                    ["image"]["type"] == "image/jpg") || ($_FILES["image"]["type"] == "image/pjpeg") || ($_FILES["image"]["type"] == "image/x-
png") || ($_FILES["image"]["type"] == "image/png")) && in_array($extension, $allowedExts)) {
                //   if ($_FILES["image"]["error"] > 0) {
                //   echo "error " . $_FILES["image"]["error"];
                //  } else {
                $file = $_FILES["image"]["name"];
}
                $model->save();
                if($file!=""){
                if ($model->save()) {
                    $update = Blog::model()->findByPk($model->id);
                    $update->image = time() . $_FILES["image"]["name"];
                    $update->save();
                    move_uploaded_file($_FILES["image"]["tmp_name"], Yii::app()->basePath . '\..\uploads\images\blog_pic\\' . time()
                            . $_FILES["image"]["name"]);
                    Yii::app()->controller->refresh();
                    //$this->redirect(array("blog/add"));
                }
                }
          
            } else {
                $upload_error['error'] = "Please check the type of the file you uploaded";               
            }
        }
      
        $this->render("/add_blog", $upload_error);
    }

}

