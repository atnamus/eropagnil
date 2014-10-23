<div class="account-wrap">
    <div class="create-account">
        <div class="container">
            <div class="account-form">
                <h2>Create an Account</h2>
                <?php
                $form = $this->beginWidget('CActiveForm', array(
                    'id' => 'user-signup-form',
                    'htmlOptions' => array('class' => 'form-horizontal', "role" => "form", "autocomplete" => "off"),
                    'enableAjaxValidation' => true,
                    'clientOptions' => array('validateOnSubmit' => true, 'afterValidate' => 'js:formValidate', 'beforeValidate' => 'js:show_loader')
                        ));
                ?>
                <?php echo $form->errorSummary($model); ?>
                <div class="form-group">
                    <label for="User_username" class="col-sm-3 control-label">Username*</label>
                    <div class="col-sm-9">
                        <?php echo $form->textField($model, 'username', array("class" => "form-control")); ?>
                        <span style="display:none;"><?php echo $form->error($model, 'username'); ?></span>
                    </div>
                </div>
                <div class="form-group">
                    <label for="User_email" class="col-sm-3 control-label">Email Address*</label>
                    <div class="col-sm-9">
                        <?php echo $form->emailField($model, 'email', array("class" => "form-control", "value" => $email)); ?>
                        <span style="display:none;"><?php echo $form->error($model, 'email'); ?></span>
                    </div>
                </div>
                <div class="form-group">
                    <label for="User_password" class="col-sm-3 control-label">Password*</label>
                    <div class="col-sm-9">
                        <?php echo $form->passwordField($model, 'password', array("class" => "form-control")); ?>
                        <span style="display:none;"><?php echo $form->error($model, 'password'); ?></span>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-3 col-sm-10">
                        <?php echo CHtml::submitButton('Submit', array("class" => "account-btn", "value" => "Create account")); ?>
                        <a href="<?php echo $this->createUrl("user/Signup"); ?>?provider=facebook" class="btn btn-primary sign-facebook">
                            <i class="icon-facebook"></i>Sign Up With Facebook
                        </a>
                    </div>
                </div>
                <?php $this->endWidget(); ?>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    $(function () {
        $("#User_user_type_id").selectbox();
    });
</script>