<?php

/**
 * This is the model class for table "{{cms_blocks}}".
 *
 * The followings are the available columns in table '{{cms_blocks}}':
 * @property integer $id
 * @property string $block_title
 * @property string $block_slug
 * @property string $block_content
 * @property integer $language_id
 * @property string $status
 * @property string $create_at
 * @property string $update_at
 *
 * The followings are the available model relations:
 * @property Languages $language
 */
class CmsBlocks extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return CmsBlocks the static model class
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
		return '{{cms_blocks}}';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('block_title, block_slug, block_content, language_id, create_at', 'required'),
			array('language_id', 'numerical', 'integerOnly'=>true),
			array('block_title, block_slug', 'length', 'max'=>100),
			array('status', 'length', 'max'=>1),
			array('update_at', 'safe'),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, block_title, block_slug, block_content, language_id, status, create_at, update_at', 'safe', 'on'=>'search'),
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
			'language' => array(self::BELONGS_TO, 'Languages', 'language_id'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'block_title' => 'Block Title',
			'block_slug' => 'Block Slug',
			'block_content' => 'Block Content',
			'language_id' => 'Language',
			'status' => 'Status',
			'create_at' => 'Create At',
			'update_at' => 'Update At',
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

		$criteria->compare('id',$this->id);
		$criteria->compare('block_title',$this->block_title,true);
		$criteria->compare('block_slug',$this->block_slug,true);
		$criteria->compare('block_content',$this->block_content,true);
		$criteria->compare('language_id',$this->language_id);
		$criteria->compare('status',$this->status,true);
		$criteria->compare('create_at',$this->create_at,true);
		$criteria->compare('update_at',$this->update_at,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}