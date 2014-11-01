<?php

/**
 * This is the model class for table "{{user_follow}}".
 *
 * The followings are the available columns in table '{{user_follow}}':
 * @property string $id
 * @property string $follower_id
 * @property string $following_id
 * @property string $create_at
 * @property integer $status
 *
 * The followings are the available model relations:
 * @property User $following
 * @property User $follower
 */
class UserFollow extends AdminModel {
    
    public $Total;

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return UserFollow the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return '{{user_follow}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
// NOTE: you should only define rules for those attributes that
// will receive user inputs.
        return array(
            array('follower_id, following_id, create_at', 'required'),
            array('status', 'numerical', 'integerOnly' => true),
            array('follower_id, following_id', 'length', 'max' => 20),
// The following rule is used by search().
// Please remove those attributes that should not be searched.
            array('id, follower_id, following_id, create_at, status', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
// NOTE: you may need to adjust the relation name and the related
// class name for the relations automatically generated below.
        return array(
            'following' => array(self::BELONGS_TO, 'User', 'following_id'),
            'follower' => array(self::BELONGS_TO, 'User', 'follower_id'),
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'id' => 'ID',
            'follower_id' => 'Follower',
            'following_id' => 'Following',
            'create_at' => 'Create At',
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
        $criteria->compare('follower_id', $this->follower_id, true);
        $criteria->compare('following_id', $this->following_id, true);
        $criteria->compare('create_at', $this->create_at, true);
        $criteria->compare('status', $this->status);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

    public function get_followers($user_id, $limit = null) {
        $criteria = new CDbCriteria();
        $criteria->select="count(t.id) as Total";
        $criteria->addCondition("t.following_id='" . $user_id . "'");
        $criteria->addCondition("t.status='1'");
        $total_followers = UserFollow::model()->find($criteria);
        
        $criteria->select="*";
        if ($limit != null) {
            $criteria->limit = $limit;
        }
        
        $followers = UserFollow::model()->findAll($criteria);
        
        return array("total"=>$total_followers->Total,"all_data"=>$followers);
    }
    
    public function get_following($user_id, $limit = null) {
        $criteria = new CDbCriteria();
        $criteria->select="count(t.id) as Total";
        $criteria->addCondition("t.follower_id='" . $user_id . "'");
        $criteria->addCondition("t.status='1'");
        $total_followers = UserFollow::model()->find($criteria);
        
        $criteria->select="*";
        if ($limit != null) {
            $criteria->limit = $limit;
        }
        
        $followers = UserFollow::model()->with("following","follower")->findAll($criteria);
        
        return array("total"=>$total_followers->Total,"all_data"=>$followers);
    }

}
