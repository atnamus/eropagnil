<?php

/**
 * This is the model class for table "{{user}}".
 *
 * The followings are the available columns in table '{{user}}':
 * @property string $id
 * @property string $username
 * @property string $email
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
class Child extends FrontModel {

    const ACTIVE = 1;
    const INACTIVE = 0;

    public $confirm_password;
    public $tmp_scenario;
    public $old_password;
    public $new_password;
    public $repeat_password;
    public $username;
    public $password;
    public $gender;
    public $email;
    public $activation_code;

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
        return '{{parent_child}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        return array(
            array('username,email,password', 'required', 'on' => 'signup'),
            array('gender', 'required', 'message' => 'Please select gender.', 'on' => 'signup'),
            //array('gender','message'=>'Please select gender.'),
            array('username', 'checkUserName', 'on' => 'signup'),
            array('email', 'email', 'on' => 'signup'),
            array('email', 'checkEmail', 'on' => 'signup'),
            array('gender,status', 'numerical', 'integerOnly' => true),
            array('username', 'length', 'max' => 50),
            array('email, password', 'length', 'max' => 128),
            array('activation_code', 'length', 'max' => 255),
            array('status', 'length', 'max' => 8),
            array('id, username, email,password, full_name, birthday, gender, language_id, profile_image, sound_effect, microphone, speaker, activation_code, reset_key, status, create_at, update_at', 'safe', 'on' => 'search'),
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
            'parent' => array(self::BELONGS_TO, 'User', 'parent_id'),
            'profile' => array(self::BELONGS_TO, 'User', 'user_id'),
                //'blogCommentCount' => array(self::STAT, 'BlogComment', 'author_id', 'condition' => 'status=' . BlogComment::STATUS_PUBLISHED)
        );
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
            'last_name' => 'Last Name'
        );
    }

    /**
     * Retrieves a list of models based on the current search/filter conditions.
     * @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
     */
    /*
      public function getFullName() {
      return $this->first_name . " " . $this->last_name;
      }

      public function getProfileImgUrl() {
      if ($this->profile_image == '') {
      $this->profile_image = 'default-avatar.jpg';
      }
      return Yii::app()->createAbsoluteUrl('/uploads/images/profile_pic/' . $this->profile_image);
      } */
    public function save($runValidation = true, $attributes = NULL) {
        $user_model = new User();
        $user_model->username = $this->username;
        $user_model->email = $this->email;
        $user_model->password = md5($this->password);
        $user_model->gender = (int) $this->gender;
        $user_model->user_type_id = 2;
        $user_model->activation_code = $this->activation_code;
        $user_model->save(false);
        $this->parent_id = Yii::app()->user->id;
        $this->user_id = $user_model->id;
        $this->status = 1;
        return parent::save(false);
    }

}