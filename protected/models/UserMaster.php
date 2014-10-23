<?php

/**
 * This is the model class for table "user_master".
 *
 * The followings are the available columns in table 'user_master':
 * @property string $UserId
 * @property string $UserName
 * @property string $UserEmail
 * @property integer $UserTypeId
 * @property string $UserPassword
 * @property string $ConfirmPassword
 * @property string $FirstName
 * @property string $LastName
 * @property string $DOB
 * @property string $Gender
 * @property integer $UserLanguageId
 * @property string $ProfileImage
 * @property string $SoundEffects
 * @property string $Microphone
 * @property string $Speaker
 * @property string $Membership
 * @property integer $MembershipStatus
 * @property string $ActivationKey
 * @property string $UserStatus
 * @property string $AddedDate
 * @property string $UpdatedDate
 *
 * The followings are the available model relations:
 * @property CmsBlocks[] $cmsBlocks
 * @property CmsPages[] $cmsPages
 * @property LearnerProgress[] $learnerProgresses
 * @property LessonComment[] $lessonComments
 * @property LessonComment[] $lessonComments1
 * @property LessonDifficulty[] $lessonDifficulties
 * @property LessonDifficulty[] $lessonDifficulties1
 * @property LessonLike[] $lessonLikes
 * @property LessonLike[] $lessonLikes1
 * @property LessonReport[] $lessonReports
 * @property LessonReport[] $lessonReports1
 * @property Membership[] $memberships
 * @property UserType $userType
 * @property Site $userLanguage
 * @property Site $membershipStatus
 */
class UserMaster extends CActiveRecord {
    ##For Sign Up
    
    public $password;

