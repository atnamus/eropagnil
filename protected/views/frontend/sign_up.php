<script>
    $(document).ready(function(e) {
        $(".homepage-teacher-signup-link").click(function(e) {
            e.preventDefault();
            var state = {
                "currentState": true
            };

            history.pushState(state, "Lingapore", "?user_type=" + $(this).attr("data-usertype"));
//            expect(history.state).toEqual(state);

            $("#user_type").val($(this).attr("data-usertype"));

            $(".create-account-type").fadeOut("fast", function(e) {
                $(".create-account-form").fadeIn("fast");
            });
        });
        
        $("#go_back").click(function(e) {
            e.preventDefault();
            var state = {
                "currentStates": true
            };
            
            history.replaceState(state, "Lingapore", "");
            history.back();

//            history.pushState(state, "Lingapore", "?user_type=" + $(this).attr("data-usertype"));
//            expect(history.state).toEqual(state);

            $("#user_type").val("");

            $(".create-account-form").fadeOut("fast", function(e) {
                $(".create-account-type").fadeIn("fast");
            });
        });
        
        
    });
</script>
<div class="account-wrap">
    <div class="create-account create-account-type" style="<?php
    if ($user_type != "") {
        echo "display:none;";
    }
    ?>">
        <div class="container">
            <div class="account-form">
                <h2>Create an Account</h2>

                <div class="preemptive-widget" id="crtacc_btn_sec">
                    <div class="role-signup-prompt">  
                        <a href="<?php echo $this->createUrl("user/Signup"); ?>?user_type=learner" id="crtacc_btn1" data-usertype="learner" class="homepage-teacher-signup-link">Lerner/Guide</a>

                        <a href="<?php echo $this->createUrl("user/Signup"); ?>?user_type=parent" id="crtacc_btn2" data-usertype="parent" class="homepage-teacher-signup-link">Parent</a>

                        <a href="<?php echo $this->createUrl("user/Signup"); ?>?user_type=school" id="crtacc_btn3" data-usertype="school" class="homepage-teacher-signup-link">School</a>

                        <a href="<?php echo $this->createUrl("user/Signup"); ?>?user_type=company" id="crtacc_btn4" data-usertype="company" class="homepage-teacher-signup-link">Company</a>

                        <a href="<?php echo $this->createUrl("user/Signup"); ?>?user_type=business_guide" id="crtacc_btn5" data-usertype="business_guide" class="homepage-teacher-signup-link">Business Guide</a>

                    </div> 
                </div>
            </div>
        </div>
    </div>
    <div class="create-account create-account-form" style="<?php
    if ($user_type == "") {
        echo "display:none;";
    }
    $user_type_name="";
    
    switch($user_type){
        case "learner":
            $user_type_name="Learner/Guide";
            break;
        
        case "parent":
            $user_type_name="Parent";
            break;
        
        case "school":
            $user_type_name="School";
            break;
        
        case "company":
            $user_type_name="Company";
            break;
        
        case "business_guide":
            $user_type_name="Business Guide";
            break;
        
        
    }
    ?>">
        <div class="container">
            <div class="account-form">
                <h2>Create <?php echo $user_type_name; ?> Account</h2>
                <?php
                $form = $this->beginWidget('CActiveForm', array(
                    'id' => 'user-signup-form',
                    'htmlOptions' => array('class' => 'form-horizontal', "role" => "form", "autocomplete" => "off"),
                    'enableAjaxValidation' => true,
                    'clientOptions' => array('validateOnSubmit' => true, 'afterValidate' => 'js:formValidate', 'beforeValidate' => 'js:show_loader')
                ));
                ?>
                        <?php echo $form->errorSummary($model); ?>
                <input type="hidden" name="user_type" id="user_type" value="<?php echo $user_type; ?>" />
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
                <div class="form-group">
                    <div class="col-sm-offset-3 col-sm-10">
                        <div style="text-align: center;">
                            <a href='javascript:void(0)' id='go_back' style='color:#fff; text-decoration:underline;'>Go back</a>
                        </div>
                        <label class="control-label">
                            By joining Lingapore, you agree to our <a class="signup_link" href="<?php echo $this->createUrl("home/Terms"); ?>">Terms of Service</a> and <a class="signup_link" href="<?php echo $this->createUrl("home/Privacy"); ?>">Privacy Policy</a>
                        </label>
                    </div>
                </div>
<?php $this->endWidget(); ?>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    $(function() {
        $("#User_user_type_id").selectbox();
    });
</script>