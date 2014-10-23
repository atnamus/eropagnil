<?php

class ForumController extends FrontController {

    public $layout = "//layouts/main";

    public function actionIndex() {
        $data_msg = array();
        $this->set_page_seo('forum');
        $criteria = new CDbCriteria();
        $criteria->compare('status', ForumCategory::STATUS_ACTIVE);
        $data_msg['forum_category'] = ForumCategory::model()->findAll($criteria,['order' => 'sort']);
        $this->render("/forum_home", $data_msg);
    }

    public function actionForumDetails($slug, $id) {
        $thread = ForumThread::model()->getAll($id);
        $count = count($thread); //total thread count      
        $total_posts = 0;
        for ($i = 0; $i < $count; $i++) {
            $post_count = $thread[$i]['post_count'];
            $total_posts = $total_posts + $post_count;
        }
        $last_thread_id = $thread[$count - 1]['id']; //last thread id 
        // $total_posts = ForumPost::model()->totalPosts(); //total posts of a particular thread 
        $model = ForumName::model()->findByPk($id);
        $model->last_thread_id = $last_thread_id;
        $model->last_post_id = $total_posts;
        $model->thread_count = $count; //from thread table
        $model->post_count = $total_posts; //from post table using thread id
        $model->save();
        $data_msg = array();
        $data_msg['forum'] = ForumName::model()->findByPk($id);
        $this->render("/forum_details", $data_msg);
    }

    public function actionThreadDetails($slug, $thread_id) {
        $data_msg = array();
        $data_msg['thread'] = ForumThread::model()->findByPk($thread_id, array(
            'order' => 'create_at DESC',
        ));
        $posts_per_thread = $data_msg['thread']->post_count;
        $dataProvider = new CActiveDataProvider('ForumThread', array(
            'criteria' => array(
                //'condition' => 'status=1',
                'order' => 'create_at DESC'
            ),
            'pagination' => array('pageSize' => 2,),
            'totalItemCount' => $posts_per_thread,
                )
        );

        if (isset($_POST['button'])) {
            $content = $_POST['post'];
            if (!$content == "") {
                $model = new ForumPost;
                $model->content = $content;
                $model->user_id = Yii::app()->user->id;
                $model->forum_thread_id = $thread_id;
                $model->save();
                $model1 = ForumThread::model()->findByPk($thread_id);
                $last_post_id = $model->id;
                $model1->last_post_id = $last_post_id;
                $model1->save();
                Yii::app()->controller->refresh();
            }
        }
        $model2 = ForumThread::model()->findByPk($thread_id);
        $count = $model2->view_count;
        $count1 = $count + 1;
        $model2 = ForumThread::model()->findByPk($thread_id);
        $model2->view_count = $count1;
        $model2->save();
        $total = ForumThread::model()->totalPosts($thread_id);
        $model2 = ForumThread::model()->findByPk($thread_id);
        $model2->post_count = $total;
        $model2->save();
        $this->render("/forum_thread", $data_msg);
        
    }

}