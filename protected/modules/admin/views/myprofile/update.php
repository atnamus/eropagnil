<div class="row">
    <div class="col-md-12">
        <div class="portlet box <?php echo $this->portlet_color; ?>">
            <div class="portlet-title">
                <div class="caption">
                    <i class="fa fa-gift"></i> My Profile
                </div>                
            </div>
            <div class="portlet-body form">
                <?php
                $form = $this->beginWidget('CActiveForm', array(
                    'id' => 'admin-user-form',
                    'htmlOptions' => ['class' => 'form-horizontal', 'role' >= "form"],
                    // Please note: When you enable ajax validation, make sure the corresponding
                    // controller action is handling ajax validation correctly.
                    // There is a call to performAjaxValidation() commented in generated controller code.
                    // See class documentation of CActiveForm for details on this.
                    'enableAjaxValidation' => false,
                ));
                ?>
                <div class="form-body">
                    <div class="form-group">
                        <label class="col-md-3 control-label">Administrator Name</label>
                        <div class="col-md-9">
                            <?php echo $form->textField($model, 'name', array('size' => 50, 'maxlength' => 50, 'class' => 'form-control', 'placeholder' => "Administrator Name")); ?>
                            <?php echo $form->error($model, 'name'); ?>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-3 control-label">New Password</label>
                        <div class="col-md-9">
                            <?php echo $form->passwordField($model, 'password', array('size' => 60, 'maxlength' => 20, 'class' => 'form-control', 'placeholder' => "New password")); ?>
                            <?php //echo $form->error($model, 'password'); ?>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-3 control-label">Retype Password</label>
                        <div class="col-md-9">
                            <?php echo $form->passwordField($model, 'repeat_password', array('size' => 60, 'maxlength' => 20, 'class' => 'form-control', 'placeholder' => "Retype Password")); ?>
                            <?php echo $form->error($model, 'password'); ?>
                        </div>
                    </div>                    
                    <div class="form-group">
                        <label class="col-md-3 control-label">Email</label>
                        <div class="col-md-9">
                            <?php echo $form->textField($model, 'email', array('size' => 60, 'maxlength' => 254, 'class' => 'form-control', 'placeholder' => "Email")); ?>
                            <?php echo $form->error($model, 'email'); ?>
                        </div>
                    </div>  

                </div>
                <div class="form-actions right1">
                    <button type="button" class="btn default">Cancel</button>
                    <button type="submit" class="btn green">Submit</button>
                </div>
                <?php $this->endWidget(); ?>
            </div>
        </div>
    </div>
</div>