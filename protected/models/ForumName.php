<?php

/**
 * This is the model class for table "{{forum_name}}".
 *
 * The followings are the available columns in table '{{forum_name}}':
 * @property string $id
 * @property string $forum_category_id
 * @property string $name
 * @property integer $sort
 * @property string $last_thread_id
 * @property string $last_post_id
 * @property string $thread_count
 * @property string $post_count
 * @property string $create_at
 * @property string $update_at
 * @property integer $status
 */
class ForumName extends AdminModel {
   const STATUS_ACTIVE = 1;
    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return ForumName the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return '{{forum_name}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
// NOTE: you should only define rules for those attributes that
// will receive user inputs.
        return array(
            array('forum_category_id, name, status', 'required'),
            array('sort, status', 'numerical', 'integerOnly' => true),
            array('forum_category_id, last_thread_id, last_post_id, thread_count, post_count', 'length', 'max' => 20),
            array('name', 'length', 'max' => 200),
            array('create_at, update_at', 'safe'),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('id, forum_category_id, name, sort, last_thread_id, last_post_id, thread_count, post_count, create_at, update_at, status', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
// NOTE: you may need to adjust the relation name and the related
// class name for the relations automatically generated below.
        return array(
            'thread' => array(self::HAS_MANY, 'ForumThread', 'forum_name_id'),
            'last_thread' => array(self::BELONGS_TO, 'ForumThread','last_thread_id'),
            'category' => array(self::BELONGS_TO, 'ForumCategory', 'forum_category_id'),
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'id' => 'ID',
            'forum_category_id' => 'Forum Category',
            'name' => 'Name',
            'sort' => 'Sort',
            'last_thread_id' => 'Last Thread',
            'last_post_id' => 'Last Post',
            'thread_count' => 'Thread Count',
            'post_count' => 'Post Count',
            'create_at' => 'Create At',
            'update_at' => 'Update At',
            'status' => 'Status',
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
        $criteria->compare('forum_category_id', $this->forum_category_id, true);
        $criteria->compare('name', $this->name, true);
        $criteria->compare('sort', $this->sort);
        $criteria->compare('last_thread_id', $this->last_thread_id, true);
        $criteria->compare('last_post_id', $this->last_post_id, true);
        $criteria->compare('thread_count', $this->thread_count, true);
        $criteria->compare('post_count', $this->post_count, true);
        $criteria->compare('create_at', $this->create_at, true);
        $criteria->compare('update_at', $this->update_at, true);
        $criteria->compare('status', $this->status);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }
 
}