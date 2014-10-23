<?php

/**
* This is the model class for table "{{lesson_quiz_answer}}".
*
* The followings are the available columns in table '{{lesson_quiz_answer}}':
    * @property string $id
    * @property string $question_id
    * @property string $image_name
    * @property string $audio_name
    * @property string $answer_text
    * @property string $is_answer
    * @property string $create_at
    * @property string $update_at
    * @property integer $status
    *
    * The followings are the available model relations:
            * @property LessonQuiz $question
    */
class LessonQuestionAnswer extends AdminModel
{
/**
* Returns the static model of the specified AR class.
* @param string $className active record class name.
* @return LessonQuizAnswer the static model class
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
return '{{lesson_question_answer}}';
}

/**
* @return array validation rules for model attributes.
*/
public function rules()
{
// NOTE: you should only define rules for those attributes that
// will receive user inputs.
return array(
    array('question_id, is_answer, create_at, update_at, status', 'required'),
    array('status', 'numerical', 'integerOnly'=>true),
    array('question_id', 'length', 'max'=>20),
    array('image_name, audio_name, answer_text', 'length', 'max'=>255),
    array('is_answer', 'length', 'max'=>1),
// The following rule is used by search().
// Please remove those attributes that should not be searched.
array('id, question_id, image_name, audio_name, answer_text, is_answer, create_at, update_at, status', 'safe', 'on'=>'search'),
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
    'question' => array(self::BELONGS_TO, 'LessonQuestion', 'question_id'),
);
}

/**
* @return array customized attribute labels (name=>label)
*/
public function attributeLabels()
{
return array(
    'id' => 'ID',
    'question_id' => 'Question',
    'image_name' => 'Image Name',
    'audio_name' => 'Audio Name',
    'answer_text' => 'Answer Text',
    'is_answer' => 'Is Answer',
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
		$criteria->compare('question_id',$this->question_id,true);
		$criteria->compare('image_name',$this->image_name,true);
		$criteria->compare('audio_name',$this->audio_name,true);
		$criteria->compare('answer_text',$this->answer_text,true);
		$criteria->compare('is_answer',$this->is_answer,true);
		$criteria->compare('create_at',$this->create_at,true);
		$criteria->compare('update_at',$this->update_at,true);
		$criteria->compare('status',$this->status);

return new CActiveDataProvider($this, array(
'criteria'=>$criteria,
));
}
}