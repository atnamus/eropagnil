<?php
/* @var $this NewsController */
/* @var $model News */
/* @var $form CActiveForm */
?>
<?php
$form = $this->beginWidget('CActiveForm', array(
    'id' => 'news-form',
    'htmlOptions' => ['class' => 'form-horizontal', 'role' >= 'form'],
    'enableAjaxValidation' => false,
        ));
?>
<div class="form-body">
    <?php //echo $form->errorSummary($model); ?>
    <div class="form-group">
        <label class="col-md-3 control-label">Language</label>
        <div class="col-md-9">
            <?php
            echo CHtml::dropDownList('News[language_id]', $model->language_id, Languages::model()->getActiveList(), ['empty' => 'Select Language', 'class' => 'form-control']);
            ?>
            <?php echo $form->error($model, 'language_id'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Title</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'title', array('size' => 60, 'maxlength' => 100, 'class' => 'form-control', 'id' => '{title}', 'placeholder' => 'Title')); ?>
            <?php echo $form->error($model, 'title'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">News Content</label>
        <div class="col-md-9">
            <?php echo $form->textArea($model, 'content', array('rows' => 6, 'cols' => 50, 'class' => 'form-control', 'id' => 'content', 'placeholder' => 'News Content')); ?>
            <?php echo $form->error($model, 'content'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Status</label>
        <div class="col-md-9">
            <div class="radio-list">
                <label class="radio-inline">
                    <?php echo $form->radioButton($model, 'status', ['value' => 0]) ?> Draft
                </label>
                <label class="radio-inline">
                    <?php echo $form->radioButton($model, 'status', ['value' => 1]) ?> Publish
                </label>
            </div>
            <?php echo $form->error($model, 'status'); ?>
        </div>
    </div>
</div>
<div class="form-actions right1">
    <a href="<?php echo $this->createUrl('news/') ?>" class="btn <?php echo $this->cancel_button; ?>">Cancel</a>
    <button type="submit" class="btn <?php echo $this->save_button; ?>"><?php echo $model->isNewRecord ? "Create" : "Save" ?></button>
</div>
<?php $this->endWidget(); ?>
<!-- form -->