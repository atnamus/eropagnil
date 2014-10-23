<?php

/**
* This is the model class for table "{{lesson_skit}}".
*
* The followings are the available columns in table '{{lesson_skit}}':
    * @property string $id
    * @property string $lesson_id
    * @property string $video_name
    * @property string $audio_name
    * @property string $image_name
    * @property string $create_at
    * @property string $update_at
    * @property string $status
    *
    * The followings are the available model relations:
            * @property Lesson $lesson
    */
class LessonSkit extends AdminModel
{
/**
* Returns the static model of the specified AR class.
* @param string $className active record class name.
* @return LessonSkit the static model class
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
return '{{lesson_skit}}';
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
    array('lesson_id', 'length', 'max'=>20),
    array('video_name, audio_name, image_name', 'length', 'max'=>255),
    array('status', 'length', 'max'=>1),
// The following rule is used by search().
// Please remove those attributes that should not be searched.
array('id, lesson_id, video_name, audio_name, image_name, create_at, update_at, status', 'safe', 'on'=>'search'),
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
    'video_name' => 'Video Name',
    'audio_name' => 'Audio Name',
    'image_name' => 'Image Name',
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
		$criteria->compare('video_name',$this->video_name,true);
		$criteria->compare('audio_name',$this->audio_name,true);
		$criteria->compare('image_name',$this->image_name,true);
		$criteria->compare('create_at',$this->create_at,true);
		$criteria->compare('update_at',$this->update_at,true);
		$criteria->compare('status',$this->status,true);

return new CActiveDataProvider($this, array(
'criteria'=>$criteria,
));
}
}