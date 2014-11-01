<div class="stapes-wrap" id="start_as_wrapper" style="z-index: 9999; display:none;">
    <div class="create-stapes">
        <div class="container">
            <div class="steps-box">
                <div class="pop_step1" style="display: block;">
                    <div class="step-left">
                        <h2>Start As</h2>
                        <a href="javascript:void(0)" data-usertype="G" id="get_started_guide" class="build-lesson">A Guide</a>
                        &nbsp;
                        <a href="javascript:void(0)" data-usertype="L" id="get_started_learner" class="build-lesson">A Learner</a>
                    </div>
                    <div class="step-right">
                        <img src="http://appserver3/apps/lingapore/public/themes/frontend/assets/images/step-1.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- <form id="upload_form" action="" method="post" enctype="multipart/form-data">
    
</form> -->
<!--<div class="banner">
    <img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/banner.jpg" alt="">
    <div class="container">
        <div class="get-started"><a id="get_started" href="javascript:void(0)">Get Started</a></div>
    </div>
</div>-->

<div class="banner">
        <!-- <img src="images/banner-bg.jpg" alt=""> -->
    <div class="container">
        <div class="banner-graph">
            <ul>
                <li class=""><a href="#">Brasil</a></li>
                <li class=""><a href="#">Italia</a></li>
                <li class=""><a href="#">France</a></li>
                <li class=""><a href="#">Nederland</a></li>
                <li class=""><a href="#">ESPANA</a></li>
                <li class=""><a href="#">Duitsland</a></li>
            </ul>
            <div class="tool-one dropdown">
                <span class="dropdown-toggle" data-toggle="dropdown"></span>
                <div class="tip-tool dropdown-menu">
                    Hey it’s easy! Translate what you see and collect your score!
                </div>
            </div>
            <div class="tool-two dropdown">
                <span class="dropdown-toggle" data-toggle="dropdown"></span>
                <div class="tip-tool dropdown-menu">
                    Hey it’s easy! Translate what you see and collect your score!
                </div>
            </div>
            <div class="tool-three dropdown">
                <span class="dropdown-toggle" data-toggle="dropdown"></span>
                <div class="tip-tool dropdown-menu">
                    Hey it’s easy! Translate what you see and collect your score!
                </div>
            </div>
        </div>
        <div class="get-started"> 
            <?php
            if ($this->user_type_id < 4) {
                ?>
                <a id="get_started" href="javascript:void(0)">Get Started</a>
                <?php
            }
            ?>
        </div>
    </div>
</div>
<?php
//if (Yii::app()->user->hasState("user_type")) {
//    if ($user_type == "G") {
$this->renderPartial("/_build_lesson", array("stages" => $stages, "languages" => $languages));
//    }
//}
?>
<div class="gamificationt">
    <div class="container">
        <h1 class="text-center">It's education within every lesson</h1>
        <div class="col-lg-4 col-md-4 col-sm-4">
            <div class="education">
                <h2> <i class="glyphicon time-icon"></i> <?php
                    if (!empty($blocks['up-for-fun']->title)) {
                        echo $blocks['up-for-fun']->title;
                    }
                    ?></h2>
                <p><?php
                    if (!empty($blocks['up-for-fun']->content)) {
                        echo $blocks['up-for-fun']->content;
                    }
                    ?></p>
            </div>
            <div class="education">
                <h2> <i class="glyphicon plane-icon"></i> <?php
                    if (!empty($blocks['collect-mileage']->title)) {
                        echo $blocks['collect-mileage']->title;
                    }
                    ?></h2>
                <p><?php
                    if (!empty($blocks['collect-mileage']->content)) {
                        echo $blocks['collect-mileage']->content;
                    }
                    ?></p>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">
            <div class="owl-pic">
                <img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/owl-pic.jpg" alt="">
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">
            <div class="education">
                <h2><i class="glyphicon score-icon"></i> <?php
                    if (!empty($blocks['see-my-score']->title)) {
                        echo $blocks['see-my-score']->title;
                    }
                    ?></h2>
                <p><?php
                    if (!empty($blocks['see-my-score']->content)) {
                        echo $blocks['see-my-score']->content;
                    }
                    ?></p>
            </div>
            <div class="education">
                <h2><i class="glyphicon edit-icon"></i><?php
                    if (!empty($blocks['way-to-being-a-pro']->title)) {
                        echo $blocks['way-to-being-a-pro']->title;
                    }
                    ?></h2>
                <p><?php
                    if (!empty($blocks['way-to-being-a-pro']->content)) {
                        echo $blocks['way-to-being-a-pro']->content;
                    }
                    ?></p>
            </div>
        </div>
    </div>
</div>

<div class="buttom-section">
    <div class="container">
        <div class="col-lg-3 col-md-3 col-sm-6">
            <i class="parents-icon"></i>
            <span>Parents</span>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
            <i class="company-icon"></i>
            <span>Company</span>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
            <i class="school-icon"></i>
            <span>School</span>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
            <i class="owner-icon"></i>
            <span>Business owner</span>
        </div>
    </div>
</div>
<?php
$this->loadJs(array("bootbox.js", "jquery.form.min.js", "custom/buildlesson.js", "bootstrap-filestyle.min.js"));
$this->loadCss("dropzone.css");
?>