<?php

/**
 * This is the model class for table "{{lesson_stage_category}}".
 *
 * The followings are the available columns in table '{{lesson_stage_category}}':
 * @property integer $lesson_stage_id
 * @property integer $lesson_category_id
 */
class LessonStageCategory extends AdminModel {

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return LessonStageCategory the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return '{{lesson_stage_category}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
// NOTE: you should only define rules for those attributes that
// will receive user inputs.
        return array(
            array('lesson_stage_id, lesson_category_id', 'required'),
            array('lesson_stage_id, lesson_category_id', 'numerical', 'integerOnly' => true),
// The following rule is used by search().
// Please remove those attributes that should not be searched.
            array('lesson_stage_id, lesson_category_id', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
// NOTE: you may need to adjust the relation name and the related
// class name for the relations automatically generated below.
        return array(
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'lesson_stage_id' => 'Lesson Stage',
            'lesson_category_id' => 'Lesson Category',
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

        $criteria->compare('lesson_stage_id', $this->lesson_stage_id);
        $criteria->compare('lesson_category_id', $this->lesson_category_id);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

}
