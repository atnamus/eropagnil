<?php
/* @var $this CorrectionController */
/* @var $model Correction */
/* @var $form CActiveForm */
?>

<div class="form">
    <?php
    $form = $this->beginWidget('CActiveForm', array(
        'id' => 'correction-create-form',
        'enableAjaxValidation' => false,
    ));
    ?>
    <p class="note">Fields with <span class="required">*</span> are required.</p>
    <?php echo $form->errorSummary($model); ?>
    <div class="form-group">
        <label class="col-md-3 control-label">user_id</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'user_id'); ?>
            <?php echo $form->error($model, 'user_id'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">language_id</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'language_id'); ?>
            <?php echo $form->error($model, 'language_id'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">title</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'title'); ?>
            <?php echo $form->error($model, 'title'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">intro_text</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'intro_text'); ?>
            <?php echo $form->error($model, 'intro_text'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">native_text</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'native_text'); ?>
            <?php echo $form->error($model, 'native_text'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">visible_to</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'visible_to'); ?>
            <?php echo $form->error($model, 'visible_to'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">total_views</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'total_views'); ?>
            <?php echo $form->error($model, 'total_views'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">total_comments</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'total_comments'); ?>
            <?php echo $form->error($model, 'total_comments'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">total_corrections</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'total_corrections'); ?>
            <?php echo $form->error($model, 'total_corrections'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">total_likes</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'total_likes'); ?>
            <?php echo $form->error($model, 'total_likes'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">create_at</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'create_at'); ?>
            <?php echo $form->error($model, 'create_at'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">update_at</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'update_at'); ?>
            <?php echo $form->error($model, 'update_at'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">status</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'status'); ?>
            <?php echo $form->error($model, 'status'); ?>
        </div>
    </div>

    <div class="row buttons">
        <?php echo CHtml::submitButton('Submit'); ?>
    </div>

    <?php $this->endWidget(); ?>

</div><!-- form -->