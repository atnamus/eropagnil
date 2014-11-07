<?php
$condition = new CDbCriteria();
$condition->addCondition("t.parent_id='" . Yii::app()->user->id . "'");
$children = Child::model()->findAll($condition);
foreach ($children as $child) {
    //echo  '$c = Child::model()->findByPk('.$child->id.')';exit;
    ?>
    <div class="form-group child-listing">
        <label class="control-label" for="User_full_name"><?php echo $child->profile->username; ?></label>                    
        <div class="set_btn"><a href="#">Setting</a></div>
    </div>
<?php } ?>