<?php

/**
 * This is the model class for table "{{forum_post}}".
 *
 * The followings are the available columns in table '{{forum_post}}':
 * @property string $id
 * @property string $forum_thread_id
 * @property string $user_id
 * @property string $content
 * @property string $create_at
 * @property string $update_at
 */
class ForumPost extends AdminModel {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return ForumPost the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return '{{forum_post}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        return array(
            array('forum_thread_id','required'),
            array('forum_thread_id, user_id', 'length', 'max' => 20),
            array('content, create_at, update_at', 'safe'),
            array('id, forum_thread_id, user_id, title, content, create_at, update_at', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        return array(
            'thread' => array(self::BELONGS_TO, 'ForumThread', 'forum_thread_id','order'=>'thread.create_at DESC'),
            'author' => array(self::BELONGS_TO, 'User', 'user_id'),
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'id' => 'ID',
            'forum_thread_id' => 'Forum Thread',
            'user_id' => 'User',
            'content' => 'Content',
            'create_at' => 'Create At',
            'update_at' => 'Update At',
        );
    }

    /**
     * Retrieves a list of models based on the current search/filter conditions.
     * @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
     */
    public function search() {
// Warning: Please modify the following code to remove attributes that
// should not be searched.

        $criteria = new CDbCriteria;
        $criteria->compare('id', $this->id, true);
        $criteria->compare('forum_thread_id', $this->forum_thread_id, true);
        $criteria->compare('user_id', $this->user_id, true);
        $criteria->compare('content', $this->content, true);
        $criteria->compare('create_at', $this->create_at, true);
        $criteria->compare('update_at', $this->update_at, true);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

    public function defaultScope() {
        return array('order' => 'create_at ASC');
    }

    public function getTime() {
        return $this->create_at;
    }

    public function totalPosts() {
        $sql = "SELECT * FROM site_forum_post";
        $command = Yii::app()->db->createCommand($sql);
        $results = $command->queryAll();
        $count = count($results);
        return $count;
    }

    public function lastPost($id) {
        $sql = "SELECT * FROM site_forum_name WHERE forum_category_id='$id'";
        $command = Yii::app()->db->createCommand($sql);
        $result = $command->queryAll();
        return $result;
    }

  
}