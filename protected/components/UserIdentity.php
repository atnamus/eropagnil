<?php

/**
 * UserIdentity represents the data needed to identity a user.
 * It contains the authentication method that checks if the provided
 * data can identity the user.
 */
class UserIdentity extends CUserIdentity {

    public $error_msg;
    public $error_field;

    /**
     * Authenticates a user.
     * The example implementation makes sure if the username and password
     * are both 'demo'.
     * In practical applications, this should be changed to authenticate
     * against some persistent user identity storage (e.g. database).
     * @return boolean whether authentication succeeds.
     */
    public function authenticate() {
        $user_data = UserMaster::model()->findByAttributes(array("UserName" => $this->username));
        $usertype_data = UserType::model()->findByAttributes(array("TypeName" => "admin"));

        if (empty($user_data)) {
            $this->errorCode = self::ERROR_USERNAME_INVALID;
            $this->error_msg = "invalid Username";
            $this->error_field = "username";
        } elseif ($user_data->UserPassword != md5($this->password)) {
            $this->errorCode = self::ERROR_PASSWORD_INVALID;
            $this->error_msg = "Invalid Password";
            $this->error_field = "password";
        } elseif ($user_data->UserTypeId != $usertype_data->TypeId) {
            $this->errorCode = self::ERROR_USERNAME_INVALID;
            $this->error_msg = "This is admin restricted area";
            $this->error_field = "username";
        } else {
            $this->errorCode = self::ERROR_NONE;
            Yii::app()->user->setState("username", $this->username);
            //$this->setState('id', $user_data->id);
        }
        return !$this->errorCode;
    }

    function fetch_error() {
        return $this->error_msg;
    }
    
    
     private $_id;

public function getId()
{
//$user_data = UserMaster::model()->findByAttributes(array("UserName" => $this->username));
//return $user_data->id;
 return $this->_id;
}
}

