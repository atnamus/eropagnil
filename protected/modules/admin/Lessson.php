<?php

/**
* This is the model class for table "{{lesson}}".
*
* The followings are the available columns in table '{{lesson}}':
    * @property string $id
    * @property string $language_id
    * @property string $title
    * @property string $user_id
    * @property integer $stage_id
    * @property string $category_id
    * @property integer $level
    * @property string $memo
    * @property string $create_at
    * @property string $update_at
    * @property string $status
    *
    * The followings are the available model relations:
            * @property LessonQuiz[] $lessonQuizs
            * @property LessonSkit[] $lessonSkits
    */
class Lessson extends AdminModel
{
/**
* Returns the static model of the specified AR class.
* @param string $className active record class name.
* @return Lessson the static model class
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
return '{{lesson}}';
}

/**
* @return array validation rules for model attributes.
*/
public function rules()
{
// NOTE: you should only define rules for those attributes that
// will receive user inputs.
return array(
    array('language_id, title, user_id, stage_id, category_id, level, memo, create_at, update_at, status', 'required'),
    array('stage_id, level', 'numerical', 'integerOnly'=>true),
    array('language_id, user_id', 'length', 'max'=>20),
    array('title', 'length', 'max'=>255),
    array('category_id', 'length', 'max'=>10),
// The following rule is used by search().
// Please remove those attributes that should not be searched.
array('id, language_id, title, user_id, stage_id, category_id, level, memo, create_at, update_at, status', 'safe', 'on'=>'search'),
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
    'lessonQuizs' => array(self::HAS_MANY, 'LessonQuiz', 'lesson_id'),
    'lessonSkits' => array(self::HAS_MANY, 'LessonSkit', 'lesson_id'),
);
}

/**
* @return array customized attribute labels (name=>label)
*/
public function attributeLabels()
{
return array(
    'id' => 'ID',
    'language_id' => 'Language',
    'title' => 'Title',
    'user_id' => 'User',
    'stage_id' => 'Stage',
    'category_id' => 'Category',
    'level' => 'Level',
    'memo' => 'Memo',
    'create_at' => 'Create At',
    'update_at' => 'Update At',
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
		$criteria->compare('language_id',$this->language_id,true);
		$criteria->compare('title',$this->title,true);
		$criteria->compare('user_id',$this->user_id,true);
		$criteria->compare('stage_id',$this->stage_id);
		$criteria->compare('category_id',$this->category_id,true);
		$criteria->compare('level',$this->level);
		$criteria->compare('memo',$this->memo,true);
		$criteria->compare('create_at',$this->create_at,true);
		$criteria->compare('update_at',$this->update_at,true);
		$criteria->compare('status',$this->status,true);

return new CActiveDataProvider($this, array(
'criteria'=>$criteria,
));
}
}