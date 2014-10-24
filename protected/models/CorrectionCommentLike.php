<?php

/**
 * This is the model class for table "{{correction_comment_like}}".
 *
 * The followings are the available columns in table '{{correction_comment_like}}':
 * @property string $id
 * @property string $user_id
 * @property string $comment_id
 * @property string $correction_id
 * @property string $create_at
 *
 * The followings are the available model relations:
 * @property Correction $correction
 * @property User $user
 * @property CorrectionComments $comment
 */
class CorrectionCommentLike extends AdminModel {

    public $TotalLikes;

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return CorrectionCommentLike the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName() {
        return '{{correction_comment_like}}';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules() {
// NOTE: you should only define rules for those attributes that
// will receive user inputs.
        return array(
            array('user_id, comment_id, correction_id, create_at', 'required'),
            array('user_id, comment_id, correction_id', 'length', 'max' => 20),
// The following rule is used by search().
// Please remove those attributes that should not be searched.
            array('id, user_id, comment_id, correction_id, create_at', 'safe', 'on' => 'search'),
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations() {
// NOTE: you may need to adjust the relation name and the related
// class name for the relations automatically generated below.
        return array(
            'correction' => array(self::BELONGS_TO, 'Correction', 'correction_id'),
            'user' => array(self::BELONGS_TO, 'User', 'user_id'),
            'comment' => array(self::BELONGS_TO, 'CorrectionComments', 'comment_id'),
        );
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'id' => 'ID',
            'user_id' => 'User',
            'comment_id' => 'Comment',
            'correction_id' => 'Correction',
            'create_at' => 'Create At',
        );
    }

    function userHasLike($comment_id, $user_id) {
        
        $i_liked = 0;

        $criteria = new CDbCriteria();

        $criteria->select = "count(*) as `TotalLikes`";

        $criteria->addCondition("t.user_id='" . $user_id . "'");

        $criteria->addCondition("t.comment_id='" . $comment_id . "'");

        $my_likes = CorrectionCommentLike::model()->find($criteria);

        if ($my_likes->TotalLikes == 1) {
            $i_liked = 1;
        }

        $data = CorrectionCommentLike::model()->findByAttributes(array("user_id" => $user_id, "comment_id" => $comment_id));

        $criteria = new CDbCriteria();

        $criteria->select = "count(*) as `TotalLikes`";

        $criteria->addCondition("t.user_id!='" . $user_id . "'");

        $criteria->addCondition("t.comment_id='" . $comment_id . "'");

        $likes = CorrectionCommentLike::model()->find($criteria);

        $other_likes = $likes->TotalLikes;

        $html = "";

        if ($i_liked == "1" && $other_likes == "0") {
            $html = "You liked this";
        } else if ($i_liked == "0" && $other_likes > "0") {
            $html = $other_likes . " people likes this";
        } else if ($i_liked == "1" && $other_likes > "0") {
            $html = "You and " . $other_likes . " people likes this";
        }

        return array("html"=>$html,"user_liked"=>$i_liked);
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
        $criteria->compare('comment_id', $this->comment_id, true);
        $criteria->compare('correction_id', $this->correction_id, true);
        $criteria->compare('create_at', $this->create_at, true);

        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
        ));
    }

}
