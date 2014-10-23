<?php
/* @var $this SeoController */
/* @var $model Seo */

$this->breadcrumbs=array(
	'Page SEO'=>array('index'),
	//$model->title=>array('view','id'=>$model->id),
	'Update',
);
?>

<h1>Update Seo <?php echo $model->id; ?></h1>
<div class="row">
    <div class="col-md-12">
        <div class="portlet box <?php echo $this->portlet_color; ?>">
            <div class="portlet-title">
                <div class="caption">
                    <i class="fa fa-edit"></i>Update Seo <?php echo $model->id; ?>                </div>                
            </div>
            <div class="portlet-body form">
                <?php echo $this->renderPartial('_form', array('model'=>$model)); ?>            </div>
        </div>
    </div>
</div>