<?php
$this->breadcrumbs = array(
    'Forum Names' => array('index'),
    'Manage',
);
?><div>
    <h1 style="display: inline">Manage Forum Names</h1>
    <div class="pull-right">
        <a href="<?php echo $this->createUrl('forumName/create/') ?>" class="btn <?php echo $this->add_button; ?>">Add New Forum Name</a>        
    </div>
</div>
<br/>
<div class="row">
    <div class="col-md-12">
        <!-- BEGIN SAMPLE TABLE PORTLET-->
        <div class="portlet box <?php echo $this->portlet_color ?>">
            <div class="portlet-title">
                <div class="caption">
                    <i class="fa fa-comments"></i>Forum Names                </div>
            </div>
            <div class="portlet-body">
                <div class="table-scrollable">
                    <?php
                    $gridColumns = array(
                        //['name' => 'id', 'header' => 'Id', 'htmlOptions' => []],
                        ['name' => 'name', 'header' => 'Name', 'htmlOptions' => []],
                        ['name' => 'forum_category_id', 'type' => 'raw', 'value' => '$data->category?$data->category->name:"NA"', 'header' => 'Forum Category', 'htmlOptions' => []],
                        //['name' => 'sort', 'header' => 'Sort', 'htmlOptions' => []],
                        //['name' => 'last_thread_id', 'header' => 'Last Thread Id', 'htmlOptions' => []],
                        // ['name' => 'last_post_id', 'header' => 'Last Post Id', 'htmlOptions' => []],
                        /*
                          ['name' => 'thread_count','header' => 'Thread Count', 'htmlOptions' => []],
                          ['name' => 'post_count','header' => 'Post Count', 'htmlOptions' => []],
                          ['name' => 'create_at','header' => 'Created At', 'htmlOptions' => []],
                          ['name' => 'update_at','header' => 'Updated At', 'htmlOptions' => []],
                          ['name' => 'status','type'=>'raw','value'=>'$data->statusTag()', 'header' => 'Status', 'htmlOptions' => [],'sortable' => false],
                         */
                        array(
                            'htmlOptions' => array('nowrap' => 'nowrap'),
                            'class' => 'booster.widgets.TbButtonColumn',
                            'template' => '{update} {delete}' //removed {view}
                        //'viewButtonUrl' => null,//explicitly define url
                        //'updateButtonUrl' => null,
                        //'deleteButtonUrl' => null,
                        )
                    );
                    $this->widget('booster.widgets.TbGridView', array(
                        'id' => 'forum-name-grid',
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