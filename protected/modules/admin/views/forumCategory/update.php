<?php
/* @var $this ForumCategoryController */
/* @var $model ForumCategory */

$this->breadcrumbs=array(
	'Forum Categories'=>array('index'),
	//$model->name=>array('view','id'=>$model->id),
	'Update',
);
?>

<!--<h1>Update ForumCategory <?php echo $model->id; ?></h1>-->
<div class="row">
    <div class="col-md-12">
        <div class="portlet box <?php echo $this->portlet_color; ?>">
            <div class="portlet-title">
                <div class="caption">
                    <i class="fa fa-edit"></i>Update Forum Category <?php //echo $model->id; ?>                </div>                
            </div>
            <div class="portlet-body form">
                <?php echo $this->renderPartial('_form', array('model'=>$model)); ?>            </div>
        </div>
    </div>
</div>