<div class="row">
    <div class="col-sm-12">
        <!-- Tab panes -->
        <div class="accEdit"> 
            <div id='listing'>
                <div id='all-child'>
                    <?php $this->renderPartial('/organization/child_list'); ?>
                </div>
                <h1><span>Subscribe to weekly email</span> reports about your children</h1>
                <div class="form-group">
                    <div style=" text-align: center;">
                        <button class="btn-submit" type="submit" id="add-child-button">Add a Child</button>
                        <button class="btn-submit-sky" type="submit">Mange Child</button>
                    </div>
                </div>
            </div>
            <div id="create-child-step1" style="display: none;">
                <h1>Child's details</h1>
                <?php
                $form = $this->beginWidget('CActiveForm', array(
                    'id' => 'child-signup-form',
                    'action' => $this->createUrl('CreateChild'),
                    'htmlOptions' => array('class' => 'basics-form ajax-submit', "role" => "form", "autocomplete" => "off", 'data-reset' => 'true','data-after-success'=>'reload_child_list'),
                        // 'enableAjaxValidation' => true,
                        // 'clientOptions' => array('validateOnSubmit' => true, 'afterValidate' => 'js:childformValidate', 'beforeValidate' => 'js:show_ladda')
                ));
                ?>
                <?php echo $form->errorSummary($model); ?>
                <div id="step1-data">
                    <div class="form-group">
                        <label class="col-sm-4 control-label" for="User_full_name"></label>
                        <div class="col-sm-8">
                            <span style="display:none;"><div style="display:none" id="User_full_name_em_" class="errorMessage"></div></span>
                        </div>
                    </div>
                    <!--                        <div class="form-group">
                                                <label class="col-sm-3 control-label" for="User_full_name">Your child's birthday</label>
                                                <div id="short-month-birthday"></div>
                                            </div>-->
                    <div class="form-group">
                        <label class="col-sm-3 control-label"></label>
                        <div class="col-sm-9">
                            <a href="#" id="already-have-acc-a"> My child already has an account</a>
                        </div>
                    </div>
                </div>
                <div id="step2-data" style="display: block;">
                    <!--                        <div class="form-group">
                                                <label class="col-sm-3 control-label" for="User_full_name"></label>
                                                <div class="col-sm-9">
                                                    Because your child is under 13, they will have a restricted child account.
                                                    Tip: Write down the username and password you choose for your child.
                                                </div>
                                            </div>-->
                    <div class="form-group">
                        <label for="Child_username" class="col-sm-3 control-label required">Username</label>
                        <div class="col-sm-9">
                            <?php echo $form->textField($model, 'username', array("class" => "form-control")); ?>
                            <span style="display:none;"><?php echo $form->error($model, 'username'); ?></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="Child_email" class="col-sm-3 control-label required">Email</label>
                        <div class="col-sm-9">
                            <?php echo $form->emailField($model, 'email', array("class" => "form-control")); ?>
                            <span style="display:none;"><?php echo $form->error($model, 'email'); ?></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="Child_password" class="col-sm-3 control-label required">Password</label>
                        <div class="col-sm-9">
                            <?php echo $form->passwordField($model, 'password', array("class" => "form-control")); ?>
                            <span style="display:none;"><?php echo $form->error($model, 'password'); ?></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label" for="Child_gender">Gender</label>
                        <div class="col-sm-9">
                            <select id="User_language_id" name="Child[gender]" class="form-control acc-select">
                                <option value="">---select---</option>
                                <option value="1">Female</option>
                                <option value="2">Male</option>
                            </select> 
                        </div>
                        <span style="display:none;"><?php echo $form->error($model, 'gender'); ?></span>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label"></label>
                        <div class="col-sm-9">
                            By clicking next, you confirm that you are the child's parent or legal guardian and agree to our Terms of Service and Privacy Notice.
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-3 col-sm-10">
                        <button class="btn-submit" id="back-to-child-mng" type="submit">Back</button>
                        <button class="btn-submit ladda-button" data-style="expand-left" id="child-submit-button" type="submit">
                            Next
                            <span class="ladda-spinner"></span>
                        </button>                            
                    </div>
                </div>
                <?php $this->endWidget(); ?>
            </div>
            <div id="already-have-acc-div" style="display: none;">
                <form method="post" action="">

                    <h1>Connect to your child's lingapore account</h1>
                    <div class="form-group">
                        <label class="col-sm-3 control-label" for="User_full_name">Child's email</label>
                        <div class="col-sm-9">
                            <input type="text" value="" id="User_full_name" name="User[full_name]" class="form-control">                                         <span style="display:none;"><div style="display:none" id="User_full_name_em_" class="errorMessage"></div></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-3 col-sm-10">
                            <button class="btn-submit" type="submit" id="add-child-button">Add a Child</button>
                            <button class="btn-submit-sky" type="submit">Mange Child</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- Tab panes -->
    </div> 
</div>
<?php
Assets::loadPlugin('birthday-picker');