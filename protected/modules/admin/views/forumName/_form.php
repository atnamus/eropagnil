<?php
/* @var $this ForumNameController */
/* @var $model ForumName */
/* @var $form CActiveForm */
?>
<?php
$form = $this->beginWidget('CActiveForm', array(
    'id' => 'forum-name-form',
    'htmlOptions' => ['class' => 'form-horizontal', 'role' >= 'form'],
    'enableAjaxValidation' => false,
        ));
?>
<div class="form-body">
    <?php //echo $form->errorSummary($model);  ?>
    <div class="form-group">
        <label class="col-md-3 control-label">Forum Category</label>
        <div class="col-md-9">
            <?php
            echo CHtml::dropDownList('ForumName[forum_category_id]', $model->forum_category_id, CHtml::listData(ForumCategory::model()->findAll(), 'id', 'name'), ['empty' => 'Select Category', 'class' => 'form-control']);
            ?>
            <?php echo $form->error($model, 'forum_category_id'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Name</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'name', array('size' => 60, 'maxlength' => 200, 'class' => 'form-control', 'id' => 'name', 'placeholder' => 'Name')); ?>                    
            <?php echo $form->error($model, 'name'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Description</label>
        <div class="col-md-9">
            <?php echo $form->textArea($model, 'description', array('rows' => 6, 'cols' => 50, 'class' => 'form-control', 'id' => 'description', 'placeholder' => 'Description')); ?>                    
            <?php echo $form->error($model, 'description'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Status</label>
        <div class="col-md-9">
            <div class="radio-list">                        
                <label class="radio-inline">
                    <?php echo $form->radioButton($model, "status", [ "value" => 1, "uncheckValue" => null]) ?> Active                        </label>
                <label class="radio-inline">
                    <?php echo $form->radioButton($model, "status", ["value" => 0, "uncheckValue" => null]) ?>  Inactive                        </label>
            </div>
            <?php echo $form->error($model, 'status'); ?>
        </div>
    </div>
</div>
<div class="form-actions right1">
    <a href="<?php echo $this->createUrl('forumName/') ?>" class="btn <?php echo $this->cancel_button; ?>">Cancel</a>
    <button type="submit" class="btn <?php echo $this->save_button; ?>"><?php echo $model->isNewRecord ? "Create" : "Save" ?></button>
</div>
<?php $this->endWidget(); ?>                       
<!-- form -->