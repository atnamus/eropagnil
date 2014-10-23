<?php
/* @var $this NewsletterSubscriberController */
/* @var $model NewsletterSubscriber */

$this->breadcrumbs=array(
	'Newsletter Subscribers'=>array('index'),
	//$model->id=>array('view','id'=>$model->id),
	'Update',
);
?>

<!--<h1>Update NewsletterSubscriber <?php echo $model->id; ?></h1>-->
<div class="row">
    <div class="col-md-12">
        <div class="portlet box <?php echo $this->portlet_color; ?>">
            <div class="portlet-title">
                <div class="caption">
                    <i class="fa fa-edit"></i>Update Newsletter Subscriber <?php //echo $model->id; ?>                </div>                
            </div>
            <div class="portlet-body form">
                <?php echo $this->renderPartial('_form', array('model'=>$model)); ?>            </div>
        </div>
    </div>
</div>