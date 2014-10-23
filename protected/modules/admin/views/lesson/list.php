<?php
$this->breadcrumbs = array(
    'Lessons' => array('index'),
    'Manage',
);
?>
<script nosrc="http://cdn.pubnub.com/pubnub.min.js"></script>

<script>
    var pubnub = PUBNUB.init({
        publish_key: 'pub-c-96750bf4-44ad-4bd4-ae92-426ac7204ed6',
        subscribe_key: 'sub-c-e67d6f40-5830-11e4-9bbe-02ee2ddab7fe'
    });

    pubnub.subscribe({
        channel: "myChannel",
        callback: function(message) {
            console.log("I got the message: " + message);
        },
        connect: function() {
            pubnub.publish({
                channel: "myChannel",
                message: "Hello World!"
            });
        }
    });
</script>
<div>
    <h1 style="display: inline">Manage Lessons</h1>
    <div class="pull-right">
        <a href="<?php echo $this->createUrl('lesson/create/') ?>" class="btn <?php echo $this->add_button; ?>">Add New</a>        
    </div>
</div>
<br/>
<div class="row">
    <div class="col-md-12">
        <!-- BEGIN SAMPLE TABLE PORTLET-->
        <div class="portlet box <?php echo $this->portlet_color ?>">
            <div class="portlet-title">
                <div class="caption">
                    <i class="fa fa-comments"></i>Lessons                </div>
            </div>
            <div class="portlet-body">
                <div class="table-scrollable">
                    <?php
                    $gridColumns = array(
                        //['name' => 'id', 'header' => 'Id', 'htmlOptions' => []],
                        //['name' => 'language_name', 'value' => '$data->language->name','header' => 'Language', 'htmlOptions' => []],
                        ['name' => 'title', 'header' => 'Title', 'htmlOptions' => []],
                        ['name' => 'full_name', 'value' => '$data->author->full_name', 'header' => 'Author name', 'htmlOptions' => []],
                        ['name' => 'stage_id', 'value' => '$data->stage->name', 'header' => 'Stage', 'htmlOptions' => []],
                        ['name' => 'category_id', 'value' => '$data->category->name', 'header' => 'Category', 'htmlOptions' => []],
                        ['name' => 'status', 'type' => 'raw', 'value' => '$data->statusTag()', 'header' => 'Status', 'htmlOptions' => [], 'sortable' => false],
                        /*
                          ['name' => 'level','header' => 'Level', 'htmlOptions' => []],
                          ['name' => 'memo','header' => 'Memo', 'htmlOptions' => []],
                          ['name' => 'create_at','header' => 'Created At', 'htmlOptions' => []],
                          ['name' => 'update_at','header' => 'Updated At', 'htmlOptions' => []],
                          ['name' => 'status','type'=>'raw','value'=>'$data->statusTag()', 'header' => 'Status', 'htmlOptions' => [],'sortable' => false],
                         */
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
                        'id' => 'lesson-grid',
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