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
 * @property string $first_name
 * @property string $last_name
 * @property string $full_name
 * @property string $birthday
 * @property integer $gender
 * @property string $language_id
 * @property string $profile_image
 * @property integer $sound_effect
 * @property integer $microphone
 * @property integer $speaker
 * @property integer $membership_id
 * @property string $facebook_url
 * @property string $twitter_url
 * @property string $gplus_url
 * @property string $activation_code
 * @property string $reset_key
 * @property string $status
 * @property string $create_at
 * @property string $update_at
 */
class AdUser extends AdminModel {

//will hold the encrypted password for update actions.
    public $initialPassword;

    const STATUS_ACTIVE = 1;
    const STATUS_INACTIVE = 0;

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
// NOTE: you should only define rules for those attributes that
// will receive user inputs.
        return array(
            array('full_name,username,email,gender,language_id,birthday,membership_id,status', 'required'),
            array('user_type_id', 'required', 'message' => 'Please select user type.'),
            array('password', 'required', 'on' => 'create'),
            array('gender, sound_effect, microphone, speaker, membership_id', 'numerical', 'integerOnly' => true),
            array('gender', 'required', 'on' => 'update', 'message' => 'Please select gender.'),
            array('username', 'length', 'max' => 50),
            array('birthday', 'date', 'format' => 'yyyy-m-d'),
            array('email', 'length', 'max' => 128),
            array('password', 'length', 'min' => 6, 'max' => 32),
            array('full_name', 'length', 'min' => 3, 'max' => 60),
            array('email', 'email', 'message' => 'This is not a valid {attribute} address.'),
            array('email', 'unique'),
            array('username', 'unique'),
            array('user_type_id', 'length', 'max' => 10),
            array('first_name, last_name, profile_image', 'length', 'max' => 100),
            array('language_id', 'length', 'max' => 3),
            array('activation_code', 'length', 'max' => 255),
            array('reset_key', 'length', 'max' => 40),
            array('status', 'length', 'max' => 8),
            array('facebook_url, twitter_url, gplus_url', 'url'),
            //exit in reference table
            array('user_type_id', 'exist', 'attributeName' => 'id', 'className' => 'UserType', "message" => "Invalid data"),
            array('language_id', 'exist', 'attributeName' => 'id', 'className' => 'Languages', "message" => "Invalid data"),
            array('email', 'email'),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('id, username, email, user_type_id, password, first_name, last_name, birthday, gender, language_id, profile_image, sound_effect, microphone, speaker, membership_id, facebook_url, twitter_url, gplus_url, activation_code, reset_key, status, create_at, update_at', 'safe', 'on' => 'search'),
            array('username, email, user_type_id, password, first_name, last_name, birthday, gender, language_id, profile_image, sound_effect, microphone, speaker, membership_id, facebook_url, twitter_url, gplus_url, activation_code, reset_key, status, create_at, update_at', 'safe', 'on' => 'update'),
            array('username, email, user_type_id, password, first_name, last_name, birthday, gender, language_id, profile_image, sound_effect, microphone, speaker, membership_id, facebook_url, twitter_url, gplus_url, activation_code, reset_key, status, create_at, update_at', 'safe', 'on' => 'create'),
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
            'facebook_url' => 'Facebook Url',
            'twitter_url' => 'Twitter Url',
            'gplus_url' => 'Gplus Url',
            'activation_code' => 'Activation Code',
            'reset_key' => 'Reset Key',
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
        $criteria->compare('membership_id', $this->membership_id);
        $criteria->compare('facebook_url', $this->facebook_url, true);
        $criteria->compare('twitter_url', $this->twitter_url, true);
        $criteria->compare('gplus_url', $this->gplus_url, true);
        $criteria->compare('activation_code', $this->activation_code, true);
        $criteria->compare('reset_key', $this->reset_key, true);
        $criteria->compare('status', $this->status, true);
        $criteria->compare('create_at', $this->create_at, true);
        $criteria->compare('update_at', $this->update_at, true);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

    public function afterFind() {
        $this->initialPassword = $this->password;
        $this->password = null;
        parent::afterFind();
    }

    public function beforeSave() {
        if (!empty($this->password)) {
            $this->password = md5($this->password);
        } else {
            $this->password = $this->initialPassword;
        }
        return parent::beforeSave();
    }

}