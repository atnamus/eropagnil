<?php

/**
 * This is the model class for table "{{blog_category}}".
 *
 * The followings are the available columns in table '{{blog_category}}':
 * @property string $id
 * @property string $name
 * @property string $slug
 * @property integer $status
 */
class BlogCategory extends AdminModel {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return BlogCategory the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return '{{blog_category}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        return array(
            array('name,status', 'required'),
            array('status', 'numerical', 'integerOnly' => true),
            array('name, slug', 'length', 'max' => 200),
            array('name', 'unique'),
            array('id, name, slug, status', 'safe', 'on' => 'search'),
        );
    }

    /**
     * Behaviors for this model
     */
    public function behaviors() {
        return array(
            'sluggable' => array(
                'class' => 'ext.behaviors.SluggableBehavior',
                'columns' => array('name'),
                'unique' => true,
                'update' => true,
            ),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        return array();
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'id' => 'ID',
            'name' => 'Name',
            'slug' => 'Slug',
            'status' => 'Status',
        );
    }

    /**
     * Retrieves a list of models based on the current search/filter conditions.
     * @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
     */
    public function search() {
        $criteria = new CDbCriteria;
        $criteria->compare('id', $this->id, true);
        $criteria->compare('name', $this->name, true);
        $criteria->compare('slug', $this->slug, true);
        $criteria->compare('status', $this->status);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

}
