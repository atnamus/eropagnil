<?php

/**
 * This is the model class for table "{{cms_blocks}}".
 *
 * The followings are the available columns in table '{{cms_blocks}}':
 * @property integer $id
 * @property string $title
 * @property string $slug
 * @property string $content
 * @property integer $language_id
 * @property integer $status
 * @property string $create_at
 * @property string $update_at
 */
class Cms extends AdminModel {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return Cms the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return '{{cms_blocks}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
// NOTE: you should only define rules for those attributes that
// will receive user inputs.
        return array(
            array('title, slug, content, language_id', 'required'),
            array('language_id, status', 'numerical', 'integerOnly' => true),
            array('title', 'length', 'max' => 255),
            array('slug', 'length', 'max' => 100),
            array('slug', 'ext.UniqueAttributesValidator', 'with' => 'language_id'),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('id, title, slug, content, language_id, status, create_at, update_at', 'safe', 'on' => 'search'),
            array('title, slug, content, language_id, status', 'safe'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        return array(
            'language' => array(self::BELONGS_TO, 'Languages', 'language_id'),
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'id' => 'ID',
            'title' => 'Title',
            'slug' => 'Slug',
            'content' => 'Content',
            'language_id' => 'Language',
            'status' => 'Status',
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

        $criteria->compare('id', $this->id);
        $criteria->compare('title', $this->title, true);
        $criteria->compare('slug', $this->slug, true);
        $criteria->compare('content', $this->content, true);
        $criteria->compare('language_id', $this->language_id);
        $criteria->compare('status', $this->status);
        $criteria->compare('create_at', $this->create_at, true);
        $criteria->compare('update_at', $this->update_at, true);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

}
