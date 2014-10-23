<?php
$this->breadcrumbs = array(
    'Contact Us' => array('index'),
    'Manage',
);
?><div>
    <h1 style="display: inline">Manage Contact Us</h1>    
</div>
<br/>
<div class="row">
    <div class="col-md-12">
        <!-- BEGIN SAMPLE TABLE PORTLET-->
        <div class="portlet box <?php echo $this->portlet_color ?>">
            <div class="portlet-title">
                <div class="caption">
                    <i class="fa fa-comments"></i>Contact Us                </div>
            </div>
            <div class="portlet-body">
                <div class="table-scrollable">
                    <?php
                    $gridColumns = array(['name' => 'id', 'header' => 'Id', 'htmlOptions' => []],
                        ['name' => 'name', 'header' => 'Name', 'htmlOptions' => []],
                        ['name' => 'email', 'header' => 'Email', 'htmlOptions' => []],
                        ['name' => 'subject', 'header' => 'Subject', 'htmlOptions' => []],
                        //['name' => 'message', 'header' => 'Message', 'htmlOptions' => []],
                        ['name' => 'create_at', 'header' => 'Created At', 'htmlOptions' => []],
                        array(
                            'htmlOptions' => array('nowrap' => 'nowrap'),
                            'class' => 'booster.widgets.TbButtonColumn',
                        'template' => '{view}{delete}' //removed {view}
                        //'viewButtonUrl' => null,//explicitly define url
                        //'updateButtonUrl' => null,
                        //'deleteButtonUrl' => null,
                        )
                    );
                    $this->widget('booster.widgets.TbGridView', array(
                        'id' => 'contact-us-grid',
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