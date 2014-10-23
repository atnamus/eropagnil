<?php
/* @var $this NewsletterSubscriberController */
/* @var $model NewsletterSubscriber */
/* @var $form CActiveForm */
?>
<?php
$form = $this->beginWidget('CActiveForm', array(
    'id' => 'newsletter-subscriber-form',
    'htmlOptions' => ['class' => 'form-horizontal', 'role' >= 'form'],
    'enableAjaxValidation' => false,
        ));
?>
<div class="form-body">
<?php //echo $form->errorSummary($model);  ?>

    <div class="form-group">
        <label class="col-md-3 control-label">Email</label>
        <div class="col-md-9">
<?php echo $form->textField($model, 'email', array('size' => 60, 'maxlength' => 254, 'class' => 'form-control', 'id' => '{email}', 'placeholder' => 'Email')); ?>                    
<?php echo $form->error($model, 'email'); ?>
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
    <a href="<?php echo $this->createUrl('newsletterSubscriber/') ?>" class="btn <?php echo $this->cancel_button; ?>">Cancel</a>
    <button type="submit" class="btn <?php echo $this->save_button; ?>"><?php echo $model->isNewRecord ? "Create" : "Save" ?></button>
</div>
<?php $this->endWidget(); ?>
<!-- form -->