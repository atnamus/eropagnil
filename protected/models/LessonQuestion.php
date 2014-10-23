<?php

/**
* This is the model class for table "{{lesson_quiz}}".
*
* The followings are the available columns in table '{{lesson_quiz}}':
    * @property string $id
    * @property string $lesson_id
    * @property string $type
    * @property string $video_name
    * @property string $image_name
    * @property string $audio_name
    * @property string $question_text
    * @property string $create_at
    * @property string $update_at
    * @property integer $status
    *
    * The followings are the available model relations:
            * @property Lesson $lesson
            * @property LessonQuizAnswer[] $lessonQuizAnswers
    */
class LessonQuestion extends AdminModel
{
/**
* Returns the static model of the specified AR class.
* @param string $className active record class name.
* @return LessonQuiz the static model class
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
return '{{lesson_question}}';
}

/**
* @return array validation rules for model attributes.
*/
public function rules()
{
// NOTE: you should only define rules for those attributes that
// will receive user inputs.
return array(
    array('lesson_id, create_at, update_at, status', 'required'),
    array('status', 'numerical', 'integerOnly'=>true),
    array('lesson_id', 'length', 'max'=>20),
    array('image_name, audio_name, question_text', 'length', 'max'=>255),
// The following rule is used by search().
// Please remove those attributes that should not be searched.
array('id, lesson_id, image_name, audio_name, question_text, create_at, update_at, status', 'safe', 'on'=>'search'),
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
    'lesson' => array(self::BELONGS_TO, 'Lesson', 'lesson_id'),
    'lessonQuestionAnswers' => array(self::HAS_MANY, 'lessonQuestionAnswer', 'question_id'),
);
}

/**
* @return array customized attribute labels (name=>label)
*/
public function attributeLabels()
{
return array(
    'id' => 'ID',
    'lesson_id' => 'Lesson',
    'type' => 'Type',
    'video_name' => 'Video Name',
    'image_name' => 'Image Name',
    'audio_name' => 'Audio Name',
    'question_text' => 'Question Text',
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
		$criteria->compare('lesson_id',$this->lesson_id,true);
		$criteria->compare('image_name',$this->image_name,true);
		$criteria->compare('audio_name',$this->audio_name,true);
		$criteria->compare('question_text',$this->question_text,true);
		$criteria->compare('create_at',$this->create_at,true);
		$criteria->compare('update_at',$this->update_at,true);
		$criteria->compare('status',$this->status);

return new CActiveDataProvider($this, array(
'criteria'=>$criteria,
));
}
}