<?php

/**
 * This is the model class for table "{{parent_child}}".
 *
 * The followings are the available columns in table '{{parent_child}}':
 * @property string $id
 * @property string $parent_id
 * @property string $user_id
 * @property integer $status
 * @property string $create_at
 * @property string $update_at
 */
class ParentChild extends AdminModel {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return ParentChild the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return '{{parent_child}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
// NOTE: you should only define rules for those attributes that
// will receive user inputs.
        return array(
            array('parent_id, user_id, status, create_at, update_at', 'required'),
            array('status', 'numerical', 'integerOnly' => true),
            array('parent_id, user_id', 'length', 'max' => 20),
// The following rule is used by search().
// Please remove those attributes that should not be searched.
            array('id, parent_id, user_id, status, create_at, update_at', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
// NOTE: you may need to adjust the relation name and the related
// class name for the relations automatically generated below.
        return array(
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'id' => 'ID',
            'parent_id' => 'Parent',
            'user_id' => 'User',
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

        $criteria->compare('id', $this->id, true);
        $criteria->compare('parent_id', $this->parent_id, true);
        $criteria->compare('user_id', $this->user_id, true);
        $criteria->compare('status', $this->status);
        $criteria->compare('create_at', $this->create_at, true);
        $criteria->compare('update_at', $this->update_at, true);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

}