<?php
$this->breadcrumbs=array(
	'Cms'=>array('index'),
	'Details',
);

?>

<!--<h1>View Cms #<?php echo $model->id; ?></h1>-->
<div class="row">
    <div class="col-md-12">
        <div class="portlet box <?php echo $this->portlet_color; ?>">
            <div class="portlet-title">
                <div class="caption">
                    <i class="fa fa-eye"></i>
                    View <!-Details Cms #<?php //echo $model->id; ?>-->
                </div>                
            </div>
            <div class="portlet-body form">
                <form class="form-horizontal">
                    <div class="form-body">
                                                    <div class="form-group">
                                <label class="col-md-3 control-label">Title</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->title; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Slug</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->slug; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Content</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->content; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Language Id</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->language_id; ?>
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
                        <a href="<?php echo $this->createUrl('cms/') ?>" class="btn <?php echo $this->back_button; ?>">Back</a>
                        <a href="<?php echo $this->createUrl('cms/update/id/'.$model->id) ?>" class="btn <?php echo $this->update_button; ?>">Update</a>                       
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>