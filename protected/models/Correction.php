<?php

/**
 * This is the model class for table "{{correction}}".
 *
 * The followings are the available columns in table '{{correction}}':
 * @property string $id
 * @property string $user_id
 * @property string $display_id
 * @property integer $language_id
 * @property string $title
 * @property string $intro_text
 * @property string $native_text
 * @property integer $visible_to
 * @property integer $total_views
 * @property integer $total_comments
 * @property integer $total_corrections
 * @property integer $total_likes
 * @property string $create_at
 * @property string $update_at
 * @property integer $status
 *
 * The followings are the available model relations:
 * @property Language $language
 * @property User $user
 */
class Correction extends AdminModel {
    
    public $Total;

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return Correction the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return '{{correction}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
// NOTE: you should only define rules for those attributes that
// will receive user inputs.
        return array(
            // array('user_id, language_id, title, intro_text, native_text, visible_to, total_views, total_comments, total_corrections, total_likes, create_at, update_at', 'required'),
            array('user_id, language_id, intro_text, visible_to, update_at', 'required', 'on' => 'correction_post'),
            array('language_id, visible_to, total_views, total_comments, total_corrections, total_likes, status', 'numerical', 'integerOnly' => true),
            array('user_id', 'length', 'max' => 20),
            array('title', 'length', 'max' => 255),
// The following rule is used by search().
// Please remove those attributes that should not be searched.
            array('id, user_id, language_id, title, intro_text, native_text, visible_to, total_views, total_comments, total_corrections, total_likes, create_at, update_at, status', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
// NOTE: you may need to adjust the relation name and the related
// class name for the relations automatically generated below.
        return array(
            'language' => array(self::BELONGS_TO, 'Languages', 'language_id'),
            'user' => array(self::BELONGS_TO, 'User', 'user_id'),
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'id' => 'ID',
            'user_id' => 'User',
            'language_id' => 'Language',
            'title' => 'Title',
            'intro_text' => 'Intro Text',
            'native_text' => 'Native Text',
            'visible_to' => 'Visible To',
            'total_views' => 'Total Views',
            'total_comments' => 'Total Comments',
            'total_corrections' => 'Total Corrections',
            'total_likes' => 'Total Likes',
            'create_at' => 'Create At',
            'update_at' => 'Update At',
            'status' => 'Status',
        );
    }

    public function get_correction_counts($user_id=0) {
        
        $data_msg=array();
        
        $entries_written = 0;
        
        $criteria = new CDbCriteria();
        
        $criteria->select="count(id) as `Total`";
        
        $criteria->addCondition("t.user_id='".$user_id."'");
        $criteria->addCondition("t.status!='3'");
        
        $data = Correction::model()->find($criteria);
        
        $data_msg['entries_written']=$data->Total;
        
        return $data_msg;
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
        $criteria->compare('user_id', $this->user_id, true);
        $criteria->compare('language_id', $this->language_id);
        $criteria->compare('title', $this->title, true);
        $criteria->compare('intro_text', $this->intro_text, true);
        $criteria->compare('native_text', $this->native_text, true);
        $criteria->compare('visible_to', $this->visible_to);
        $criteria->compare('total_views', $this->total_views);
        $criteria->compare('total_comments', $this->total_comments);
        $criteria->compare('total_corrections', $this->total_corrections);
        $criteria->compare('total_likes', $this->total_likes);
        $criteria->compare('create_at', $this->create_at, true);
        $criteria->compare('update_at', $this->update_at, true);
        $criteria->compare('status', $this->status);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

}
