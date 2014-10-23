<?php
$this->breadcrumbs = array(
    'Cms' => array('index'),
    'Manage',
);
?><div>
    <h1 style="display: inline">Manage Cms</h1>
    <div class="pull-right">
        <a href="<?php echo $this->createUrl('cms/create/') ?>" class="btn <?php echo $this->add_button; ?>">Add New</a>        
    </div>
</div>
<br/>
<div class="row">
    <div class="col-md-12">
        <!-- BEGIN SAMPLE TABLE PORTLET-->
        <div class="portlet box <?php echo $this->portlet_color ?>">
            <div class="portlet-title">
                <div class="caption">
                    <i class="fa fa-comments"></i>Cms                </div>
            </div>
            <div class="portlet-body">
                <div class="table-scrollable">
                    <?php
                    $gridColumns = array(['name' => 'id', 'header' => 'Id', 'htmlOptions' => []],
                        ['name' => 'title', 'header' => 'Title', 'htmlOptions' => []],
                        ['name' => 'slug', 'header' => 'Slug', 'htmlOptions' => []],
                        //['name' => 'content', 'header' => 'Content', 'htmlOptions' => []],
                        ['name' => 'language_name', 'value' => '$data->language->name', 'header' => 'Language', 'htmlOptions' => []],
                        //['name' => 'status', 'type' => 'raw', 'value' => '$data->statusTag()', 'header' => 'Status', 'htmlOptions' => []], 'sortable' => false,
                        /*
                          ['name' => 'create_at','header' => 'Created At', 'htmlOptions' => []],
                          ['name' => 'update_at','header' => 'Updated At', 'htmlOptions' => []],
                         */
                        array(
                            'htmlOptions' => array('nowrap' => 'nowrap'),
                            'class' => 'booster.widgets.TbButtonColumn',
                            'template' => '{update}{delete}' //removed {view}
                        //'viewButtonUrl' => null,//explicitly define url
                        //'updateButtonUrl' => null,
                        //'deleteButtonUrl' => null,
                        )
                    );
                    $this->widget('booster.widgets.TbGridView', array(
                        'id' => 'cms-grid',
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