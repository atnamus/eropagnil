<?php

/**
* This is the model class for table "{{lesson_tag}}".
*
* The followings are the available columns in table '{{lesson_tag}}':
    * @property string $id
    * @property string $lesson_id
    * @property string $lesson_tag_master_id
*/
class LessonTag extends AdminModel
{
/**
* Returns the static model of the specified AR class.
* @param string $className active record class name.
* @return LessonTag the static model class
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
return '{{lesson_tag}}';
}

/**
* @return array validation rules for model attributes.
*/
public function rules()
{
// NOTE: you should only define rules for those attributes that
// will receive user inputs.
return array(
    array('lesson_id, lesson_tag_master_id', 'required'),
    array('id, lesson_id, lesson_tag_master_id', 'length', 'max'=>20),
// The following rule is used by search().
// Please remove those attributes that should not be searched.
array('id, lesson_id, lesson_tag_master_id', 'safe', 'on'=>'search'),
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
    'lesson_tag_master_id' => 'Lesson Tag Master',
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
		$criteria->compare('lesson_tag_master_id',$this->lesson_tag_master_id,true);

return new CActiveDataProvider($this, array(
'criteria'=>$criteria,
));
}
}