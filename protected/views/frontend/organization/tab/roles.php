<?php
$form = $this->beginWidget('CActiveForm', array(
	'id' => 'account-settings-form',
	'action' => $this->createUrl('o/account-settings'),
	'htmlOptions' => array('class' => 'basics-form ajax-submit2', "role" => "form", "autocomplete" => "off"), //formValidate
	'enableAjaxValidation' => true,
	'clientOptions' => array('validateOnSubmit' => true, 'afterValidate' => 'js:formValidate', 'beforeValidate' => 'js:show_loader')
));
?>
<?php echo $form->errorSummary($model);?>
<div class="row">
    <div class="col-sm-12">
        <!-- Tab panes -->
        <h3>I am using lingapore as a :</h3>
        <div class="form-group">
            <div class="col-sm-12 basic_gender">
                <div class="radio-form">
                    <input type="radio" name="User[gender]" id="msdsl" value="1">
                    <label class="radio-inline" for="ml"><span></span>School</label>
                </div>
                <div class="radio-form">
                    <input type="radio" checked="checked" name="User[gender]" id="fsdl" value="2">
                    <label class="radio-inline" for="fl"><span></span>Parent</label>
                </div>
            </div>
            <span style="display:none;"><div style="display:none" id="User_gender_em_" class="errorMessage"></div></span>
        </div>
        <!-- Tab panes -->
    </div>
</div>
<?php $this->endWidget();?>