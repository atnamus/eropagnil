<?php
$this->renderPartial("/_build_lesson", array("stages" => $stages, "languages" => $all_languages));
?>
<div class="learner_public_profile">
    <div class="container">
        <div class="learn_pp">
            <div class="pull-right"><a href="#" class="mileage-btn">Mileage</a></div>
            <div class="row">
                <div class="col-lg-12 learner-profile">
                    <ul class="nav nav-tabs" role="tablist" id="myTab">
                        <li class="active"><a href="#accSettings" role="tab" data-toggle="tab"><i class="acc-sett"></i> Account Settings</a></li>
                        <li class=""><a href="#myLessons" role="tab" data-toggle="tab"><i class="my-lessons"></i>My Lessons</a>
                        </li>
                        <li id="corrections_tab" class=""><a href="#corrections" role="tab" data-toggle="tab"><i class="cortions"></i>Corrections</a></li>
                        <li class=""><a href="#membership" role="tab" data-toggle="tab"><i class="member-icon"></i>Membership</a></li>
                        <li class=""><a href="#notification" role="tab" data-toggle="tab"><i class="notifi-icon"></i>Notification</a></li>
                        <li><a href="#friends" role="tab" data-toggle="tab"><i class="frnd-icon"></i>Friends</a></li>
                        <li class=""><a href="#myPage" role="tab" data-toggle="tab"><i class="my-page"></i>My page</a></li>
                    </ul>

                    <div class="tab-content">
                        <div class="tab-pane fade in active" id="accSettings">
                            <h2 class="sub-title">Account Options:-    </h2>
                            <div class="row">
                                <div class="col-sm-3">
                                    <div class="lerProlft">
                                        <div class="lpro-img">
                                            <img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/uploads/images/profile_pic/<?php echo $this->profile_pic; ?>" alt="">
                                        </div>
                                        <h3 class="lpro-name"><?php echo $this->full_name; ?></h3>
                                        <div class="lpro-det">Nulla gravida quam nec orci pulvinar ultrices. </div>
                                    </div>
                                </div>
                                <div class="col-sm-9">
                                    <div class="accEdit">
                                        <?php
                                        $form = $this->beginWidget('CActiveForm', array(
                                            'id' => 'account-settings-form',
                                            'htmlOptions' => array('class' => 'form-horizontal', "role" => "form", "autocomplete" => "off"),
                                            'enableAjaxValidation' => true,
                                            'clientOptions' => array('validateOnSubmit' => true, 'afterValidate' => 'js:formValidate', 'beforeValidate' => 'js:show_loader')
                                        ));
                                        ?>
                                        <?php echo $form->errorSummary($model); ?>
                                        <div class="form-group">
                                            <label for="User_full_name" class="col-sm-3 control-label">Real Name</label>
                                            <div class="col-sm-9">
                                                <?php echo $form->textField($model, 'full_name', array("class" => "form-control")); ?>
                                                <span style="display:none;"><?php echo $form->error($model, 'full_name'); ?></span>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="userName" class="col-sm-3 control-label">Username</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" readonly id="userName" value="<?php echo $username; ?>" placeholder="">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-offset-3 col-sm-10 gender">
                                                <?php echo $form->radioButton($model, 'gender', array('value' => '1', 'uncheckValue' => null, "id" => "ml")); ?>
                                                <label for="ml" class="radio-inline"><span></span>Male</label>
                                                <?php echo $form->radioButton($model, 'gender', array('value' => '2', 'uncheckValue' => null, 'id' => 'fl')); ?>
                                                <label for="fl" class="radio-inline"><span></span>Female</label>
                                            </div>
                                            <span style="display:none;"><?php echo $form->error($model, 'gender'); ?></span>
                                        </div>
                                        <div class="form-group">
                                            <label for="userName" class="col-sm-3 control-label">Primary language</label>
                                            <div class="col-sm-9">
                                                <?php
                                                echo $form->dropDownList($model, 'language_id', $languages, array('empty'=>'Select','class' => 'form-control acc-select', 'tabindex' => '1'));
                                                ?>
                                            </div>
                                            <span style="display:none;"><?php echo $form->error($model, 'language_id'); ?></span>
                                        </div>
                                        <div class="form-group">
                                            <label for="userName" class="col-sm-3 control-label">Sound effects </label>
                                            <div class="col-sm-9">
                                                <div class="btn-group on-off">
                                                    <?php echo $form->radioButton($model, 'sound_effect', array('value' => '1', 'uncheckValue' => null, "id" => "on")); ?>
                                                    <label for="on" class="radio-inline">on</label>
                                                    <?php echo $form->radioButton($model, 'sound_effect', array('value' => '0', 'uncheckValue' => null, "id" => "off")); ?>
                                                    <label for="off" class="radio-inline">off</label>
                                                </div>
                                                <span style="display:none;"><?php echo $form->error($model, 'sound_effect'); ?></span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="userName" class="col-sm-3 control-label">Microphone & speaker</label>
                                            <div class="col-sm-9">
                                                <div class="btn-group on-off">
                                                    <?php echo $form->radioButton($model, 'microphone', array('value' => '1', 'uncheckValue' => null, "id" => "on2")); ?>
                                                    <label for="on2" class="radio-inline">on</label>
                                                    <?php echo $form->radioButton($model, 'microphone', array('value' => '0', 'uncheckValue' => null, "id" => "off2")); ?>
                                                    <label for="off2" class="radio-inline">off</label>
                                                </div> 
                                                <span style="display:none;"><?php echo $form->error($model, 'microphone'); ?></span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="chnpass" class="col-sm-3 control-label"> Change password </label>
                                            <div class="col-sm-9">
                                                <?php echo $form->passwordField($model, 'password', array("class" => "form-control", "id" => "chnpass", "value" => "")); ?>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="" class="col-sm-3 control-label"> Social accounts </label>
                                            <div class="col-sm-9">
                                                <div class="input-group">
                                                    <span class="input-group-addon">
                                                        <i class="face-gray"></i>
                                                    </span>
                                                    <?php echo $form->textField($model, 'facebook_url', array("class" => "form-control")); ?>
                                                    <span style="display:none;"><?php echo $form->error($model, 'facebook_url'); ?></span>
                                                </div>
                                                <div class="input-group">
                                                    <span class="input-group-addon">
                                                        <i class="twit-gray"></i>
                                                    </span>
                                                    <?php echo $form->textField($model, 'twitter_url', array("class" => "form-control")); ?>
                                                    <span style="display:none;"><?php echo $form->error($model, 'twitter_url'); ?></span>
                                                </div>
                                                <div class="input-group">
                                                    <span class="input-group-addon">
                                                        <i class="gplus-gray"></i>
                                                    </span>
                                                    <?php echo $form->textField($model, 'gplus_url', array("class" => "form-control")); ?>
                                                    <span style="display:none;"><?php echo $form->error($model, 'gplus_url'); ?></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-offset-3 col-sm-10">
                                                <button type="submit" class="btn-submit">Save</button>
                                            </div>
                                        </div>
                                        <?php $this->endWidget(); ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="myLessons">
                            <div class="my-lession">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <ul class="nav nav-pills nav-stacked" role="tablist">
                                            <li class="active"><a href="#lessons" role="tab" data-toggle="tab">Lessons</a></li>
                                            <li><a href="#achievments" role="tab" data-toggle="tab">Achievments</a></li>
                                            <li><a href="#progress" role="tab" data-toggle="tab">Progress</a></li>
                                        </ul><!-- Nav tabs -->
                                    </div>
                                    <div class="col-sm-9">
                                        <!-- Tab panes -->
                                        <div class="tab-content">
                                            <div class="tab-pane fade" id="achievments">
                                                <div class="achiv-list">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <div class="author-les">
                                                                <div class="author-img">
                                                                    <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                                </div>
                                                                <h3>krish Dey</h3>
                                                            </div>                                    
                                                        </div>
                                                        <div class="col-sm-10">
                                                            <h2 class="auth-achiv">Achieved <span class="span-bl">50xp</span> for completing stage 2 of <span class="span-or">German</span> language</h2>
                                                            <span class="my-ldate">Sep 8, 2014 18:06</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="achiv-list">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <div class="author-les">
                                                                <div class="author-img">
                                                                    <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                                </div>
                                                                <h3>krish Dey</h3>
                                                            </div>                                    
                                                        </div>
                                                        <div class="col-sm-10">
                                                            <h2 class="auth-achiv">Achieved <span class="span-bl">40xp</span> for completing stage 2 of <span class="span-or">French </span> language</h2>
                                                            <span class="my-ldate">Sep 8, 2014 18:06</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="achiv-list">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <div class="author-les">
                                                                <div class="author-img">
                                                                    <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                                </div>
                                                                <h3>krish Dey</h3>
                                                            </div>                                    
                                                        </div>
                                                        <div class="col-sm-10">
                                                            <h2 class="auth-achiv">Achieved <span class="span-bl">50xp</span> for completing stage 2 of <span class="span-or">Spanish </span> language</h2>
                                                            <span class="my-ldate">Sep 8, 2014 18:06</span>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div class="tab-pane fade" id="progress">
                                                <div class="achiv-list">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <div class="author-les">
                                                                <div class="author-img">
                                                                    <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                                </div>
                                                                <h3>krish Dey</h3>
                                                            </div>                                    
                                                        </div>
                                                        <div class="col-sm-8">
                                                            <h2 class="auth-achiv">Completed stage 2 of <span class="span-or">German</span> language</h2>
                                                            <span class="my-ldate">Sep 8, 2014 18:06</span>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <div class="button_group_box">
                                                                <a href="" class="btn btn-wht">View Progress</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="achiv-list">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <div class="author-les">
                                                                <div class="author-img">
                                                                    <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                                </div>
                                                                <h3>krish Dey</h3>
                                                            </div>                                    
                                                        </div>
                                                        <div class="col-sm-8">
                                                            <h2 class="auth-achiv">Completed stage 2 of <span class="span-or">German</span> language</h2>
                                                            <span class="my-ldate">Sep 8, 2014 18:06</span>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <div class="button_group_box">
                                                                <a href="" class="btn btn-wht">View Progress</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="achiv-list">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <div class="author-les">
                                                                <div class="author-img">
                                                                    <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                                </div>
                                                                <h3>krish Dey</h3>
                                                            </div>                                    
                                                        </div>
                                                        <div class="col-sm-8">
                                                            <h2 class="auth-achiv">Completed stage 2 of <span class="span-or">French</span> language</h2>
                                                            <span class="my-ldate">Sep 8, 2014 18:06</span>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <div class="button_group_box">
                                                                <a href="" class="btn btn-wht">View Progress</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="achiv-list">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <div class="author-les">
                                                                <div class="author-img">
                                                                    <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                                </div>
                                                                <h3>krish Dey</h3>
                                                            </div>                                    
                                                        </div>
                                                        <div class="col-sm-8">
                                                            <h2 class="auth-achiv">Completed stage 3 of <span class="span-or">Portuguese </span> language</h2>
                                                            <span class="my-ldate">Sep 8, 2014 18:06</span>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <div class="button_group_box">
                                                                <a href="" class="btn btn-wht">View Progress</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>                              
                                            <div class="tab-pane fade in active" id="lessons">
                                                <?php
                                                foreach($lessons as $key=>$val){
                                                ?>
                                                <div class="achiv-list">
                                                    <div class="row">
                                                        <div class="col-sm-10">
                                                            <h3><a href="javascript:void(0)" class=""><?php echo $val->title; ?></a></h3>
                                                            <div class="row">
                                                                <div class="col-md-6 corct-pdate"><?php echo date("M d, Y h:i A",strtotime($val->create_at)); ?></div>
                                                                <!--<div class="col-md-6 corct-pdate">Sep 1, 2014 05:53</div>-->
                                                                <div class="col-md-6 text-right">
                                                                    <ul class="journal_status pull-right">
                                                                        <li class="studying"><a class="edit_lesson" data-lessonid="<?php echo $val->id; ?>" href='javascript:void(0)'>Edit</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <?php
                                                }
                                                ?>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="corrections">
                            <div class="my-lession corrections-tab">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <ul class="nav nav-pills nav-stacked" role="tablist">
                                            <li class="active"><a href="#entrWritten" role="tab" data-toggle="tab">Entries Written</a></li>
                                            <li><a href="#corctMade" role="tab" data-toggle="tab">Corrections made</a></li>
                                            <li><a href="#corctReciv" role="tab" data-toggle="tab">Corrections received</a></li>
                                            <li><a href="#visitors" role="tab" data-toggle="tab">Visitors</a></li>                             
                                        </ul><!-- Nav tabs -->
                                    </div>
                                    <div class="col-sm-9">
                                        <!-- Tab panes -->
                                        <div class="tab-content">
                                            <div class="tab-pane fade in active" id="entrWritten">

                                            </div>
                                            <div class="tab-pane fade" id="corctMade">
                                                <div class="achiv-list">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <div class="author-les">
                                                                <div class="author-img">
                                                                    <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                                </div>
                                                                <h3>krish Dey</h3>
                                                            </div>                                    
                                                        </div>
                                                        <div class="col-sm-10">
                                                            <span class="ent-auth">Krish Dey</span>
                                                            <h3><a href="#" class="">Hello!! Thank you very much for inviting me.</a></h3>
                                                            <p>Today is Chuushuu no Meigetsu. August 15th of the lunar calendar is called Chushu. Today, we can see the most beautiful moon in the year....</p>
                                                            <div class="row">
                                                                <div class="col-md-6 corct-pdate">Sep 1, 2014 05:53</div>
                                                                <div class="col-md-6 text-right">
                                                                    <ul class="journal_status pull-right">
                                                                        <li class="corrections_num active-bt">3</li>
                                                                        <li class="studying">English</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="achiv-list">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <div class="author-les">
                                                                <div class="author-img">
                                                                    <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                                </div>
                                                                <h3>krish Dey</h3>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-10">
                                                            <span class="ent-auth">Krish Dey</span>
                                                            <h3><a href="#" class="">What are the differences among talk, tell, say, and speak?</a></h3>
                                                            <p>I read a sentence as follows: I study English to speak fluently. I thought it was correct. A native English speaker changed it...</p>
                                                            <div class="row">
                                                                <div class="col-md-6 corct-pdate">Sep 1, 2014 05:53</div>
                                                                <div class="col-md-6 text-right">
                                                                    <ul class="journal_status pull-right">
                                                                        <li class="corrections_num active-bt">3</li>
                                                                        <li class="studying">English</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="achiv-list">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <div class="author-les">
                                                                <div class="author-img">
                                                                    <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                                </div>
                                                                <h3>krish Dey</h3>
                                                            </div>                                    
                                                        </div>
                                                        <div class="col-sm-10">
                                                            <span class="ent-auth">Krish Dey</span>
                                                            <h3><a href="#" class="">Today I had a phone interview, I think it went well. </a></h3>
                                                            <p>My iPhone was stolen yesterday at Siam square, Bangkok. It was partly my fau...</p>
                                                            <div class="row">
                                                                <div class="col-md-6 corct-pdate">Sep 1, 2014 05:53</div>
                                                                <div class="col-md-6 text-right">
                                                                    <ul class="journal_status pull-right">
                                                                        <li class="corrections_num active-bt">3</li>
                                                                        <li class="studying">English</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="achiv-list">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <div class="author-les">
                                                                <div class="author-img">
                                                                    <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                                </div>
                                                                <h3>krish Dey</h3>
                                                            </div>                                    
                                                        </div>
                                                        <div class="col-sm-10">
                                                            <span class="ent-auth">Krish Dey</span>
                                                            <h3><a href="#" class="">I will start study english Tonight. </a></h3>
                                                            <p>"the most possible one or more than one results" i want to express...</p>
                                                            <div class="row">
                                                                <div class="col-md-6 corct-pdate">Sep 1, 2014 05:53</div>
                                                                <div class="col-md-6 text-right">
                                                                    <ul class="journal_status pull-right">
                                                                        <li class="corrections_num active-bt">3</li>
                                                                        <li class="studying">English</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="corctReciv">
                                                
                                            </div>
                                            <div class="tab-pane fade" id="visitors">
                                                
                                            </div>
                                        </div>
                                    </div> 
                                </div>                              
                            </div>
                        </div>
                        <div class="tab-pane fade" id="membership">
                            <div class="membership-tab">
                                <h2 class="crnt-mship">You are now Basic member.</h2>
                                <div class="upg-mship">Upgrade your membership to <span>Premium Members</span> for $9/month or $60/year. </div>
                                <div class="upg-mplan">
                                    <a href="#">Click Here</a> To get more storage of <span>+2GB</span> for $9/month or $99/year
                                </div>
                                <div class="upg-mplan">
                                    <a href="#">Click Here</a> To get more storage of <span>+3GB</span> for $12/month or $129/year
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="notification">
                            <div class="notifi-tab">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="notifi-tab-list">
                                            <div class="col-sm-3">
                                                <div class="author-les">
                                                    <div class="author-img">
                                                        <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                    </div>
                                                    <h3>krish Dey</h3>
                                                </div>                                    
                                            </div>
                                            <div class="col-sm-9">
                                                <h2>Liked your correction</h2>
                                            </div>                              
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="notifi-tab-list">
                                            <div class="col-sm-3">
                                                <div class="author-les">
                                                    <div class="author-img">
                                                        <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                    </div>
                                                    <h3>Admin</h3>
                                                </div>                                    
                                            </div>
                                            <div class="col-sm-9">
                                                <h2>New message from admin</h2>
                                            </div>                              
                                        </div>
                                    </div>
                                </div>                        
                            </div>
                            <div class="notifi-tab">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="notifi-tab-list">
                                            <div class="col-sm-3">
                                                <div class="author-les">
                                                    <div class="author-img">
                                                        <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                    </div>
                                                    <h3>Alan Boss</h3>
                                                </div>                                    
                                            </div>
                                            <div class="col-sm-9">
                                                <h2>Liked your correction</h2>
                                            </div>                              
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="notifi-tab-list">
                                            <div class="col-sm-3">
                                                <div class="author-les">
                                                    <div class="author-img">
                                                        <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                    </div>
                                                    <h3>krish Dey</h3>
                                                </div>                                    
                                            </div>
                                            <div class="col-sm-9">
                                                <h2>Liked your correction</h2>
                                            </div>                              
                                        </div>
                                    </div>
                                </div>                        
                            </div>
                        </div>
                        <div class="tab-pane fade" id="friends">
                            <div class="my-lession">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <ul class="nav nav-pills nav-stacked" role="tablist">
                                            <li class="active"><a href="#following" role="tab" data-toggle="tab">Following: 14</a></li>
                                            <li><a href="#followers" role="tab" data-toggle="tab">Followers: 11</a></li>                              
                                        </ul><!-- Nav tabs -->
                                    </div>
                                    <div class="col-sm-9">
                                        <!-- Tab panes -->
                                        <div class="tab-content">
                                            <div class="tab-pane fade in active" id="following">
                                                <ul class="my-follow">
                                                    <li class="">
                                                        <div class="Mflw-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></div>
                                                        <h3><a href="#">Uzulla</a></h3>
                                                    </li>
                                                    <li class="">
                                                        <div class="Mflw-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less03.jpg" alt=""></div>
                                                        <h3><a href="#">Mamico</a></h3>
                                                    </li>
                                                    <li class="">
                                                        <div class="Mflw-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/blog-img.jpg" alt=""></div>
                                                        <h3><a href="#">Maria</a></h3>
                                                    </li>
                                                    <li class="">
                                                        <div class="Mflw-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></div>
                                                        <h3><a href="#">Avion1899</a></h3>
                                                    </li>
                                                    <li class="">
                                                        <div class="Mflw-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/blog-img.jpg" alt=""></div>
                                                        <h3><a href="#">Uzulla</a></h3>
                                                    </li>
                                                    <li class="">
                                                        <div class="Mflw-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less03.jpg" alt=""></div>
                                                        <h3><a href="#">Mamico</a></h3>
                                                    </li>
                                                    <li class="">
                                                        <div class="Mflw-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less03.jpg" alt=""></div>
                                                        <h3><a href="#">Mamico</a></h3>
                                                    </li>
                                                    <li class="">
                                                        <div class="Mflw-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/blog-img.jpg" alt=""></div>
                                                        <h3><a href="#">Maria</a></h3>
                                                    </li>
                                                    <li class="">
                                                        <div class="Mflw-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></div>
                                                        <h3><a href="#">Avion1899</a></h3>
                                                    </li>
                                                    <li class="">
                                                        <div class="Mflw-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/blog-img.jpg" alt=""></div>
                                                        <h3><a href="#">Uzulla</a></h3>
                                                    </li>
                                                    <li class="more">
                                                        <a href="#">
                                                            <div class="Mflw-img">+25</div>
                                                            <h3>Following</h3>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="tab-pane fade" id="followers">
                                                <ul class="my-follow">
                                                    <li class="">
                                                        <div class="Mflw-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></div>
                                                        <h3><a href="#">Uzulla</a></h3>
                                                    </li>
                                                    <li class="">
                                                        <div class="Mflw-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less03.jpg" alt=""></div>
                                                        <h3><a href="#">Mamico</a></h3>
                                                    </li>
                                                    <li class="">
                                                        <div class="Mflw-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/blog-img.jpg" alt=""></div>
                                                        <h3><a href="#">Maria</a></h3>
                                                    </li>
                                                    <li class="">
                                                        <div class="Mflw-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></div>
                                                        <h3><a href="#">Avion1899</a></h3>
                                                    </li>
                                                    <li class="">
                                                        <div class="Mflw-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/blog-img.jpg" alt=""></div>
                                                        <h3><a href="#">Uzulla</a></h3>
                                                    </li>
                                                    <li class="">
                                                        <div class="Mflw-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less03.jpg" alt=""></div>
                                                        <h3><a href="#">Mamico</a></h3>
                                                    </li>
                                                    <li class="">
                                                        <div class="Mflw-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less03.jpg" alt=""></div>
                                                        <h3><a href="#">Mamico</a></h3>
                                                    </li>
                                                    <li class="">
                                                        <div class="Mflw-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/blog-img.jpg" alt=""></div>
                                                        <h3><a href="#">Maria</a></h3>
                                                    </li>
                                                    <li class="">
                                                        <div class="Mflw-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></div>
                                                        <h3><a href="#">Avion1899</a></h3>
                                                    </li>
                                                    <li class="">
                                                        <div class="Mflw-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/blog-img.jpg" alt=""></div>
                                                        <h3><a href="#">Uzulla</a></h3>
                                                    </li>
                                                    <li class="">
                                                        <div class="Mflw-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less03.jpg" alt=""></div>
                                                        <h3><a href="#">Mamico</a></h3>
                                                    </li>
                                                    <li class="more">
                                                        <a href="#">
                                                            <div class="Mflw-img">+19</div>
                                                            <h3>Followers</h3>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>                              
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="myPage">
                            <div class="my-lession corrections-tab myPage-tab">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <ul class="nav nav-pills nav-stacked" role="tablist">
                                            <li class="active"><a href="#mymemo" role="tab" data-toggle="tab">Memo</a></li>
                                            <li><a href="#myjournal" role="tab" data-toggle="tab">Journal</a></li>
                                            <li><a href="#myvideo" role="tab" data-toggle="tab">Video</a></li>                           
                                        </ul><!-- Nav tabs -->
                                    </div>
                                    <div class="col-sm-9">
                                        <!-- Tab panes -->
                                        <div class="tab-content">
                                            <div class="tab-pane fade in active" id="mymemo">
                                                <div class="achiv-list">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <div class="author-les">
                                                                <div class="author-img">
                                                                    <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                                </div>
                                                                <h3>krish Dey</h3>
                                                            </div>                                    
                                                        </div>
                                                        <div class="col-sm-10">
                                                            <span class="ent-auth">Krish Dey</span>
                                                            <h3><a href="#" class="">Hello!! Thank you very much for inviting me.</a></h3>
                                                            <p>Today is Chuushuu no Meigetsu. August 15th of the lunar calendar is called Chushu. Today, we can see the most beautiful moon in the year....</p>
                                                            <div class="row">
                                                                <div class="col-md-6 corct-pdate">Sep 1, 2014 05:53</div>
                                                                <div class="col-md-6 text-right">
                                                                    <ul class="journal_status pull-right">
                                                                        <li class="corrections_num active-bt">3</li>
                                                                        <li class="studying">English</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="achiv-list">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <div class="author-les">
                                                                <div class="author-img">
                                                                    <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                                </div>
                                                                <h3>krish Dey</h3>
                                                            </div>                                    
                                                        </div>
                                                        <div class="col-sm-10">
                                                            <span class="ent-auth">Krish Dey</span>
                                                            <h3><a href="#" class="">What are the differences among talk, tell, say, and speak?</a></h3>
                                                            <p>I read a sentence as follows: I study English to speak fluently. I thought it was correct. A native English speaker changed it...</p>
                                                            <div class="row">
                                                                <div class="col-md-6 corct-pdate">Sep 1, 2014 05:53</div>
                                                                <div class="col-md-6 text-right">
                                                                    <ul class="journal_status pull-right">
                                                                        <li class="corrections_num active-bt">3</li>
                                                                        <li class="studying">English</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="achiv-list">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <div class="author-les">
                                                                <div class="author-img">
                                                                    <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                                </div>
                                                                <h3>krish Dey</h3>
                                                            </div>                                    
                                                        </div>
                                                        <div class="col-sm-10">
                                                            <span class="ent-auth">Krish Dey</span>
                                                            <h3><a href="#" class="">Today I had a phone interview, I think it went well. </a></h3>
                                                            <p>My iPhone was stolen yesterday at Siam square, Bangkok. It was partly my fau...</p>
                                                            <div class="row">
                                                                <div class="col-md-6 corct-pdate">Sep 1, 2014 05:53</div>
                                                                <div class="col-md-6 text-right">
                                                                    <ul class="journal_status pull-right">
                                                                        <li class="corrections_num active-bt">3</li>
                                                                        <li class="studying">English</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="achiv-list">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <div class="author-les">
                                                                <div class="author-img">
                                                                    <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                                </div>
                                                                <h3>krish Dey</h3>
                                                            </div>                                    
                                                        </div>
                                                        <div class="col-sm-10">
                                                            <span class="ent-auth">Krish Dey</span>
                                                            <h3><a href="#" class="">I will start study english Tonight. </a></h3>
                                                            <p>"the most possible one or more than one results" i want to express...</p>
                                                            <div class="row">
                                                                <div class="col-md-6 corct-pdate">Sep 1, 2014 05:53</div>
                                                                <div class="col-md-6 text-right">
                                                                    <ul class="journal_status pull-right">
                                                                        <li class="corrections_num active-bt">3</li>
                                                                        <li class="studying">English</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="myjournal">
                                                <div class="achiv-list">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <div class="author-les">
                                                                <div class="author-img">
                                                                    <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                                </div>
                                                                <h3>krish Dey</h3>
                                                            </div>                                    
                                                        </div>
                                                        <div class="col-sm-10">
                                                            <span class="ent-auth">Krish Dey</span>
                                                            <h3><a href="#" class="">Hello!! Thank you very much for inviting me.</a></h3>
                                                            <p>Today is Chuushuu no Meigetsu. August 15th of the lunar calendar is called Chushu. Today, we can see the most beautiful moon in the year....</p>
                                                            <div class="row">
                                                                <div class="col-md-6 corct-pdate">Sep 1, 2014 05:53</div>
                                                                <div class="col-md-6 text-right">
                                                                    <ul class="journal_status pull-right">
                                                                        <li class="corrections_num active-bt">3</li>
                                                                        <li class="studying">English</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="achiv-list">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <div class="author-les">
                                                                <div class="author-img">
                                                                    <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                                </div>
                                                                <h3>krish Dey</h3>
                                                            </div>                                    
                                                        </div>
                                                        <div class="col-sm-10">
                                                            <span class="ent-auth">Krish Dey</span>
                                                            <h3><a href="#" class="">What are the differences among talk, tell, say, and speak?</a></h3>
                                                            <p>I read a sentence as follows: I study English to speak fluently. I thought it was correct. A native English speaker changed it...</p>
                                                            <div class="row">
                                                                <div class="col-md-6 corct-pdate">Sep 1, 2014 05:53</div>
                                                                <div class="col-md-6 text-right">
                                                                    <ul class="journal_status pull-right">
                                                                        <li class="corrections_num active-bt">3</li>
                                                                        <li class="studying">English</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="achiv-list">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <div class="author-les">
                                                                <div class="author-img">
                                                                    <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                                </div>
                                                                <h3>krish Dey</h3>
                                                            </div>                                    
                                                        </div>
                                                        <div class="col-sm-10">
                                                            <span class="ent-auth">Krish Dey</span>
                                                            <h3><a href="#" class="">Today I had a phone interview, I think it went well. </a></h3>
                                                            <p>My iPhone was stolen yesterday at Siam square, Bangkok. It was partly my fau...</p>
                                                            <div class="row">
                                                                <div class="col-md-6 corct-pdate">Sep 1, 2014 05:53</div>
                                                                <div class="col-md-6 text-right">
                                                                    <ul class="journal_status pull-right">
                                                                        <li class="corrections_num active-bt">3</li>
                                                                        <li class="studying">English</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="achiv-list">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <div class="author-les">
                                                                <div class="author-img">
                                                                    <a href="#"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                                </div>
                                                                <h3>krish Dey</h3>
                                                            </div>                                    
                                                        </div>
                                                        <div class="col-sm-10">
                                                            <span class="ent-auth">Krish Dey</span>
                                                            <h3><a href="#" class="">I will start study english Tonight. </a></h3>
                                                            <p>"the most possible one or more than one results" i want to express...</p>
                                                            <div class="row">
                                                                <div class="col-md-6 corct-pdate">Sep 1, 2014 05:53</div>
                                                                <div class="col-md-6 text-right">
                                                                    <ul class="journal_status pull-right">
                                                                        <li class="corrections_num active-bt">3</li>
                                                                        <li class="studying">English</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="myvideo">
                                                <div class="achiv-list myvideo-list">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <div class="author-les">
                                                                <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                            </div>                                    
                                                        </div>
                                                        <div class="col-sm-10">                                     
                                                            <h2>i'm eager to learn more and more languages and</h2>
                                                            <p>Today is Chuushuu no Meigetsu. August 15th of the lunar calendar is called Chushu. Today, we can see the most beautiful moon in the year....</p>
                                                            <div class="row">
                                                                <div class="col-md-6 corct-pdate">Sep 1, 2014 05:53</div>
                                                                <div class="col-md-6 text-right">
                                                                    <ul class="journal_status pull-right">
                                                                        <li class="corrections_num active-bt">3</li>
                                                                        <li class="studying">English</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="achiv-list myvideo-list">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <div class="author-les">
                                                                <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                            </div>                                    
                                                        </div>
                                                        <div class="col-sm-10">                                     
                                                            <h2>i'm eager to learn more and more languages and</h2>
                                                            <p>Today is Chuushuu no Meigetsu. August 15th of the lunar calendar is called Chushu. Today, we can see the most beautiful moon in the year....</p>
                                                            <div class="row">
                                                                <div class="col-md-6 corct-pdate">Sep 1, 2014 05:53</div>
                                                                <div class="col-md-6 text-right">
                                                                    <ul class="journal_status pull-right">
                                                                        <li class="corrections_num active-bt">3</li>
                                                                        <li class="studying">English</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="achiv-list myvideo-list">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <div class="author-les">
                                                                <a href=""><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></a>
                                                            </div>                                    
                                                        </div>
                                                        <div class="col-sm-10">                                     
                                                            <h2>i'm eager to learn more and more languages and</h2>
                                                            <p>Today is Chuushuu no Meigetsu. August 15th of the lunar calendar is called Chushu. Today, we can see the most beautiful moon in the year....</p>
                                                            <div class="row">
                                                                <div class="col-md-6 corct-pdate">Sep 1, 2014 05:53</div>
                                                                <div class="col-md-6 text-right">
                                                                    <ul class="journal_status pull-right">
                                                                        <li class="corrections_num active-bt">3</li>
                                                                        <li class="studying">English</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                
                                            </div>                            
                                        </div>
                                    </div> 
                                </div>                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>                               
        </div>
    </div>
