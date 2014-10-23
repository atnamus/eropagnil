<?php
/* @var $this CmsController */
/* @var $model Cms */

$this->breadcrumbs=array(
	'Cms'=>array('index'),
	//$model->title=>array('view','id'=>$model->id),
	'Update',
);
?>

<!--<h1>Update Cms <?php echo $model->id; ?></h1>-->
<div class="row">
    <div class="col-md-12">
        <div class="portlet box <?php echo $this->portlet_color; ?>">
            <div class="portlet-title">
                <div class="caption">
                    <i class="fa fa-edit"></i>Update Cms <?php //echo $model->id; ?>                </div>                
            </div>
            <div class="portlet-body form">
                <?php echo $this->renderPartial('_form', array('model'=>$model)); ?>            </div>
        </div>
    </div>
</div>