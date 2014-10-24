<?php
/* @var $this UserController */
/* @var $model User */
/* @var $form CActiveForm */
?>
<?php
$form = $this->beginWidget('CActiveForm', array(
    'id' => 'user-form',
    'htmlOptions' => ['class' => 'form-horizontal', 'role' >= 'form'],
    'enableAjaxValidation' => false,
        ));
if ($model->birthday == '0000-00-00')
    $model->birthday = '';
?>
<div class="form-body">
    <?php //echo $form->errorSummary($model);  ?>
    <div class="form-group">
        <label class="col-md-3 control-label">Username</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'username', array('size' => 50, 'maxlength' => 50, 'class' => 'form-control', 'id' => '{username}', 'placeholder' => 'Username')); ?>
            <?php echo $form->error($model, 'username'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Email</label>
        <div class="col-md-9">            
            <?php echo $form->textField($model, 'email', array('size' => 60, 'maxlength' => 128, 'class' => 'form-control', 'id' => '{email}', 'placeholder' => 'Email')); ?>
            <?php echo $form->error($model, 'email'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">User Type</label>
        <div class="col-md-9">
            <div class="radio-list">
                <?php
                foreach (UserType::model()->findAll(['order' => "name"]) as $row) {
                    ?>
                    <label class="radio-inline">
                        <?php echo $form->radioButton($model, "user_type_id", ["value" => $row->id, 'uncheckValue' => null]) ?> <?php echo $row->name ?>                        
                    </label>
                    <?php
                }
                ?>                
            </div>
            <?php //echo $form->textField($model, 'user_type_id', array('size' => 10, 'maxlength' => 10, 'class' => 'form-control', 'id' => '{user_type_id}', 'placeholder' => 'User Type Id')); ?>
            <?php echo $form->error($model, 'user_type_id'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Password</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'password', array('size' => 60, 'maxlength' => 128, 'class' => 'form-control', 'id' => '{password}', 'placeholder' => 'Password')); ?>
            <?php echo $form->error($model, 'password'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Full Name</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'full_name', array('size' => 60, 'maxlength' => 100, 'class' => 'form-control', 'id' => '{full_name}', 'placeholder' => 'Full Name')); ?>
            <?php echo $form->error($model, 'full_name'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Birthday</label>
        <div class="col-md-9">
            <?php
            $this->widget(
                    'booster.widgets.TbDatePicker', array(
                'model' => $model,
                'attribute' => 'birthday',
                'options' => [
                    'format' => 'yyyy-mm-dd',
                ],
                'htmlOptions' => array('class' => 'form-control'),
                    )
            );
            ?>
            <?php echo $form->error($model, 'birthday'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Gender</label>
        <div class="col-md-9">
            <div class="radio-list">
                <label class="radio-inline">
                    <?php echo $form->radioButton($model, "gender", ["value" => 1, 'uncheckValue' => null]) ?> Male
                </label>
                <label class="radio-inline">
                    <?php echo $form->radioButton($model, "gender", ["value" => 2, 'uncheckValue' => null]) ?>Female
                </label>
            </div>
            <?php echo $form->error($model, 'gender'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Default Language</label>
        <div class="col-md-9">
            <?php echo CHtml::dropDownList("AdUser[language_id]", $model->language_id, Languages::model()->getActiveList(), ["empty" => "Select Language", "class" => "form-control"]); ?>
            <?php echo $form->error($model, 'language_id'); ?>
        </div>
    </div>    
    <div class="form-group">
        <label class="col-md-3 control-label">Sound Effect</label>
        <div class="col-md-9">
            <div class="radio-list">
                <label class="radio-inline">
                    <?php echo $form->radioButton($model, "sound_effect", ["value" => 1, 'uncheckValue' => null]) ?> On                        </label>
                <label class="radio-inline">
                    <?php echo $form->radioButton($model, "sound_effect", ["value" => 0, 'uncheckValue' => null]) ?> Off                        </label>
            </div>
            <?php echo $form->error($model, 'sound_effect'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Microphone</label>
        <div class="col-md-9">
            <div class="radio-list">
                <label class="radio-inline">
                    <?php echo $form->radioButton($model, "microphone", ["value" => 1, 'uncheckValue' => null]) ?> On 
                </label>
                <label class="radio-inline">
                    <?php echo $form->radioButton($model, "microphone", ["value" => 0, 'uncheckValue' => null]) ?> Off                        </label>
            </div>
            <?php echo $form->error($model, 'microphone'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Speaker</label>
        <div class="col-md-9">
            <div class="radio-list">
                <label class="radio-inline">
                    <?php echo $form->radioButton($model, "speaker", ["value" => 1, 'uncheckValue' => null]) ?> On                        </label>
                <label class="radio-inline">
                    <?php echo $form->radioButton($model, "speaker", ["value" => 0, 'uncheckValue' => null]) ?> Off                        </label>
            </div>
            <?php echo $form->error($model, 'speaker'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Membership Type</label>
        <div class="col-md-9">
            <div class="radio-list">
                <?php
                foreach (Membership::model()->findAll() as $row) {
                    ?>
                    <label class="radio-inline">
                        <?php echo $form->radioButton($model, "membership_id", ["value" => $row->id, 'uncheckValue' => null]) ?> <?php echo $row->name ?>                        
                    </label>
                    <?php
                }
                ?>                
            </div>
            <?php echo $form->error($model, 'membership_id'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Facebook</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'facebook_url', array('rows' => 6, 'cols' => 50, 'class' => 'form-control', 'id' => 'facebook_url', 'placeholder' => 'Facebook Url')); ?>

            <?php echo $form->error($model, 'facebook_url'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Twitter</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'twitter_url', array('rows' => 6, 'cols' => 50, 'class' => 'form-control', 'id' => 'twitter_url', 'placeholder' => 'Twitter Url')); ?>

            <?php echo $form->error($model, 'twitter_url'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Google Plus</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'gplus_url', array('rows' => 6, 'cols' => 50, 'class' => 'form-control', 'id' => 'gplus_url', 'placeholder' => 'Gplus Url')); ?>

            <?php echo $form->error($model, 'gplus_url'); ?>
        </div>
    </div>    
    <div class="form-group">
        <label class="col-md-3 control-label">Profile Image</label>
        <div class="col-md-9">
            <?php echo $form->textField($model, 'profile_image', array('size' => 60, 'maxlength' => 100, 'class' => 'form-control', 'id' => '{profile_image}', 'placeholder' => 'Profile Image')); ?>

            <?php echo $form->error($model, 'profile_image'); ?>
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 control-label">Status</label>
        <div class="col-md-9">
            <div class="radio-list">
                <label class="radio-inline">
                    <?php echo $form->radioButton($model, "status", ["value" => 1, 'uncheckValue' => null]) ?> Active                     </label>
                <label class="radio-inline">
                    <?php echo $form->radioButton($model, "status", ["value" => 0, 'uncheckValue' => null]) ?>Inactive      </label>
            </div>
            <?php echo $form->error($model, 'status'); ?>
        </div>
    </div>
</div>
<div class="form-actions right1">
    <a href="<?php echo $this->createUrl('user/') ?>" class="btn <?php echo $this->cancel_button; ?>">Cancel</a>
    <button type="submit" class="btn <?php echo $this->save_button; ?>"><?php echo $model->isNewRecord ? "Create" : "Save" ?></button>
</div>
<?php $this->endWidget(); ?>
<!-- form -->