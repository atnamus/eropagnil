<?php
$this->breadcrumbs=array(
	'Forum Categories'=>array('index'),
	'Details',
);

?>

<!--<h1>View ForumCategory #<?php echo $model->id; ?></h1>-->
<div class="row">
    <div class="col-md-12">
        <div class="portlet box <?php echo $this->portlet_color; ?>">
            <div class="portlet-title">
                <div class="caption">
                    <i class="fa fa-eye"></i>
                    View <!-Details ForumCategory #<?php //echo $model->id; ?>-->
                </div>                
            </div>
            <div class="portlet-body form">
                <form class="form-horizontal">
                    <div class="form-body">
                                                    <div class="form-group">
                                <label class="col-md-3 control-label">Name</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->name; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Forum Count</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->forum_count; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Sort</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->sort; ?>
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
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Status</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->status; ?>
                                                                    </div>
                            </div>
                                                
                    </div>
                    <div class="form-actions right1">
                        <a href="<?php echo $this->createUrl('forumCategory/') ?>" class="btn <?php echo $this->back_button; ?>">Back</a>
                        <a href="<?php echo $this->createUrl('forumCategory/update/id/'.$model->id) ?>" class="btn <?php echo $this->update_button; ?>">Update</a>                       
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>