<?php
/* @var $this LessonCategoryController */
/* @var $model LessonCategory */
/* @var $form CActiveForm */
?>
<?php
$form = $this->beginWidget('CActiveForm', array(
    'id' => 'lesson-category-form',
    'htmlOptions' => ['class' => 'form-horizontal', 'role' >= 'form'],
    'enableAjaxValidation' => false,
        ));
?>
<div class="form-body">
    <?php //echo $form->errorSummary($model);  ?>

    <div class="form-group">
        <label class="col-md-3 control-label">Name</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'name', array('size' => 50, 'maxlength' => 50, 'class' => 'form-control', 'id' => '{name}', 'placeholder' => 'Name')); ?>                    
            <?php echo $form->error($model, 'name'); ?>
        </div>
    </div>
    <?php
    $selected = [];
    foreach ($model->stages as $sel) {
        $selected[] = $sel->id;
    }

    $stages = LessonStage::model()->findAll(['order' => 'name']);
    ?>
    <div class="form-group">  
        <label class="col-md-3 control-label">Stage</label>
        <div class="col-md-9">
            <div class="checkbox-list">
                <?php foreach ($stages as $stage) { ?>
                    <label class="checkbox-inline">
                        <input type="checkbox" name="LessonCategory[lesson_stage_id][]" id="stage_<?php echo $stage->id; ?>" value="<?php echo $stage->id; ?>" <?php echo in_array($stage->id, $selected) ? "checked" : "" ?>> <?php echo $stage->name; ?>
                    </label>
                <?php } ?>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Status</label>
        <div class="col-md-9">
            <div class="radio-list">                
                <label class="radio-inline">
                    <?php echo $form->radioButton($model, "status", ["value" => 1,'uncheckValue' => null]) ?> Active
                </label>
                <label class="radio-inline">
                    <?php echo $form->radioButton($model, "status", ["value" => 0,'uncheckValue' => null]) ?> Inactive
                </label>
            </div>
            <?php echo $form->error($model, 'status'); ?>
        </div>
    </div>
</div>
<div class="form-actions right1">
    <a href="<?php echo $this->createUrl('lessonCategory/') ?>" class="btn <?php echo $this->cancel_button; ?>">Cancel</a>
    <button type="submit" class="btn <?php echo $this->save_button; ?>"><?php echo $model->isNewRecord ? "Create" : "Save" ?></button>
</div>
<?php $this->endWidget(); ?>
<!-- form -->