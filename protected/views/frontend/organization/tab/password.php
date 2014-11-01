<?php
$form = $this->beginWidget('CActiveForm', array(
    'id' => 'password-settings-form',
    'action' => $this->createUrl('PostPassword'),
    'htmlOptions' => array('class' => 'basics-form ajax-submit2', "role" => "form", "autocomplete" => "off"), //formValidate
    'enableAjaxValidation' => true,
    'clientOptions' => array('validateOnSubmit' => true, 'afterValidate' => 'js:formValidate', 'beforeValidate' => 'js:show_loader')
        ));
?>
<?php echo $form->errorSummary($model); ?>
<input type="hidden" name="tab" value="basic"/>
<div class="row">
    <div class="col-sm-12">
        <!-- Tab panes -->
        <div class="accEdit">
            <div class="form-group">
                <label class="col-sm-3 control-label" for="current_password">Current password</label>
                <div class="col-sm-9">
                    <?php echo $form->passwordField($model, 'old_password', array("class" => "form-control")); ?>  
                    <?php echo $form->error($model, 'old_password'); ?>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="new_password">New password</label>
                <div class="col-sm-9">
                    <?php echo $form->passwordField($model, 'new_password', array("class" => "form-control")); ?>  
                    <?php echo $form->error($model, 'new_password'); ?>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="confirm_password">Re-enter password</label>
                <div class="col-sm-9">
                    <?php echo $form->passwordField($model, 'confirm_password', array("class" => "form-control")); ?>  
                    <?php echo $form->error($model, 'confirm_password'); ?>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-3 col-sm-10">
                    <button class="btn-submit" type="submit">Change Password</button>
                </div>
            </div>
        </div>
        <!-- Tab panes -->
    </div> 
</div> 
<?php $this->endWidget(); ?>