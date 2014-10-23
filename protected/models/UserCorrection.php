<?php

/**
* This is the model class for table "{{user_correction}}".
*
* The followings are the available columns in table '{{user_correction}}':
    * @property string $id
    * @property string $comment_id
    * @property string $main_line
    * @property string $corrected_line
    * @property string $correction_id
    * @property integer $correction_type
    * @property string $user_id
    * @property string $comment
    * @property string $create_at
    * @property integer $status
    *
    * The followings are the available model relations:
            * @property User $user
            * @property CorrectionComments $comment0
            * @property Correction $correction
    */
class UserCorrection extends AdminModel
{
/**
* Returns the static model of the specified AR class.
* @param string $className active record class name.
* @return UserCorrection the static model class
*/
public static function model($className=__CLASS__)
{
return parent::model($className);
}

/**
* @return string the associated database table name
*/
public function tableName()
{
return '{{user_correction}}';
}

/**
* @return array validation rules for model attributes.
*/
public function rules()
{
// NOTE: you should only define rules for those attributes that
// will receive user inputs.
return array(
    array('comment_id, main_line, correction_type, user_id, create_at', 'required'),
    array('correction_type, status', 'numerical', 'integerOnly'=>true),
    array('comment_id, correction_id, user_id', 'length', 'max'=>20),
    array('main_line, corrected_line, comment', 'length', 'max'=>255),
// The following rule is used by search().
// Please remove those attributes that should not be searched.
array('id, comment_id, main_line, corrected_line, correction_id, correction_type, user_id, comment, create_at, status', 'safe', 'on'=>'search'),
);
}

/**
* @return array relational rules.
*/
public function relations()
{
// NOTE: you may need to adjust the relation name and the related
// class name for the relations automatically generated below.
return array(
    'user' => array(self::BELONGS_TO, 'User', 'user_id'),
    'comment0' => array(self::BELONGS_TO, 'CorrectionComments', 'comment_id'),
    'correction' => array(self::BELONGS_TO, 'Correction', 'correction_id'),
);
}

/**
* @return array customized attribute labels (name=>label)
*/
public function attributeLabels()
{
return array(
    'id' => 'ID',
    'comment_id' => 'Comment',
    'main_line' => 'Main Line',
    'corrected_line' => 'Corrected Line',
    'correction_id' => 'Correction',
    'correction_type' => 'Correction Type',
    'user_id' => 'User',
    'comment' => 'Comment',
    'create_at' => 'Create At',
    'status' => 'Status',
);
}

/**
* Retrieves a list of models based on the current search/filter conditions.
* @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
*/
public function search()
{
// Warning: Please modify the following code to remove attributes that
// should not be searched.

$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id,true);
		$criteria->compare('comment_id',$this->comment_id,true);
		$criteria->compare('main_line',$this->main_line,true);
		$criteria->compare('corrected_line',$this->corrected_line,true);
		$criteria->compare('correction_id',$this->correction_id,true);
		$criteria->compare('correction_type',$this->correction_type);
		$criteria->compare('user_id',$this->user_id,true);
		$criteria->compare('comment',$this->comment,true);
		$criteria->compare('create_at',$this->create_at,true);
		$criteria->compare('status',$this->status);

return new CActiveDataProvider($this, array(
'criteria'=>$criteria,
));
}
}