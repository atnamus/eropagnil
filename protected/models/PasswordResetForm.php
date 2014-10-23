<?php

/**
 * LoginForm class.
 * LoginForm is the data structure for keeping
 * user login form data. It is used by the 'login' action of 'SiteController'.
 */
class PasswordResetForm extends CFormModel
{

        public $Password;
        public $ConfirmPassword;

	public function rules()
	{
		return array(
			array('Password,ConfirmPassword', 'required'),
                        array('Password', 'compare', 'compareAttribute' => 'ConfirmPassword','message'=>'New Password and Confirm Password must be same'),
		);
	}

	public function attributeLabels()
	{
		return array(
			'Password'=>'New Password',
			'ConfirmPassword'=>'Confirm Password',
		);
	}
}