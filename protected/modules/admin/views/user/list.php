
<?php
$this->breadcrumbs = array(
    'Users' => array('index'),
    'Manage',
);
?><div>
    <h1 style="display: inline">Manage Users</h1>
    <div class="pull-right">
        <a href="<?php echo $this->createUrl('user/create/') ?>" class="btn <?php echo $this->add_button; ?>">Add User</a>        
    </div>
</div>
<br/>
<div class="row">
    <div class="col-md-12">
        <!-- BEGIN SAMPLE TABLE PORTLET-->
        <div class="portlet box <?php echo $this->portlet_color ?>">
            <div class="portlet-title">
                <div class="caption">
                    <i class="fa fa-comments"></i>Users                </div>
            </div>
            <div class="portlet-body">
                <div class="table-scrollable">
                    <?php
                    $gridColumns = array(
                        ['name' => 'first_name', 'header' => 'First Name', 'htmlOptions' => []],
                        ['name' => 'last_name', 'header' => 'Last Name', 'htmlOptions' => []],
                        ['name' => 'username', 'header' => 'Username', 'htmlOptions' => []],
                        ['name' => 'email', 'header' => 'Email', 'htmlOptions' => []],
                        ['name' => 'email', 'header' => 'Email', 'htmlOptions' => []],
                        /*
                          ['name' => 'id', 'header' => 'Id', 'htmlOptions' => []],
                          ['name' => 'password', 'header' => 'Password', 'htmlOptions' => []],
                          ['name' => 'user_type_id', 'header' => 'User Type Id', 'htmlOptions' => []],
                          ['name' => 'birthday','header' => 'Birthday', 'htmlOptions' => []],
                          ['name' => 'gender','header' => 'Gender', 'htmlOptions' => []],
                          ['name' => 'language_name', 'value' => '$data->language->name','header' => 'Language', 'htmlOptions' => []],
                          ['name' => 'profile_image','header' => 'Profile Image', 'htmlOptions' => []],
                          ['name' => 'sound_effect','header' => 'Sound Effect', 'htmlOptions' => []],
                          ['name' => 'microphone','header' => 'Microphone', 'htmlOptions' => []],
                          ['name' => 'speaker','header' => 'Speaker', 'htmlOptions' => []],
                          ['name' => 'membership_id','header' => 'Membership Id', 'htmlOptions' => []],
                          ['name' => 'facebook_url','header' => 'Facebook Url', 'htmlOptions' => []],
                          ['name' => 'twitter_url','header' => 'Twitter Url', 'htmlOptions' => []],
                          ['name' => 'gplus_url','header' => 'Gplus Url', 'htmlOptions' => []],
                          ['name' => 'activation_code','header' => 'Activation Code', 'htmlOptions' => []],
                          ['name' => 'reset_key','header' => 'Reset Key', 'htmlOptions' => []],
                          ['name' => 'status',type=>'raw','value'=>'$data->statusTag()', 'header' => 'Status', 'htmlOptions' => []],'sortable' => false,
                          ['name' => 'create_at','header' => 'Created At', 'htmlOptions' => []],
                          ['name' => 'update_at','header' => 'Updated At', 'htmlOptions' => []],
                         */
                        array(
                            'htmlOptions' => array('nowrap' => 'nowrap'),
                            'class' => 'booster.widgets.TbButtonColumn',
                            'template' => '{update} {delete}', //removed {view}
                        //'viewButtonUrl' => null,//explicitly define url
                        //'updateButtonUrl' => null,
                        //'deleteButtonUrl' => null,
                        /*    'buttons' => array
                          (
                          'delete' => array
                          (
                          //  'url' => 'Yii::app()->createUrl("admin/user")',
                          'click' => 'js:function myfunction(){
                          confirm("Are you sure you want to delete this user?");
                          }',
                          ),
                          ) */
                        ),
                    );



                    $dataProvider = new CActiveDataProvider('User', array(
                        'criteria' => array(
                            'order' => 'create_at DESC',
                        ),
                        'pagination' => array(
                            'pageSize' => 5,
                            'pageVar' => 'custom-page-selector', //page selector
                        ),
                    ));
                    $this->widget('booster.widgets.TbGridView', array(
                        'id' => 'user-grid',
                        //    'dataProvider' => $model->search(),
                        'dataProvider' => $dataProvider,
                        'selectableRows' => 1,
                        'template' => "{summary}\n{pager}<br>\n{items}\n{pager}",
                        'updateSelector' => 'custom-page-selector', //update selector
                        'template' => "{items}",
                        'enableSorting' => false,
                        //'filter'=>$model,
                        'columns' => $gridColumns,
                    ));
                    ?>
                </div>
            </div>
        </div>
        <!-- END SAMPLE TABLE PORTLET-->
    </div>
</div>