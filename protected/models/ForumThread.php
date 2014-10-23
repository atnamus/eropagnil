<?php

/**
 * This is the model class for table "{{forum_thread}}".
 *
 * The followings are the available columns in table '{{forum_thread}}':
 * @property string $id
 * @property string $forum_name_id
 * @property string $user_id
 * @property string $title
 * @property string $content
 * @property string $last_post_id
 * @property string $post_count
 * @property string $view_count
 * @property string $create_at
 * @property string $update_at
 */
class ForumThread extends AdminModel {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return ForumThread the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return '{{forum_thread}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
// NOTE: you should only define rules for those attributes that
// will receive user inputs.
        return array(
            array('forum_name_id', 'required'),
            array('forum_name_id, user_id, last_post_id, post_count, view_count', 'length', 'max' => 20),
            array('title', 'length', 'max' => 255),
            array('content, create_at, update_at', 'safe'),
            array('id, forum_name_id, user_id, title, content, last_post_id, post_count, view_count, create_at, update_at', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        return array(
            'author' => array(self::BELONGS_TO, 'User', 'user_id'),
            'posts' => array(self::HAS_MANY, 'ForumPost', 'forum_thread_id', 'order' => 'posts.create_at DESC'),
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'id' => 'ID',
            'forum_name_id' => 'Forum Name',
            'user_id' => 'User',
            'title' => 'Title',
            'content' => 'Content',
            'last_post_id' => 'Last Post',
            'post_count' => 'Post Count',
            'view_count' => 'View Count',
            'create_at' => 'Create At',
            'update_at' => 'Update At',
        );
    }

    /**
     * Retrieves a list of models based on the current search/filter conditions.
     * @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
     */
    public function search() {
        $criteria = new CDbCriteria;
        $criteria->compare('id', $this->id, true);
        $criteria->compare('forum_name_id', $this->forum_name_id, true);
        $criteria->compare('user_id', $this->user_id, true);
        $criteria->compare('title', $this->title, true);
        $criteria->compare('content', $this->content, true);
        $criteria->compare('last_post_id', $this->last_post_id, true);
        $criteria->compare('post_count', $this->post_count, true);
        $criteria->compare('view_count', $this->view_count, true);
        $criteria->compare('create_at', $this->create_at, true);
        $criteria->compare('update_at', $this->update_at, true);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

    public function getCreated_date() {
        return $this->create_at;
    }

    public function defaultScope() {
        return array('order' => 'create_at ASC');
    }

    public function getTime() {
        return date("F d,Y h:i a", strtotime($this->create_at));
    }

    public function totalPosts($thread_id) {

        $sql = "SELECT * FROM site_forum_post WHERE forum_thread_id='$thread_id'";
        $command = Yii::app()->db->createCommand($sql);
        $results = $command->queryAll();
        $count = count($results);
        return $count;
    }

    public function lastPost($id) {
        $model = ForumThread::model()->findByPk($id);
        $last_post_id = $model['last_post_id'];
        $sql = "SELECT * FROM site_forum_post WHERE id='$last_post_id'";
        $command = Yii::app()->db->createCommand($sql);
        $result = $command->queryAll();
        return $result;
    }

    public function getAll($id) {

        $sql = "SELECT * FROM site_forum_thread WHERE forum_name_id='$id'";
        $command = Yii::app()->db->createCommand($sql);
        $results = $command->queryAll();
        return $results;
    }

    public function getLastPostId($id, $thread_id) {

        $sql = "SELECT last_post_id FROM site_forum_thread WHERE id='$id' AND forum_name_id='$thread_id'";
        $command = Yii::app()->db->createCommand($sql);
        $results = $command->queryAll();
        return $results;
    }

    public function getUserName($id) {
        $sql = "SELECT * FROM site_user WHERE id='$id'";
        $command = Yii::app()->db->createCommand($sql);
        $results = $command->queryAll();
        return $results;
    }

    public function makeUrl($id) {
        $sql = "SELECT * FROM site_forum_thread WHERE last_post_id='$id'";
        $command = Yii::app()->db->createCommand($sql);
        $results = $command->queryAll();
        return $results;
    }

   

    public function scopes() {
        return array(
            'published' => array(
                'condition' => 'status=1',
            ),
            'recently' => array(
                'order' => 'create_at DESC',
                'limit' => 5,
            ),
        );
    }

}