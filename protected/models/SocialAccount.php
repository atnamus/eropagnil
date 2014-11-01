<?php

/**
 * This is the model class for table "{{user_social_account}}".
 *
 * The followings are the available columns in table '{{user_social_account}}':
 * @property string $id
 * @property string $user_id
 * @property string $provider
 * @property string $email
 * @property string $social_id
 * @property string $create_at
 */
class SocialAccount extends AdminModel {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return SocialAccount the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return '{{user_social_account}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        return array(
            array('user_id, provider, email, social_id, create_at', 'required'),
            array('user_id', 'length', 'max' => 20),
            array('provider, social_id', 'length', 'max' => 100),
            array('provider', 'validate_provider'),
            array('email', 'length', 'max' => 255),
            array('email', 'email'),
        );
    }

    public function validate_provider($attribute) {
        $providers = array('facebook', 'google');
        if (!in_array($this->$attribute, $providers))
            $this->addError($attribute, 'Providers name is invalid.');
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        return array();
    }

}