<?php
$this->breadcrumbs=array(
	'Blog Categories'=>array('index'),
	'Details',
);

?>

<!--<h1>View BlogCategory #<?php echo $model->id; ?></h1>-->
<div class="row">
    <div class="col-md-12">
        <div class="portlet box <?php echo $this->portlet_color; ?>">
            <div class="portlet-title">
                <div class="caption">
                    <i class="fa fa-eye"></i>
                    View Blog Category<!-Details BlogCategory #<?php //echo $model->id; ?>-->
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
                                <label class="col-md-3 control-label">Slug</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->slug; ?>
                                                                    </div>
                            </div>
                                                        <div class="form-group">
                                <label class="col-md-3 control-label">Status</label>
                                <div class="col-md-9">
                                                                            <?php echo $model->status; ?>
                                                                    </div>
                            </div>
                                                
                    </div>
                   
                </form>
            </div>
        </div>
    </div>
</div>