</div>
<!--<div>
    <center>
                                    <img src="<?php // echo Yii::app()->request->getBaseUrl(true);  ?>/uploads/images/profile_pic/<?php echo $this->profile_pic; ?>" />
        <div id="preview-pane">
            <div class="preview-container">
                <img src="<?php // echo Yii::app()->request->getBaseUrl(true);  ?>/uploads/images/profile_pic/<?php echo $this->profile_pic; ?>" class="jcrop-preview" alt="Preview" />
            </div>
        </div>
        <div id="image_chooser">
            <img src="<?php // echo Yii::app()->request->getBaseUrl(true);  ?>/uploads/images/profile_pic/<?php echo $this->profile_pic; ?>" id="target" alt="[Jcrop Example]" />
        </div>
    </center>
</div>-->
<script type="text/javascript">
    $(document).ready(function() {
        $("ul#learn-tabs li").click(function(e) {
            if (!$(this).hasClass("active")) {
                var tabNum = $(this).index();
                var nthChild = tabNum + 1;
                $("ul#learn-tabs li.active").removeClass("active");
                $(this).addClass("active");
                $("ul#learn-tab li.active").removeClass("active");
                $("ul#learn-tab li:nth-child(" + nthChild + ")").addClass("active");
            }
        });
        $("ul#frnd-tabs li").click(function(e) {
            if (!$(this).hasClass("active")) {
                var tabNum = $(this).index();
                var nthChild = tabNum + 1;
                $("ul#frnd-tabs li.active").removeClass("active");
                $(this).addClass("active");
                $("ul#frnd-tab li.active").removeClass("active");
                $("ul#frnd-tab li:nth-child(" + nthChild + ")").addClass("active");
            }
        });
    });
</script>
<?php
$this->loadJs(array("custom/correction.js","custom/editlesson.js"));
?>