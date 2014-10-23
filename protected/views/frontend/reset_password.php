<div class="account-wrap">
    <div class="create-account">
        <div class="container">
            <div class="account-form">
                <?php
                if(!isset($invalid_request)){
                ?>
                <h2>Reset Password</h2>
                <?php
                $form = $this->beginWidget('CActiveForm', array(
                    'id' => 'user-signup-form',
                    'htmlOptions' => array('class' => 'form-horizontal', "role" => "form"),
                    'enableAjaxValidation' => true,
                    'clientOptions' => array('validateOnSubmit' => true, 'afterValidate' => 'js:formValidate')
                        ));
                ?>
                <?php echo $form->errorSummary($model); ?>
                <div class="form-group">
                    <label for="PasswordResetForm_Password" class="col-sm-3 control-label"> New Password</label>
                    <div class="col-sm-9">
                        <?php echo $form->passwordField($model, 'Password', array("class" => "form-control")); ?>
                        <span style="display:none;"><?php echo $form->error($model, 'Password'); ?></span>
                    </div>
                </div>
                <div class="form-group">
                    <label for="PasswordResetForm_ConfirmPassword" class="col-sm-3 control-label"> Confirm Password</label>
                    <div class="col-sm-9">
                        <?php echo $form->passwordField($model, 'ConfirmPassword', array("class" => "form-control")); ?>
                        <span style="display:none;"><?php echo $form->error($model, 'ConfirmPassword'); ?></span>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-3 col-sm-10">
                        <?php echo CHtml::submitButton('Submit', array("class" => "account-btn", "value" => "Reset Password")); ?>
                    </div>
                </div>
                <?php $this->endWidget(); ?>
                <?php
                }else{
                    ?>
                    <h2>
                        Invalid Password Reset Link
                    </h2>
                    <?php
                }
                ?>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    $(function () {
        $("#UserMaster_UserTypeId").selectbox();
    });
</script>