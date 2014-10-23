<?php

/**
 * This is the model class for table "{{blog}}".
 *
 * The followings are the available columns in table '{{blog}}':
 * @property string $id
 * @property string $blog_category_id
 * @property string $author_id
 * @property string $slug
 * @property string $title
 * @property string $content
 * @property string $image
 * @property string $create_at
 * @property string $update_at
 * @property integer $status
 */
class Blog extends AdminModel {
    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return Blog the static model class
     */

    const STATUS_DRAFT = 0;
    const STATUS_ACTIVE = 1;
    const STATUS_UNPUBLISHED = 2;
    const STATUS_DELETE = 3;

    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return '{{blog}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        return array(
            array('blog_category_id, author_id, slug, title,content', 'required'),
            array('status', 'numerical', 'integerOnly' => true),
            array('blog_category_id, author_id', 'length', 'max' => 20),
            array('slug, image', 'length', 'max' => 255),
          // array('image', 'file', 'types' => 'gif, jpg, png,jpeg'),
            array('id, blog_category_id, author_id, slug, title, content, image, create_at, update_at, status', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        return array(
            'comments' => array(self::HAS_MANY, 'BlogComment', 'blog_id'),
            'commentCount' => array(self::STAT, 'BlogComment', 'blog_id', 'condition' => 'status=' . BlogComment::STATUS_PUBLISHED));
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'id' => 'ID',
            'blog_category_id' => 'Blog Category',
            'author_id' => 'Author',
            'slug' => 'Slug',
            'title' => 'Title',
            'content' => 'Content',
            'image' => 'Image',
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
        $criteria = new CDbCriteria;
        $criteria->compare('id', $this->id, true);
        $criteria->compare('blog_category_id', $this->blog_category_id, true);
        $criteria->compare('author_id', $this->author_id, true);
        $criteria->compare('slug', $this->slug, true);
        $criteria->compare('title', $this->title, true);
        $criteria->compare('content', $this->content, true);
        $criteria->compare('image', $this->image, true);
        $criteria->compare('create_at', $this->create_at, true);
        $criteria->compare('update_at', $this->update_at, true);
        $criteria->compare('status', $this->status);
        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

    public function getBlogImgUrl() {
        if ($this->image == '') {
            $this->image = 'default_blog_large.png';
        }
        return Yii::app()->createAbsoluteUrl('/uploads/images/blog_pic/' . $this->image);
    }

    public function defaultScope() {
        return array('order' => 'create_at DESC');
    }

    public function totalRows() {
        $sql = "SELECT * FROM site_blog";
        $command = Yii::app()->db->createCommand($sql);
        $results = $command->queryAll();
        $count = count($results);
        return $count;
    }

}