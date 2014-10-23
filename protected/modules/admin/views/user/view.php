<?php
$this->breadcrumbs=array(
	'Users'=>array('index'),
	'Details',
);

?>

<!--<h1>View User #<?php echo $model->id; ?></h1>-->
<div class="row">
    <div class="col-md-12">
        <div class="portlet box <?php echo $this->portlet_color; ?>">
            <div class="portlet-title">
                <div class="caption">
                    <i class="fa fa-eye"></i>
                    View <!-Details User #<?php //echo $model->id; ?>-->
                </div>                
            </div>
            <div class="portlet-body form">
                <form class="form-horizontal">
                    <div class="form-body">
                                                    <div class="form-group">
                                <label class="col-md-3 control-label">Username</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->username; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Email</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->email; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">User Type Id</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->user_type_id; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Password</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->password; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">First Name</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->first_name; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Last Name</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->last_name; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Birthday</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->birthday; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Gender</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->gender; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Language Id</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->language_id; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Profile Image</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->profile_image; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Sound Effect</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->sound_effect; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Microphone</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->microphone; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Speaker</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->speaker; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Membership Id</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->membership_id; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Facebook Url</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->facebook_url; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Twitter Url</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->twitter_url; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Gplus Url</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->gplus_url; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Activation Code</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->activation_code; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Reset Key</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->reset_key; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Status</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->status; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Create At</label>
                                <div class="col-md-9">
                                                                            <?php echo $this->formateDate($model->create_at); ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Update At</label>
                                <div class="col-md-9">
                                                                            <?php echo $this->formateDate($model->update_at); ?>
                                                                    </div>
                            </div>
                                                
                    </div>
                    <div class="form-actions right1">
                        <a href="<?php echo $this->createUrl('user/') ?>" class="btn <?php echo $this->back_button; ?>">Back</a>
                        <a href="<?php echo $this->createUrl('user/update/id/'.$model->id) ?>" class="btn <?php echo $this->update_button; ?>">Update</a>                       
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>