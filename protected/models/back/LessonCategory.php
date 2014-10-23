<?php

/**
 * This is the model class for table "{{lesson_category}}".
 *
 * The followings are the available columns in table '{{lesson_category}}':
 * @property string $id
 * @property string $name
 * @property integer $status
 */
class LessonCategory extends CActiveRecord {

    public $lesson_stage_id;

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return LessonCategory the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return '{{lesson_category}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
        // NOTE: you should only define rules for those attributes that
        // will receive user inputs.
        return array(
            array('name, status', 'required'),
            array('status', 'numerical', 'integerOnly' => true),
            array('name', 'length', 'max' => 50, 'min' => 1),
            ['name', 'unique'],
            // The following rule is used by search().
            // Please remove those attributes that should not be searched.
            array('id, name, status', 'safe', 'on' => 'search'),
            array('lesson_stage_id', 'safe'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
        return array(
            //'author' => array(self::BELONGS_TO, 'User', 'author_id'),
            'stages' => array(self::MANY_MANY, 'LessonStage',
                'site_lesson_stage_category(lesson_category_id, lesson_stage_id)'),
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'id' => 'ID',
            'name' => 'Name',
            'status' => 'Status',
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

        $criteria->compare('id', $this->id, true);
        $criteria->compare('name', $this->name, true);
        $criteria->compare('status', $this->status);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
            'sort' => array(
                'defaultOrder' => 'name ASC',
            )
        ));
    }

    public function afterSave() {
        //lesson_stage_id
        parent::afterSave();
        LessonStageCategory::model()->deleteAll([
            'condition' => "lesson_category_id=:lesson_category_id",
            'params' => ['lesson_category_id' => $this->id]
        ]);
        if (is_array($this->lesson_stage_id)) {
            foreach ($this->lesson_stage_id as $stage_id) {
                $stage = new LessonStageCategory();
                $stage->lesson_stage_id = $stage_id;
                $stage->lesson_category_id = $this->id;
                $stage->save();
                unset($stage);
            }
        }
        //LessonStageCategory::model()->update($this->id, $this->lesson_stage_id);
        return true;
    }

}
