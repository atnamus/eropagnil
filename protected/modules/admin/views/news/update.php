<?php
/* @var $this NewsController */
/* @var $model News */

$this->breadcrumbs = array(
    'News' => array('index'),
    //$model->title=>array('view','id'=>$model->id),
    'Update',
);
?>

<div class="row">
    <div class="col-md-12">
        <div class="portlet box <?php echo $this->portlet_color; ?>">
            <div class="portlet-title">
                <div class="caption">
                    <i class="fa fa-edit"></i>Update News</div>                
            </div>
            <div class="portlet-body form">
                <?php echo $this->renderPartial('_form', array('model' => $model)); ?>            </div>
        </div>
    </div>
</div>