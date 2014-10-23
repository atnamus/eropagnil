<?php

/**
 * This is the model class for table "{{contact_us}}".
 *
 * The followings are the available columns in table '{{contact_us}}':
 * @property string $id
 * @property string $name
 * @property string $email
 * @property string $subject
 * @property string $message
 * @property string $create_at
 */
class ContactUs extends AdminModel {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return ContactUs the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return '{{contact_us}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
// NOTE: you should only define rules for those attributes that
// will receive user inputs.
        return array(
            array('name, email, subject, message, create_at', 'required'),
            array('name', 'length', 'max' => 50),
            array('email', 'length', 'max' => 254),
            array('subject', 'length', 'max' => 255),
// The following rule is used by search().
// Please remove those attributes that should not be searched.
            array('id, name, email, subject, message, create_at', 'safe', 'on' => 'search'),
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
            'name' => 'Name',
            'email' => 'Email',
            'subject' => 'Subject',
            'message' => 'Message',
            'create_at' => 'Create At',
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
        $criteria->compare('email', $this->email, true);
        $criteria->compare('subject', $this->subject, true);
        $criteria->compare('message', $this->message, true);
        $criteria->compare('create_at', $this->create_at, true);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
            'sort' => array(
                'defaultOrder' => 'create_at DESC',
            )
        ));
    }

}