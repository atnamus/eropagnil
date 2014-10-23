<?php

/**
 * This is the model class for table "{{newsletter_subscriber}}".
 *
 * The followings are the available columns in table '{{newsletter_subscriber}}':
 * @property string $id
 * @property string $email
 * @property string $create_at
 * @property string $update_at
 * @property integer $status
 */
class NewsletterSubscriber extends AdminModel {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return NewsletterSubscriber the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return '{{newsletter_subscriber}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        return array(
            array('email,status', 'required'),
            array('status', 'numerical', 'integerOnly' => true),
            array('email', 'length', 'max' => 254),
            array('email', 'email'),
            array('email', 'unique', 'message' => '{attribute} "{value}" is already subscribe newsletter.'),
            array('id, email, create_at, update_at, status', 'safe', 'on' => 'search'),
            array('email, create_at, update_at, status', 'safe'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        return array();
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'id' => 'ID',
            'email' => 'Email',
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
        $criteria->compare('email', $this->email, true);
        $criteria->compare('create_at', $this->create_at, true);
        $criteria->compare('update_at', $this->update_at, true);
        $criteria->compare('status', $this->status);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

}
