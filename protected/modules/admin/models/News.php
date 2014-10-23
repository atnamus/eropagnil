<?php

/**
 * This is the model class for table "{{news}}".
 *
 * The followings are the available columns in table '{{news}}':
 * @property string $id
 * @property integer $language_id
 * @property string $title
 * @property string $slug
 * @property string $content
 * @property integer $status
 * @property string $create_at
 * @property string $update_at
 */
class News extends AdminModel {

    public $language_name;

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return News the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return '{{news}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('language_id, title,content, status', 'required'),
            array('language_id, status', 'numerical', 'integerOnly' => true),
            array('title, slug', 'length', 'max' => 100),
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('id, language_id, title,content, status, create_at, update_at,language_name', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        return array(
            'language' => array(self::BELONGS_TO, 'Languages', 'language_id'),
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'id' => 'ID',
            'language_id' => 'Language',
            'title' => 'Title',
            'slug' => 'Slug',
            'content' => 'News Content',
            'status' => 'Status',
            'create_at' => 'Create At',
            'update_at' => 'Update At',
        );
    }

    /**
     * Behaviors for this model
     */
    public function behaviors() {
        return array(
            'sluggable' => array(
                'class' => 'ext.behaviors.SluggableBehavior',
                'columns' => array('title'),
                'unique' => true,
                'update' => true,
            ),
        );
    }

    /**
     * Retrieves a list of models based on the current search/filter conditions.
     * @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
     */
    public function search() {
        // Warning: Please modify the following code to remove attributes that
        // should not be searched.

        $criteria = new CDbCriteria;
        $criteria->with = 'language';
        $criteria->compare('id', $this->id, true);
        $criteria->compare('language.name', $this->language_name);
        $criteria->compare('title', $this->title, true);
        $criteria->compare('slug', $this->slug, true);
        $criteria->compare('content', $this->content, true);
        $criteria->compare('status', $this->status);
        $criteria->compare('create_at', $this->create_at, true);
        $criteria->compare('update_at', $this->update_at, true);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
            'sort' => array(
                'defaultOrder' => 'create_at ASC',
                'attributes' => array(
                    'language_name' => array(
                        'asc' => 'language.name',
                        'desc' => 'language.name DESC',
                    ),
                    '*',
                )
            )
        ));
    }

    public function statusTag() {
        if ($this->status == self::ACTIVE) {
            return '<span class="label label-success">Publish</span>';
        } else {
            return '<span class="label label-default">Draft</span>';
        }
    }

}
