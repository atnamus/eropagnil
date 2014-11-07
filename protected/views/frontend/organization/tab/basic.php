<?php
$form = $this->beginWidget('CActiveForm', array(
    'id' => 'account-settings-form',
    'action' => $this->createUrl('o/account-settings'),
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
                <label class="col-sm-3 control-label" for="User_full_name">Full Name</label>
                <div class="col-sm-9">
                    <?php echo $form->textField($model, 'full_name', array("class" => "form-control")); ?>  
                    <?php echo $form->error($model, 'full_name'); ?>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="User_name">Username</label>
                <div class="col-sm-9">
                    <?php echo $form->textField($model, 'username', array("class" => "form-control", 'readonly' => true)); ?>                                           <span style="display:none;"><div style="display:none" id="User_full_name_em_" class="errorMessage"></div></span>
                </div>
            </div>            
            <div class="form-group">
                <label class="col-sm-3 control-label" for="userName">Primary Language</label>
                <div class="col-sm-9">
                    <?php
                    echo $form->dropDownList($model, 'language_id', $languages, array('empty' => 'Select', 'class' => 'form-control acc-select', 'tabindex' => '1'));
                    ?>
                </div>
                <span style="display:none;"><div style="display:none" id="User_language_id_em_" class="errorMessage"></div></span>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-3 col-sm-10 gender">
                    <?php echo $form->radioButton($model, 'gender', array('value' => '1', 'uncheckValue' => null, "id" => "ml")); ?>
                    <label for="ml" class="radio-inline"><span></span>Male</label>
                    <?php echo $form->radioButton($model, 'gender', array('value' => '2', 'uncheckValue' => null, 'id' => 'fl')); ?>
                    <label for="fl" class="radio-inline"><span></span>Female</label>
                </div>
                <span style="display:none;"><?php echo $form->error($model, 'gender'); ?></span>
            </div>
            <div class="form-group">
                <label for="userName" class="col-sm-3 control-label">Sound effects </label>
                <div class="col-sm-9">
                    <div class="btn-group on-off">
                        <?php echo $form->radioButton($model, 'sound_effect', array('value' => '1', 'uncheckValue' => null, "id" => "on")); ?>
                        <label for="on" class="radio-inline">on</label>
                        <?php echo $form->radioButton($model, 'sound_effect', array('value' => '0', 'uncheckValue' => null, "id" => "off")); ?>
                        <label for="off" class="radio-inline">off</label>
                    </div>
                    <span style="display:none;"><?php echo $form->error($model, 'sound_effect'); ?></span>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-3 col-sm-10">
                    <button class="btn-submit" type="submit">Save Change</button>
                </div>
            </div>
        </div>
        <!-- Tab panes -->
    </div> 
</div>
<?php $this->endWidget(); ?>