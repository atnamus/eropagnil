<?php

/**
* This is the model class for table "{{blog_comment}}".
*
* The followings are the available columns in table '{{blog_comment}}':
    * @property string $id
    * @property string $author_id
    * @property string $comment
    * @property string $create_at
    * @property string $update_at
    * @property integer $status
*/
class BlogComment extends AdminModel
{
     const STATUS_INACTIVE = 0;
    const STATUS_PUBLISHED = 1;
/**
* Returns the static model of the specified AR class.
* @param string $className active record class name.
* @return BlogComment the static model class
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
return '{{blog_comment}}';
}

/**
* @return array validation rules for model attributes.
*/
public function rules()
{
// NOTE: you should only define rules for those attributes that
// will receive user inputs.
return array(
    array('author_id, comment, status', 'required'),
    array('status', 'numerical', 'integerOnly'=>true),
    array('author_id', 'length', 'max'=>20),
// The following rule is used by search().
// Please remove those attributes that should not be searched.
array('id, author_id, comment, create_at, update_at, status', 'safe', 'on'=>'search'),
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
            'aurhor' => array(self::BELONGS_TO, 'User', 'author_id')
);
}
/**
* @return array customized attribute labels (name=>label)
*/
public function attributeLabels()
{
return array(
    'id' => 'ID',
    'author_id' => 'Author',
    'comment' => 'Comment',
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
		$criteria->compare('author_id',$this->author_id,true);
		$criteria->compare('comment',$this->comment,true);
		$criteria->compare('create_at',$this->create_at,true);
		$criteria->compare('update_at',$this->update_at,true);
		$criteria->compare('status',$this->status);

return new CActiveDataProvider($this, array(
'criteria'=>$criteria,
));
}
}