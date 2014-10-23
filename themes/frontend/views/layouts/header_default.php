<div class="navbar navbar-default" role="navigation">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-7 col-sm-5 navbar-header">
                <a class="navbar-brand" href="<?php echo $this->createUrl("user/Signup"); ?>">
                    <img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/logo.png" alt="lingapore">
                </a>
            </div>
            <div class="col-lg-4 col-md-5 col-sm-7">	        	
                <div class="select-box">
                    <label>Site language:</label>
                    <?php
                    $this->widget('application.components.widgets.LanguageSelector');
                    ?>
                </div>
                <ul class="navbar-sign pull-right">
                    <li id="nav-login-btn" class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Sign In</a>
                        <div class="login-box dropdown-menu">
                            <div id="login_box">
                                <form method="post" id="form_login" onsubmit="dologin(event)" action='<?php echo $this->createUrl("user/Ajaxlogin"); ?>' name="login_form">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="email" id="login_email" placeholder="Username or email">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" name="password" id="login_password" placeholder="Password">
                                    </div>
                                    <input type="submit" id="btn" class="btn btn-success btn-block sign-in-btn" value="Sign in" />
                                    <a href="javascript:void(0)" id="go_forgotsignin" class="fgt-pass">Forgot Password?</a>                          
                                </form>
                            </div>
                            <div id="forgotpass_box" style="display:none;">
                                <form method="post" id="form_resetpassword" onsubmit="doresetpassword(event)" action='<?php echo $this->createUrl("user/Forgotpassword"); ?>' name="login_form">
                                    <div class="form-group">
                                        <input type="email" class="form-control" name="email" id="forgot_email" required placeholder="Enter Email">
                                    </div>
                                    <input type="submit" id="btn" class="btn btn-success btn-block sign-in-btn" value="Forgot Password" />
                                    <a href="javascript:void(0)" id="go_signin" class="fgt-pass">Sign in</a>
                                </form>
                            </div>
                        </div>  
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>