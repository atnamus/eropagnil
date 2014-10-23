<?php
$this->breadcrumbs = array(
    'Newsletter Subscribers' => array('index'),
    'Manage',
);
?><div>
    <h1 style="display: inline">Manage Newsletter Subscribers</h1>
    <div class="pull-right">
        <a href="<?php echo $this->createUrl('newsletterSubscriber/create/') ?>" class="btn <?php echo $this->add_button; ?>">Add Subscriber</a>        
    </div>
</div>
<br/>
<div class="row">
    <div class="col-md-12">
        <!-- BEGIN SAMPLE TABLE PORTLET-->
        <div class="portlet box <?php echo $this->portlet_color ?>">
            <div class="portlet-title">
                <div class="caption">
                    <i class="fa fa-comments"></i>Newsletter Subscribers</div>
            </div>
            <div class="portlet-body">
                <div class="table-scrollable">
                    <?php
                    $gridColumns = array(['name' => 'id', 'header' => 'Id', 'htmlOptions' => []],
                        ['name' => 'email', 'header' => 'Email', 'htmlOptions' => []],
                        ['name' => 'create_at', 'header' => 'Created At', 'htmlOptions' => []],
                        //['name' => 'update_at', 'header' => 'Updated At', 'htmlOptions' => []],
                        ['name' => 'status', 'type' => 'raw', 'value' => '$data->statusTag()', 'header' => 'Status', 'htmlOptions' => [], 'sortable' => false],
                        array(
                            'htmlOptions' => array('nowrap' => 'nowrap'),
                            'class' => 'booster.widgets.TbButtonColumn',
                        //'template' => '{view}{update}{delete}' //removed {view}
                        //'viewButtonUrl' => null,//explicitly define url
                        //'updateButtonUrl' => null,
                        //'deleteButtonUrl' => null,
                        )
                    );
                    $this->widget('booster.widgets.TbGridView', array(
                        'id' => 'newsletter-subscriber-grid',
                        'dataProvider' => $model->search(),
                        'template' => "{items}",
                        'enableSorting' => false,
                        //'filter'=>$model,
                        'columns' => $gridColumns));
                    ?>
                </div>
            </div>
        </div>
        <!-- END SAMPLE TABLE PORTLET-->
    </div>
</div>