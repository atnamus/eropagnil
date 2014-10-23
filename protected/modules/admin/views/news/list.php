<?php
$this->breadcrumbs = array(
    'News' => array('index'),
    'Manage',
);
?>
<div>
    <h1 style="display: inline">Manage News</h1>
    <div class="pull-right">
        <a href="<?php echo $this->createUrl('news/create/') ?>" class="btn <?php echo $this->add_button; ?>">Add News</a>        
    </div>
</div>
<br/>
<div class="row">
    <div class="col-md-12">
        <!-- BEGIN SAMPLE TABLE PORTLET-->
        <div class="portlet box <?php echo $this->portlet_color ?>">
            <div class="portlet-title">
                <div class="caption">
                    <i class="fa fa-comments"></i>News                </div>
            </div>
            <div class="portlet-body">
                <div class="table-scrollable">
                    <?php
                    $gridColumns = array(['name' => 'id', 'header' => 'ID', 'htmlOptions' => []],
                        ['name' => 'title', 'header' => 'Title', 'htmlOptions' => []],
                        ['name' => 'language_name', 'value' => '$data->language->name', 'header' => 'Language', 'htmlOptions' => []],
                        //['name' => 'slug', 'header' => 'slug', 'htmlOptions' => []],
                        // ['name' => 'content', 'header' => 'content', 'htmlOptions' => []],
                        ['name' => 'create_at', 'header' => 'Created Date', 'htmlOptions' => []],
                        ['name' => 'status', 'type' => 'raw', 'value' => '$data->statusTag()', 'header' => 'Status', 'htmlOptions' => [], 'sortable' => false,],
                        //['name' => 'language_id', 'header' => 'language_id', 'htmlOptions' => []],
                        /*
                          ['name' => 'create_at', 'header' => 'create_at', 'htmlOptions' => []],
                          ['name' => 'update_at', 'header' => 'update_at', 'htmlOptions' => []],
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
                        'id' => 'news-grid',
                        'enableSorting' => false,
                        'dataProvider' => $model->search(),
                        'template' => "{items}",
                        //'filter'=>$model,
                        'columns' => $gridColumns));
                    ?>
                </div>
            </div>
        </div>
        <!-- END SAMPLE TABLE PORTLET-->
    </div>
</div>