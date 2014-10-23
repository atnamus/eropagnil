<?php
/* @var $this LessonController */
/* @var $model Lesson */
/* @var $form CActiveForm */
?>
<?php
$form = $this->beginWidget('CActiveForm', array(
    'id' => 'lesson-form',
    'htmlOptions' => ['class' => 'form-horizontal', 'role' >= 'form'],
    'enableAjaxValidation' => false,
        ));
?>
<div class="form-body">
    <?php //echo $form->errorSummary($model);  ?>
    <div class="form-group">
        <label class="col-md-3 control-label">User</label>
        <div class="col-md-9">
            <div><?php echo $model->author->full_name ?></div>
            <?php //echo $form->textField($model, 'user_id', array('size' => 20, 'maxlength' => 20, 'class' => 'form-control', 'id' => '{user_id}', 'placeholder' => 'User Id')); ?>                    
            <?php //echo $form->error($model, 'user_id'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Language</label>
        <div class="col-md-9">
            <?php echo CHtml::dropDownList("Lesson[language_id]", $model->language_id, Languages::model()->getActiveList(), ["empty" => "Select Language", "class" => "form-control"]); ?>
            <?php echo $form->error($model, 'language_id'); ?>
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
        <label class="col-md-3 control-label">Stage</label>
        <div class="col-md-9">
            <?php
            $stage_list = CHtml::listData(LessonStage::model()->findAll(['order' => 'name']), 'id', 'name');
            echo CHtml::dropDownList("Lesson[stage_id]", $model->stage_id, $stage_list, ["empty" => "Select stage", "class" => "form-control"]);
            ?>
            <?php echo $form->error($model, 'stage_id'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Category</label>
        <div class="col-md-9">
            <?php
            $category_list = CHtml::listData(LessonCategory::model()->findAll(['order' => 'name']), 'id', 'name');
            echo CHtml::dropDownList("Lesson[category_id]", $model->category_id, $category_list, ["empty" => "Select category", "class" => "form-control"]);
            ?>
            <?php echo $form->error($model, 'category_id'); ?>
        </div>
    </div>
    <?php if ($model->level != 0) { ?>
        <div class="form-group level">
            <label class="col-md-3 control-label">Level</label>
            <div class="col-md-9">
                <?php echo CHtml::dropDownList("Lesson[level]", $model->level - 1, range(1, 7), ["empty" => "Select level", "class" => "form-control"]); ?>
                <?php echo $form->error($model, 'level'); ?>
            </div>
        </div>
    <?php } ?>
    <div class="form-group">
        <label class="col-md-3 control-label">Memo</label>
        <div class="col-md-9">
            <?php echo $form->textArea($model, 'memo', array('rows' => 6, 'cols' => 50, 'class' => 'form-control', 'id' => 'memo', 'placeholder' => 'Memo')); ?>                    
            <?php echo $form->error($model, 'memo'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Status</label>
        <div class="col-md-9">
            <div class="radio-list">                        
                <label class="radio-inline">
                    <?php echo $form->radioButton($model, "status", ["value" => 1, "uncheckValue" => null]) ?> Active                        </label>
                <label class="radio-inline">
                    <?php echo $form->radioButton($model, "status", ["value" => 0, "uncheckValue" => null]) ?> Inactive                        </label>
            </div>
            <?php echo $form->error($model, 'status'); ?>
        </div>
    </div>
</div>
<div class="form-actions right1">
    <a href="<?php echo $this->createUrl('lesson/') ?>" class="btn <?php echo $this->cancel_button; ?>">Cancel</a>
    <button type="submit" class="btn <?php echo $this->save_button; ?>"><?php echo $model->isNewRecord ? "Create" : "Save" ?></button>
</div>
<?php $this->endWidget(); ?>
<!-- form -->