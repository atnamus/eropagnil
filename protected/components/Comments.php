<?php
Yii::import('zii.widgets.CPortlet');
 
class Comments extends CPortlet
{
    public $user_id;
    public $comment_id=0;
 
    public function getComments()
    {
        return Comment::model()->findRecentComments($this->maxComments);
    }
 
    protected function renderContent()
    {
        $this->render('comments');
    }
}