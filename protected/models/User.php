<?php

/**
 * This is the model class for table "{{user}}".
 *
 * The followings are the available columns in table '{{user}}':
 * @property string $id
 * @property string $username
 * @property string $email
 * @property string $user_type_id
 * @property string $password
 * @property string $full_name
 * @property string $birthday
 * @property integer $gender
 * @property string $language_id
 * @property string $profile_image
 * @property integer $sound_effect
 * @property integer $microphone
 * @property integer $speaker
 * @property string $activation_code
 * @property string $reset_key
 * @property string $status
 * @property string $create_at
 * @property string $update_at
 *
 * The followings are the available model relations:
 * @property UserType $userType
 */
class User extends CActiveRecord {

    const ACTIVE = 1;
    const INACTIVE = 0;

    public $confirm_password;
    public $tmp_scenario;
    public $old_password;
    public $new_password;
    public $repeat_password;

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return User the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return '{{user}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        return array(
            array('full_name,gender,language_id', 'required', 'on' => 'settings_update'),
            array('username, email,password', 'required', 'on' => 'signup'),
//            array('email', 'email','message'=>"Invalid email address", 'on' => 'signup'),
            array('full_name,username, email,password,confirm_password,user_type_id, birthday, gender, language_id, profile_image, membership_id, activation_code, reset_key, create_at, update_at', 'required', 'on' => 'other'),
            array('username', 'checkUserName', 'on' => 'signup'),
            array('email', 'email', 'on' => 'signup'),
            array('email', 'checkEmail', 'on' => 'signup'),
//            array('password', 'compare', 'compareAttribute' => 'confirm_password', 'message' => 'Password and Confirm Password must be same', 'on' => 'signup'),
            array('gender, sound_effect, microphone, speaker', 'numerical', 'integerOnly' => true),
            array('username', 'length', 'max' => 50),
            array('email, password', 'length', 'max' => 128),
            array('user_type_id', 'length', 'max' => 10),
            array('first_name, last_name, profile_image', 'length', 'max' => 100),
            array('language_id', 'length', 'max' => 3),
            array('activation_code', 'length', 'max' => 255),
            array('reset_key', 'length', 'max' => 40),
            array('status', 'length', 'max' => 8),
            array('id, username, email, user_type_id, password, full_name, birthday, gender, language_id, profile_image, sound_effect, microphone, speaker, activation_code, reset_key, status, create_at, update_at', 'safe', 'on' => 'search'),
            array('old_password', 'required', 'on' => 'changePwd'),
            array('old_password', 'findPasswords', 'on' => 'changePwd'),
             array('new_password', 'required', 'on' => 'changePwd'),
            array('repeat_password', 'compare', 'compareAttribute' => 'new_password', 'on' => 'changePwd'),
        );
    }

    public function findPasswords($attribute, $params) {
        $user = User::model()->findByPk(Yii::app()->user->id);
        //var_dump($this->getError('old_password'));
        if ($this->getError('old_password') == NULL && $user->password != md5($this->old_password)) {
            $this->addError($attribute, 'Old password is incorrect.');
        }
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        // NOTE: you may need to adjust the relation name and the related
        // class name for the relations automatically generated below.
        return array(
            'userType' => array(self::BELONGS_TO, 'UserType', 'UserTypeId'),
            'blogcomments' => array(self::HAS_MANY, 'BlogComment', 'author_id'),
            'blogCommentCount' => array(self::STAT, 'BlogComment', 'author_id', 'condition' => 'status=' . BlogComment::STATUS_PUBLISHED));
    }

    public function checkEmail($attribute, $params) {
        $criteria = new CDbCriteria();
        $criteria->addCondition("t.email='" . $this->email . "'");

        $data = User::model()->findAll($criteria);

        if (!empty($data)) {
            $this->addError($attribute, 'Email address already registered');
        }
    }

    public function checkUserName($attribute, $params) {
        $criteria = new CDbCriteria();
        $criteria->addCondition("t.username='" . $this->username . "'");

        $data = User::model()->findAll($criteria);

        if (!empty($data)) {
            $this->addError($attribute, 'Username already taken');
        }
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'id' => 'ID',
            'username' => 'Username',
            'email' => 'Email',
            'user_type_id' => 'User Type',
            'password' => 'Password',
            'full_name' => 'Full Name',
            'first_name' => 'First Name',
            'last_name' => 'Last Name',
            'birthday' => 'Birthday',
            'gender' => 'Gender',
            'language_id' => 'Language',
            'profile_image' => 'Profile Image',
            'sound_effect' => 'Sound Effect',
            'microphone' => 'Microphone',
            'speaker' => 'Speaker',
            'membership_id' => 'Membership',
            'activation_code' => 'Activation Code',
            'reset_key' => 'Reset Key',
            'facebook_url' => 'Facebook',
            'twitter_url' => 'Twitter',
            'gplus_url' => 'Google Plus',
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
        $criteria->compare('username', $this->username, true);
        $criteria->compare('email', $this->email, true);
        $criteria->compare('user_type_id', $this->user_type_id, true);
        $criteria->compare('password', $this->password, true);
        $criteria->compare('first_name', $this->first_name, true);
        $criteria->compare('last_name', $this->last_name, true);
        $criteria->compare('birthday', $this->birthday, true);
        $criteria->compare('gender', $this->gender);
        $criteria->compare('language_id', $this->language_id, true);
        $criteria->compare('profile_image', $this->profile_image, true);
        $criteria->compare('sound_effect', $this->sound_effect);
        $criteria->compare('microphone', $this->microphone);
        $criteria->compare('speaker', $this->speaker);
        $criteria->compare('activation_code', $this->activation_code, true);
        $criteria->compare('reset_key', $this->reset_key, true);
        $criteria->compare('status', $this->status, true);
        $criteria->compare('create_at', $this->create_at, true);
        $criteria->compare('update_at', $this->update_at, true);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

    public function getFullName() {
        return $this->first_name . " " . $this->last_name;
    }

    public function getProfileImgUrl() {
        if ($this->profile_image == '') {
            $this->profile_image = 'default-avatar.jpg';
        }
        return Yii::app()->createAbsoluteUrl('/uploads/images/profile_pic/' . $this->profile_image);
    }

}