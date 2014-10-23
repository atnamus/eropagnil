<?php

/**
 * This is the model class for table "{{seo}}".
 *
 * The followings are the available columns in table '{{seo}}':
 * @property string $id
 * @property string $title
 * @property string $description
 * @property string $keyword
 * @property string $page_name
 * @property integer $language_id
 * @property string $create_at
 * @property string $update_at
 * @property integer $status
 */
class Seo extends AdminModel {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return Seo the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return '{{seo}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
// NOTE: you should only define rules for those attributes that
// will receive user inputs.
        return array(
            array('title, description, keyword, page_name, language_id', 'required'),
            array('language_id, status', 'numerical', 'integerOnly' => true),
            array('title', 'length', 'max' => 255),
            array('page_name', 'length', 'max' => 50),
            array('page_name', 'ext.UniqueAttributesValidator', 'with' => 'language_id'),
// The following rule is used by search().
// Please remove those attributes that should not be searched.
            array('id, title, description, keyword, page_name, language_id, create_at, update_at, status', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
// NOTE: you may need to adjust the relation name and the related
// class name for the relations automatically generated below.
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
            'description' => 'Description',
            'keyword' => 'Keyword',
            'page_name' => 'Page Name',
            'language_id' => 'Language',
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
        $criteria->compare('title', $this->title, true);
        $criteria->compare('description', $this->description, true);
        $criteria->compare('keyword', $this->keyword, true);
        $criteria->compare('page_name', $this->page_name, true);
        $criteria->compare('language_id', $this->language_id);
        $criteria->compare('create_at', $this->create_at, true);
        $criteria->compare('update_at', $this->update_at, true);
        $criteria->compare('status', $this->status);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

}
