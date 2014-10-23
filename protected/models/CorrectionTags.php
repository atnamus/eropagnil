<?php

/**
* This is the model class for table "{{correction_tags}}".
*
* The followings are the available columns in table '{{correction_tags}}':
    * @property string $id
    * @property string $correction_id
    * @property string $tag_id
    *
    * The followings are the available model relations:
            * @property CorrectionTagMaster $tag
            * @property Correction $correction
    */
class CorrectionTags extends AdminModel
{
/**
* Returns the static model of the specified AR class.
* @param string $className active record class name.
* @return CorrectionTags the static model class
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
return '{{correction_tags}}';
}

/**
* @return array validation rules for model attributes.
*/
public function rules()
{
// NOTE: you should only define rules for those attributes that
// will receive user inputs.
return array(
    array('correction_id, tag_id', 'required'),
    array('correction_id, tag_id', 'length', 'max'=>20),
// The following rule is used by search().
// Please remove those attributes that should not be searched.
array('id, correction_id, tag_id', 'safe', 'on'=>'search'),
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
    'tag' => array(self::BELONGS_TO, 'CorrectionTagMaster', 'tag_id'),
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
    'correction_id' => 'Correction',
    'tag_id' => 'Tag',
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
		$criteria->compare('correction_id',$this->correction_id,true);
		$criteria->compare('tag_id',$this->tag_id,true);

return new CActiveDataProvider($this, array(
'criteria'=>$criteria,
));
}
}