    public $ConfirmPassword;

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return UserMaster the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return '{{user_master}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('FirstName, LastName, UserName, UserEmail, UserPassword, ConfirmPassword, UserTypeId, Membership', 'required', 'on' => 'signup'),
            array('FirstName, LastName, UserName, UserTypeId, UserPassword, ConfirmPassword', 'required', 'on' => 'insert'),
            array('UserName', 'checkUserName', 'on' => 'signup'),
            array('UserEmail', 'checkEmail', 'on' => 'signup'),
            array('UserTypeId, UserLanguageId, MembershipStatus', 'numerical', 'integerOnly' => true),
            array('UserId, UserName, UserPassword, SoundEffects', 'length', 'max' => 50),
            array('UserEmail', 'length', 'max' => 128),
            array('FirstName, ActivationKey', 'length', 'max' => 20),
            array('LastName', 'length', 'max' => 40),
            array('Gender', 'length', 'max' => 6),
            array('ProfileImage', 'length', 'max' => 256),
            array('Microphone, Speaker', 'length', 'max' => 3),
            array('UserPassword', 'compare', 'compareAttribute' => 'ConfirmPassword','message'=>'Password and Confirm Password must be same','on'=>'signup'),
            array('UserPassword', 'compare', 'compareAttribute' => 'ConfirmPassword','message'=>'Password and Confirm Password must be same','on'=>'insert'),
            array('UserPassword', 'compare', 'compareAttribute' => 'ConfirmPassword','message'=>'Password and Confirm Password must be same','on'=>'update'),
            array('Membership', 'length', 'max' => 7),
            array('UserStatus', 'length', 'max' => 8),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('UserId, UserName, UserEmail, UserTypeId, UserPassword, FirstName, LastName, DOB, Gender, UserLanguageId, ProfileImage, SoundEffects, Microphone, Speaker, Membership, MembershipStatus, ActivationKey, UserStatus, AddedDate, UpdatedDate', 'safe', 'on' => 'search'),
        );
    }

    public function checkUserName($attribute, $params) {
        $criteria = new CDbCriteria();
        $criteria->addCondition("t.UserName='" . $this->UserName . "'");

        $data = UserMaster::model()->findAll($criteria);
        
        if(!empty($data))
        {
            $this->addError($attribute, 'Username already taken');
        }
    }
    
    public function checkEmail($attribute, $params) {
        $criteria = new CDbCriteria();
        $criteria->addCondition("t.UserEmail='" . $this->UserEmail . "'");

        $data = UserMaster::model()->findAll($criteria);
        
        if(!empty($data))
        {
            $this->addError($attribute, 'Email address already registered');
        }
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        // NOTE: you may need to adjust the relation name and the related
        // class name for the relations automatically generated below.
        return array(
            'cmsBlocks' => array(self::HAS_MANY, 'CmsBlocks', 'AuthorId'),
            'cmsPages' => array(self::HAS_MANY, 'CmsPages', 'AuthorId'),
            'learnerProgresses' => array(self::HAS_MANY, 'LearnerProgress', 'UserId'),
            'lessonComments' => array(self::HAS_MANY, 'LessonComment', 'UserId'),
            'lessonComments1' => array(self::HAS_MANY, 'LessonComment', 'LessonId'),
            'lessonDifficulties' => array(self::HAS_MANY, 'LessonDifficulty', 'UserId'),
            'lessonDifficulties1' => array(self::HAS_MANY, 'LessonDifficulty', 'LessonId'),
            'lessonLikes' => array(self::HAS_MANY, 'LessonLike', 'UserId'),
            'lessonLikes1' => array(self::HAS_MANY, 'LessonLike', 'LessonId'),
            'lessonReports' => array(self::HAS_MANY, 'LessonReport', 'UserId'),
            'lessonReports1' => array(self::HAS_MANY, 'LessonReport', 'LessonId'),
            'memberships' => array(self::HAS_MANY, 'Membership', 'UserId'),
            'userType' => array(self::BELONGS_TO, 'UserType', 'UserTypeId'),
            'userLanguage' => array(self::BELONGS_TO, 'Site', 'UserLanguageId'),
            'membershipStatus' => array(self::BELONGS_TO, 'Site', 'MembershipStatus'),
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'UserId' => 'User ID',
            'UserName' => 'Username',
            'UserEmail' => 'Email',
            'UserTypeId' => 'Account Type',
            'UserPassword' => 'Password',
            'ConfirmPassword' => 'Confirm Password', //For Signup Form
            'FirstName' => 'First Name',
            'LastName' => 'Last Name',
            'DOB' => 'Dob',
            'Gender' => 'Gender',
            'UserLanguageId' => 'Language',
            'ProfileImage' => 'Profile Image',
            'SoundEffects' => 'Sound Effects',
            'Microphone' => 'Microphone',
            'Speaker' => 'Speaker',
            'Membership' => 'Membership',
            'MembershipStatus' => 'Membership Status',
            'ActivationKey' => 'Activation Key',
            'UserStatus' => 'User Status',
            'AddedDate' => 'Added Date',
            'UpdatedDate' => 'Updated Date',
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
        $criteria->condition='UserTypeId!=1';
        $criteria->compare('UserId', $this->UserId, true);
        $criteria->compare('UserName', $this->UserName, true);
        $criteria->compare('UserEmail', $this->UserEmail, true);
        $criteria->compare('UserTypeId', $this->UserTypeId);
        $criteria->compare('UserPassword', $this->UserPassword, true);
        $criteria->compare('FirstName', $this->FirstName, true);
        $criteria->compare('LastName', $this->LastName, true);
        $criteria->compare('DOB', $this->DOB, true);
        $criteria->compare('Gender', $this->Gender, true);
        $criteria->compare('UserLanguageId', $this->UserLanguageId);
        $criteria->compare('ProfileImage', $this->ProfileImage, true);
        $criteria->compare('SoundEffects', $this->SoundEffects, true);
        $criteria->compare('Microphone', $this->Microphone, true);
        $criteria->compare('Speaker', $this->Speaker, true);
        $criteria->compare('Membership', $this->Membership, true);
        $criteria->compare('MembershipStatus', $this->MembershipStatus);
        $criteria->compare('ActivationKey', $this->ActivationKey, true);
        $criteria->compare('UserStatus', $this->UserStatus, true);
        $criteria->compare('AddedDate', $this->AddedDate, true);
        $criteria->compare('UpdatedDate', $this->UpdatedDate, true);

        return new CActiveDataProvider($this, array(
                    'criteria' => $criteria,
                ));
    }
    
    public function beforeSave() {
        if (!empty($this->password))
            $this->crypted_password=md5($this->password);
        return true;
    }

}