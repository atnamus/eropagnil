<?php

/**
 * This is the model class for table "{{forum_category}}".
 *
 * The followings are the available columns in table '{{forum_category}}':
 * @property string $id
 * @property string $name
 * @property string $forum_count
 * @property integer $sort
 * @property string $create_at
 * @property string $update_at
 * @property integer $status
 */
class ForumCategory extends AdminModel {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return ForumCategory the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return '{{forum_category}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        return array(
            array('sort, status', 'numerical', 'integerOnly' => true),
            array('name', 'length', 'max' => 200),
            array('forum_count', 'length', 'max' => 11),
            array('create_at, update_at', 'safe'),
            array('name', 'unique'),
            array('id, name, forum_count, sort, create_at, update_at, status', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        return array(
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'id' => 'ID',
            'name' => 'Name',
            'forum_count' => 'Forum Count',
            'sort' => 'Sort',
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
        $criteria->compare('name', $this->name, true);
        $criteria->compare('forum_count', $this->forum_count, true);
        $criteria->compare('sort', $this->sort);
        $criteria->compare('create_at', $this->create_at, true);
        $criteria->compare('update_at', $this->update_at, true);
        $criteria->compare('status', $this->status);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

}