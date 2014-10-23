<?php
/* @var $this SeoController */
/* @var $model Seo */
/* @var $form CActiveForm */
?>
<?php
$form = $this->beginWidget('CActiveForm', array(
    'id' => 'seo-form',
    'htmlOptions' => ['class' => 'form-horizontal', 'role' >= 'form'],
    'enableAjaxValidation' => false,
        ));
?>
<div class="form-body">
    <?php //echo $form->errorSummary($model);  ?>
    <div class="form-group">
        <label class="col-md-3 control-label">Page Name</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'page_name', array('size' => 50, 'maxlength' => 50, 'class' => 'form-control', 'id' => '{page_name}', 'placeholder' => 'Page Name')); ?>

            <?php echo $form->error($model, 'page_name'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Title</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'title', array('size' => 60, 'maxlength' => 255, 'class' => 'form-control', 'id' => '{title}', 'placeholder' => 'Title')); ?>

            <?php echo $form->error($model, 'title'); ?>
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
        <label class="col-md-3 control-label">Keyword</label>
        <div class="col-md-9">
            <?php echo $form->textArea($model, 'keyword', array('rows' => 6, 'cols' => 50, 'class' => 'form-control', 'id' => 'keyword', 'placeholder' => 'Keyword')); ?>

            <?php echo $form->error($model, 'keyword'); ?>
        </div>
    </div>    
    <div class="form-group">
        <label class="col-md-3 control-label">Language Id</label>
        <div class="col-md-9">
            <?php echo CHtml::dropDownList("Seo[language_id]", $model->language_id, Languages::model()->getActiveList(), ["empty" => "Select Language", "class" => "form-control"]); ?>
            <?php echo $form->error($model, 'language_id'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Status</label>
        <div class="col-md-9">
            <div class="radio-list">
                <label class="radio-inline">
                    <?php echo $form->radioButton($model, "status", ["value" => 0]) ?> Inactive                        </label>
                <label class="radio-inline">
                    <?php echo $form->radioButton($model, "status", ["value" => 1]) ?> Active                        </label>
            </div>
            <?php echo $form->error($model, 'status'); ?>
        </div>
    </div>
</div>
<div class="form-actions right1">
    <a href="<?php echo $this->createUrl('seo/') ?>" class="btn <?php echo $this->cancel_button; ?>">Cancel</a>
    <button type="submit" class="btn <?php echo $this->save_button; ?>"><?php echo $model->isNewRecord ? "Create" : "Save" ?></button>
</div>
<?php $this->endWidget(); ?>
<!-- form -->