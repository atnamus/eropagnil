<?php
/* @var $this ContactUsController */
/* @var $model ContactUs */
/* @var $form CActiveForm */
?>
<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'contact-us-form',
            'htmlOptions' => ['class' => 'form-horizontal', 'role' >= 'form'],
	'enableAjaxValidation'=>false,
)); ?>
<div class="form-body">
    <?php //echo $form->errorSummary($model); ?>

            <div class="form-group">
            <label class="col-md-3 control-label">Name</label>
            <div class="col-md-9">
                                    <?php echo $form->textField($model,'name',array('size'=>50,'maxlength'=>50,'class' => 'form-control','id'=>'{name}','placeholder' => 'Name')); ?>                    
                                <?php echo $form->error($model,'name'); ?>
            </div>
        </div>
                <div class="form-group">
            <label class="col-md-3 control-label">Email</label>
            <div class="col-md-9">
                                    <?php echo $form->textField($model,'email',array('size'=>60,'maxlength'=>254,'class' => 'form-control','id'=>'{email}','placeholder' => 'Email')); ?>                    
                                <?php echo $form->error($model,'email'); ?>
            </div>
        </div>
                <div class="form-group">
            <label class="col-md-3 control-label">Subject</label>
            <div class="col-md-9">
                                    <?php echo $form->textField($model,'subject',array('size'=>60,'maxlength'=>255,'class' => 'form-control','id'=>'{subject}','placeholder' => 'Subject')); ?>                    
                                <?php echo $form->error($model,'subject'); ?>
            </div>
        </div>
                <div class="form-group">
            <label class="col-md-3 control-label">Message</label>
            <div class="col-md-9">
                                    <?php echo $form->textArea($model,'message',array('rows'=>6, 'cols'=>50,'class' => 'form-control','id'=>'message','placeholder' => 'Message')); ?>                    
                                <?php echo $form->error($model,'message'); ?>
            </div>
        </div>
        </div>
<div class="form-actions right1">
    <a href="<?php echo $this->createUrl('contactus/') ?>" class="btn <?php echo $this->cancel_button; ?>">Cancel</a>
    <button type="submit" class="btn <?php echo $this->save_button; ?>"><?php echo $model->isNewRecord ? "Create" : "Save"?></button>
</div>
<?php $this->endWidget(); ?>
<!-- form -->