<?php
$profile_pic = $user_details->profile_image;
$profile_pic = ($profile_pic == "") ? $this->default_profile_pic : $profile_pic;
?>
<div class="learner_public_profile">
    <div class="container">
        <div class="learn_pp">
            <div class="row">
                <div class="col-md-8">
                    <div class="learner_profile row">
                        <div class="col-md-3 learn_pro_img">
                            <img src="<?php echo $this->profile_image_path; ?>/<?php echo $profile_pic; ?>" alt="">
                        </div>
                        <div class="col-md-9 learn_pro_desc">
                            <h3><?php echo $user_details->full_name; ?></h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <?php
                            if ($user_details->id != $this->user_id) {
                                if(isset($follow_status)){
                                ?>
                                <a href="#" id="follow_unfollow" data-userid="<?php echo $user_details->id; ?>" class="pull-right lear-follow">
                                    <?php
                                    if($follow_status=="F"){
                                    echo "Unfollow";
                                    }else{
                                    echo "Follow";
                                    }
                                    ?>
                                </a>
                                <?php
                                }
                            }
                            ?>
                        </div>
                    </div>
                    <ul class="timeline">
                        <li>
                            <div class="timeline-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></div>
                            <div class="timeline-badge"></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">Anan Johnson <span class="text-muted">2 hours ago</span></h4>              
                                </div>
                                <div class="timeline-body">
                                    <p>leveled up in French skill</p>
                                </div>                                
                            </div>
                            <div class="timeline-like">
                                <a href="#" class="active">Like</a> | 
                                <a href="#" class="">Comments</a>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></div>
                            <div class="timeline-badge"></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">Anan Johnson <span class="text-muted">2 hours ago</span></h4>              
                                </div>
                                <div class="timeline-body">
                                    <p>Started following XavierMTL and acarbelaez</p>
                                </div>                                
                            </div>
                            <div class="timeline-like">
                                <a href="#" class="active">Like</a> | 
                                <a href="#" class="">Comments</a>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></div>
                            <div class="timeline-badge default"></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">Anan Johnson <span class="text-muted">2 hours ago</span></h4>              
                                </div>
                                <div class="timeline-body">
                                    <p>leveled up in French skill</p>
                                </div>                                
                            </div>
                            <div class="timeline-like">
                                <a href="#" class="active">Like</a> | 
                                <a href="#" class="">Comments</a>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></div>
                            <div class="timeline-badge default"></div>                              
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">Anan Johnson <span class="text-muted">2 hours ago</span></h4>              
                                </div>
                                <div class="timeline-body">
                                    <p>leveled up in French skill</p>
                                </div>                                
                            </div>
                            <div class="timeline-like">
                                <a href="#" class="active">Like</a> | 
                                <a href="#" class="">Comments</a>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></div>
                            <div class="timeline-badge level-badge-micro fr">                                
                                <span class="inner">4</span>
                                <span class="pennant"></span>                                
                            </div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">Anan Johnson <span class="text-muted">2 hours ago</span></h4>              
                                </div>
                                <div class="timeline-body">
                                    <p>Commented on Te ayudo en espaÃ±ol :)</p>
                                </div>                                
                            </div>
                            <div class="timeline-like">
                                <a href="#" class="active">Like</a> | 
                                <a href="#" class="">Comments</a>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></div>
                            <div class="timeline-badge"></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">Anan Johnson <span class="text-muted">2 hours ago</span></h4>              
                                </div>
                                <div class="timeline-body">
                                    <p>leveled up in French skill</p>
                                </div>                                
                            </div>
                            <div class="timeline-like">
                                <a href="#" class="active">Like</a> | 
                                <a href="#" class="">Comments</a>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></div>
                            <div class="timeline-badge default"></div>                              
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">Anan Johnson <span class="text-muted">2 hours ago</span></h4>              
                                </div>
                                <div class="timeline-body">
                                    <p>leveled up in French skill</p>
                                </div>                                
                            </div>
                            <div class="timeline-like">
                                <a href="#" class="active">Like</a> | 
                                <a href="#" class="">Comments</a>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></div>
                            <div class="timeline-badge level-badge-micro fr">                                
                                <span class="inner">4</span>
                                <span class="pennant"></span>                                
                            </div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">Anan Johnson <span class="text-muted">2 hours ago</span></h4>              
                                </div>
                                <div class="timeline-body">
                                    <p>Commented on Te ayudo en espaÃ±ol :)</p>
                                </div>                                
                            </div>
                            <div class="timeline-like">
                                <a href="#" class="active">Like</a> | 
                                <a href="#" class="">Comments</a>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></div>
                            <div class="timeline-badge default"></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">Anan Johnson <span class="text-muted">2 hours ago</span></h4>              
                                </div>
                                <div class="timeline-body">
                                    <p>leveled up in French skill</p>
                                </div>                                
                            </div>
                            <div class="timeline-like">
                                <a href="#" class="active">Like</a> | 
                                <a href="#" class="">Comments</a>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-img"><img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/ch-less01.jpg" alt=""></div>
                            <div class="timeline-badge default"></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">Anan Johnson <span class="text-muted">2 hours ago</span></h4>              
                                </div>
                                <div class="timeline-body">
                                    <p>leveled up in French skill</p>
                                </div>                                
                            </div>
                            <div class="timeline-like">
                                <a href="#" class="active">Like</a> | 
                                <a href="#" class="">Comments</a>
                            </div>
                        </li>
                        <div class="clear"></div>
                        <div class="pull-right"><a href="" class="blk-user">Block User</a></div>
                        <div class="clear"></div>
                    </ul>

                </div>
                <div class="col-md-4">
                    <div class="achiev">
                        <h2>Achievements</h2>
                        <div class="streak">STREAK <span class="streak-icon">6 Days</span></div>
                        <div class="level-badge">
                            <h3>language</h3>
                            <ul class="level-badge-grid">
                                <li>
                                    <span class="level-badge-small fr">
                                        <span class="inner">4</span>
                                        <span class="pennant"></span>
                                    </span>
                                </li>
                                <li>
                                    <span class="level-badge-small en">
                                        <span class="inner">4</span>
                                        <span class="pennant"></span>
                                    </span>
                                </li>
                                <li>
                                    <span class="level-badge-small de">
                                        <span class="inner">1</span>
                                        <span class="pennant"></span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="learner-tabBox">
                        <ul id="learn-tabs">
                            <li class="active">Correction Post </li>
                            <li>Correction made</li>
                        </ul>
                        <ul id="learn-tab">
                            <li class="active">
                                <div class="tab-cont-list">
                                    <?php
                                    foreach ($correction_post as $key => $val) {
                                        $title = Yii::app()->cglobal->get_lesson_title($val->title, $val->intro_text);
                                        ?>
                                        <a class="profile_list_a" href="<?php echo $this->createUrl("correction-details/" . $val->display_id); ?>"><?php echo $title; ?></a>
                                        <?php
                                    }
                                    ?>
                                </div>
                            </li>
                            <li>
                                <div class="tab-cont-list">
                                    <?php
                                    foreach ($correction_made as $key => $val) {
                                        $title = Yii::app()->cglobal->get_lesson_title($val['correction']->title, $val['correction']->intro_text);
                                        ?>
                                        <a class="profile_list_a" href="<?php echo $this->createUrl("correction-details/" . $val['correction']->display_id); ?>"><?php echo $title; ?></a>
                                        <?php
                                    }
                                    ?>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="learn-writ">
                        <?php
                        $total_corrections = Correction::model()->get_correction_counts($user_details->id);

                        $entries_written = $total_corrections['entries_written'];
                        $corrections_recieved = $total_corrections['corrections_recieved'];
                        $correction_made = $total_corrections['correction_made'];
                        ?>
                        <input type="hidden" name="current_user" id="current_user" value="<?php echo $user_details->id; ?>" />
                        <ul>
                            <li class="ent-profile" id="load_entries_written"><span><?php echo $entries_written; ?></span>Entries Written</li>
                            <li class="ent-profile" id="load_corrections_made"><span><?php echo $correction_made; ?></span>Corrections made</li>
                            <li class="ent-profile" id="load_corrections_recieved"><span><?php echo $corrections_recieved; ?></span>Corrections received</li>
                        </ul>
                    </div>
                    <section>
                        <h2>Latest Journals</h2>
                        <div class="sec-cont">
                            <!--                            <ul>
                                                            <li>
                                                                <h3>If you make a correction, you will get </h3>
                                                                <p>â€œThanks for bringing back the word list . I've got a few ideas.</p>
                                                                <a href="#" class="">https://www.learning.com</a>
                                                            </li>
                                                            <li>
                                                                <h3>If you make a correction, you will get </h3>
                                                                <p>â€œThanks for bringing back the word list . I've got a few ideas.</p>
                                                                <a href="#" class="">https://www.learning.com</a>
                                                            </li>
                                                            <li>
                                                                <h3>If you make a correction, you will get </h3>
                                                                <p>â€œThanks for bringing back the word list . I've got a few ideas.</p>
                                                                <a href="#" class="">https://www.learning.com</a>
                                                            </li>
                                                        </ul>-->
                        </div>
                    </section>
                    <section>
                        <h2>Input lessons</h2>
                        <div class="sec-cont inp-less">
                            <ul>
                                <?php
                                foreach ($lessons as $key => $val) {
                                    ?>
                                    <li>
                                        <span><?php echo ($key + 1); ?></span>
                                        <a href="javascript:void(0)" class=""><?php echo $val->title; ?></a>
                                    </li>
                                    <?php
                                }
                                ?>
                            </ul>
                        </div>
                    </section>
                    <div class=""><a href="#" class="mileage">Mileage</a></div>
                    <section>
                        <h2>Friends</h2>
                        <ul id="frnd-tabs">
                            <li class="active">Following: <?php echo $total_following; ?>  </li>
                            <li> Followers: <?php echo $total_followers; ?></li>
                        </ul>
                        <ul id="frnd-tab">
                            <li class="active">
                                <div class="tab-cont-list">
                                    <?php
                                    foreach ($all_following as $key => $val) {
                                        $profile_pic = $val['following']->profile_image;
                                        $profile_pic = ($profile_pic == "") ? $this->default_profile_pic : $profile_pic;
                                        ?>
                                        <span><a href="<?php echo $this->createUrl("profile/" . $val['following']->username); ?>"><img src="<?php echo $this->profile_image_path; ?>/<?php echo $profile_pic; ?>" alt=""></a></span>
                                        <?php
                                    }
                                    ?>
                                </div>
                            </li>
                            <li>
                                <div class="tab-cont-list">
                                   <?php
                                    foreach ($all_followers as $key => $val) {
                                        $profile_pic = $val['follower']->profile_image;
                                        $profile_pic = ($profile_pic == "") ? $this->default_profile_pic : $profile_pic;
                                        ?>
                                        <span><a href="<?php echo $this->createUrl("profile/" . $val['follower']->username); ?>"><img src="<?php echo $this->profile_image_path; ?>/<?php echo $profile_pic; ?>" alt=""></a></span>
                                        <?php
                                    }
                                    ?>
                                </div>
                            </li>
                        </ul>

                    </section>

                </div>
            </div>

        </div>
    </div>
</div>
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
$this->loadJs(array("custom/learner_profile.js"));
?>