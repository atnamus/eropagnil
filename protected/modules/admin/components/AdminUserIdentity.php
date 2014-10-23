<?php

/**
 * UserIdentity represents the data needed to identity a user.
 * It contains the authentication method that checks if the provided
 * data can identity the user.
 */
class AdminUserIdentity extends CUserIdentity {

    /**
     * Authenticates a user.
     * The example implementation makes sure if the username and password
     * are both 'demo'.
     * In practical applications, this should be changed to authenticate
     * against some persistent user identity storage (e.g. database).
     * @return boolean whether authentication succeeds.
     */
    public function authenticate() {
        $user = AdminUser::model()->findByAttributes(['email' => $this->username, 'status' => AdminUser::STATUS_ACTIVE]);
        if ($user === null)
            $this->errorCode = self::ERROR_USERNAME_INVALID;
        else if (md5($this->password) != $user->initialPassword)
            $this->errorCode = self::ERROR_PASSWORD_INVALID;
        else {
            $this->setState('type', $user->role);
            $this->setState('id', $user->id);
            $this->errorCode = self::ERROR_NONE;
        }
        return $this->errorCode == self::ERROR_NONE;
    }

}