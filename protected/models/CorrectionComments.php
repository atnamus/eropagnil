<?php

/**
 * This is the model class for table "{{correction_comments}}".
 *
 * The followings are the available columns in table '{{correction_comments}}':
 * @property string $id
 * @property string $user_id
 * @property string $correction_id
 * @property string $comment_text
 * @property integer $is_correct
 * @property string $parent_id
 * @property string $comment_type
 * @property string $create_at
 * @property integer $status
 *
 * The followings are the available model relations:
 * @property Correction $correction
 * @property UserCorrection[] $userCorrections 
 * @property User $user
 */
class CorrectionComments extends CActiveRecord {

    public $Total;

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return CorrectionComments the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return '{{correction_comments}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
// NOTE: you should only define rules for those attributes that
// will receive user inputs.
        return array(
            array('user_id, correction_id, comment_text, create_at, status', 'required'),
            array('is_correct, status', 'numerical', 'integerOnly' => true),
            array('user_id, correction_id', 'length', 'max' => 20),
// The following rule is used by search().
// Please remove those attributes that should not be searched.
            array('id, user_id, correction_id, comment_type, comment_text, create_at, status', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
// NOTE: you may need to adjust the relation name and the related
// class name for the relations automatically generated below.
        return array(
            'correctionCommentLikes' => array(self::HAS_MANY, 'CorrectionCommentLike', 'comment_id'),
            'user' => array(self::BELONGS_TO, 'User', 'user_id'),
            'correction' => array(self::BELONGS_TO, 'Correction', 'correction_id'),
            'userCorrections' => array(self::HAS_MANY, 'UserCorrection', 'comment_id'),
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'id' => 'ID',
            'user_id' => 'User',
            'correction_id' => 'Correction',
            'comment_text' => 'Comment Text',
            'is_correct' => 'Is Correct',
            'comment_type' => 'Comment Type',
            'parent_id' => 'Parent',
            'create_at' => 'Create At',
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
        $criteria->compare('user_id', $this->user_id, true);
        $criteria->compare('correction_id', $this->correction_id, true);
        $criteria->compare('comment_text', $this->comment_text, true);
        $criteria->compare('is_correct', $this->is_correct);
        $criteria->compare('comment_type', $this->comment_type);
        $criteria->compare('parent_id', $this->parent_id, true);
        $criteria->compare('create_at', $this->create_at, true);
        $criteria->compare('status', $this->status);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

    public function findChildComments($parent_id,$user_id) {
        return $this->findAll(array(
                    'order' => 't.create_time DESC',
                    'limit' => $limit,
        ));
    }
}