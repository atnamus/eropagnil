<?php

/**
 * This is the model class for table "{{membership_history}}".
 *
 * The followings are the available columns in table '{{membership_history}}':
 * @property integer $id
 * @property integer $user_id
 * @property integer $membership_id
 * @property string $create_at
 * @property string $update_at
 * @property string $end_at
 * @property string $status
 */
class MembershipHistory extends CActiveRecord {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return MembershipHistory the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return '{{membership_history}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('user_id, membership_id, create_at, status', 'required'),
            array('id, user_id, membership_id', 'numerical', 'integerOnly' => true),
            array('status', 'length', 'max' => 1),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('id, user_id, membership_id, create_at, update_at, end_at, status', 'safe', 'on' => 'search'),
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
            'user_id' => 'User',
            'membership_id' => 'Membership',
            'create_at' => 'Create At',
            'update_at' => 'Update At',
            'end_at' => 'End At',
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

        $criteria->compare('id', $this->id);
        $criteria->compare('user_id', $this->user_id);
        $criteria->compare('membership_id', $this->membership_id);
        $criteria->compare('create_at', $this->create_at, true);
        $criteria->compare('update_at', $this->update_at, true);
        $criteria->compare('end_at', $this->end_at, true);
        $criteria->compare('status', $this->status, true);

        return new CActiveDataProvider($this, array(
                    'criteria' => $criteria,
                ));
    }

}