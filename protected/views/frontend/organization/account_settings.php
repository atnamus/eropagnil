<!-- learner_public_Profile -->
<div class="learner_public_profile">
    <div class="container">
        <div class="learn_pp manage_pp">
            <div class="new_heading">
                <h4 class="pull-left">Settings</h4>
                <ul class="right_acc pull-right">
                    <li><a class="select" href="#">Account</a></li>|
                    <li><a href="#">Email</a></li>
                </ul>
            </div>
            <?php
            $tabs = ['basics', 'password', 'linked-accounts', 'roles', 'child-accounts', 'profile-information', 'membership', 'notification'];
            $current_tab = isset($_GET['t']) && in_array($_GET['t'], $tabs) ? $_GET['t'] : 'basics';
            ?>
            <div class="row">
                <div class="col-lg-12 manage_tab">
                    <ul class="nav nav-tabs" role="tablist" id="myTab">
                        <li <?php if ($current_tab == 'basics') echo 'class="active"'; ?>><a href="#basics" role="tab" data-toggle="tab">Basics</a></li>
                        <li <?php if ($current_tab == 'password') echo 'class="active"'; ?>><a href="#password" role="tab" data-toggle="tab">Password</a></li>
                        <li><a href="#linked-accounts" role="tab" data-toggle="tab">Linked Accounts</a></li>
                        <li><a href="#roles" role="tab" data-toggle="tab">Roles</a></li>
                        <li><a href="#child-accounts" role="tab" data-toggle="tab">Child Accounts</a></li>
                        <li><a href="#profile-information" role="tab" data-toggle="tab">Profile Information</a></li>
                        <li><a href="#membership" role="tab" data-toggle="tab">Membership</a></li>
                        <li><a href="#notification" role="tab" data-toggle="tab">Notification</a></li>
                    </ul>
                    <div class="tab-content basic-tab">
                        <div class="tab-pane fade <?php if ($current_tab == 'basics') echo 'active in'; ?>" id="basics">
                            <div class="my-lession corrections-tab">
                                <?php echo $this->renderPartial("/organization/tab/basic", ['model' => $model, 'languages' => $languages]); ?>                                
                            </div>
                        </div>
                        <div class="tab-pane fade <?php if ($current_tab == 'password') echo 'active in'; ?>" id="password">
                            <div class="my-lession corrections-tab">
                                <?php echo $this->renderPartial("/organization/tab/password", ['model' => $model]); ?>              
                            </div>
                        </div>
                        <div class="tab-pane fade" id="linked-accounts">
                            <div class="my-lession corrections-tab">
                                <?php echo $this->renderPartial("/organization/tab/linked-accounts", ['model' => $model]); ?>              
                            </div>
                        </div>
                        <div class="tab-pane fade" id="roles">
                            <div class="my-lession corrections-tab">
                                <?php echo $this->renderPartial("/organization/tab/roles", ['model' => $model]); ?>              
                            </div>
                        </div>
                        <div class="tab-pane fade" id="child-accounts">
                            <div class="my-lession corrections-tab">
                                <?php echo $this->renderPartial("/organization/tab/child-accounts", ['model' => $model]); ?>              
                            </div>
                        </div>
                        <div class="tab-pane fade" id="profile-information">
                            <div class="my-lession corrections-tab">
                                <?php echo $this->renderPartial("/organization/tab/profile-information", ['model' => $model]); ?>              
                            </div>
                        </div>
                        <div class="tab-pane fade" id="membership">
                            <div class="my-lession corrections-tab">
                                <?php echo $this->renderPartial("/organization/tab/membership", ['model' => $model]); ?>              
                            </div>
                        </div>
                        <div class="tab-pane fade" id="notification">
                            <div class="my-lession corrections-tab">
                                <?php echo $this->renderPartial("/organization/tab/notification", ['model' => $model]); ?>              
                            </div>
                        </div>
                    </div><!-- end tab-content -->
                </div>
            </div>                               
        </div>
    </div>
</div>