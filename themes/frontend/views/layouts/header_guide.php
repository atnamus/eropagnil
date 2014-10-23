<div class="navbar navbar-default" role="navigation">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-5 col-sm-5 navbar-header">
                <a class="navbar-brand" href="<?php echo $this->createUrl("user/Signup"); ?>">
                    <img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/logo.png" alt="lingapore">
                </a>
            </div>
            <div class="col-lg-8 col-md-7 col-sm-7">	        	
<!--                <div class="select-box">
                    <label>Site language:</label>
                    <?php
//                    $this->widget('application.components.widgets.LanguageSelector');
                    ?>
                </div>-->
                <ul class="nav navbar-nav pull-right">
                    <li class="home"><a href="#">home</a></li>
                    <li class="nav-post"><a href="#">Post</a></li>
                    <li class="nav-corr"><a href="#">Correct</a></li>
                    <li class="nav-help"><a href="#">Help</a></li>
                    <li class="dropdown dropdown-user">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
                            <img alt="" class="img-circle" src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/avatar.jpg">
                            <span class="username username-hide-on-mobile">Bob </span>
                            <i class="fa fa-angle-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="#">
                                    <i class="icon-user"></i> My Profile </a>
                            </li>                       
                            <li>
                                <a href="#">
                                    <i class="icon-envelope-open"></i> My Inbox <span class="badge badge-danger">
                                        3 </span>
                                </a>
                            </li>                       
                            <li class="divider">
                            </li>

                            <li>
                                <a href="#">
                                    <i class="icon-key"></i> Log Out </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>