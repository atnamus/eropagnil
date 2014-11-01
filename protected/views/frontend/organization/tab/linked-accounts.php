<?php
$user_id = Yii::app()->user->id;

$criteria = new CDbCriteria();
$criteria->addCondition("t.user_id='" . $user_id . "'");
$criteria->addCondition("t.provider='facebook'");
$fb_acc = SocialAccount::model()->find($criteria);

$criteria2 = new CDbCriteria();
$criteria2->addCondition("t.user_id='" . $user_id . "'");
$criteria2->addCondition("t.provider='google'");
$google_acc = SocialAccount::model()->find($criteria2);
?>
<div class="row">
    <div class="col-sm-12">
        <!-- Tab panes -->
        <div style="color: red;display: block;text-align: center;" id="error">dfdf</div>
        <div style="color: green;display: block;text-align: center;" id="success">df</div>
        <h3>These linked accounts can be used to log in to lingapore</h3>
        <div class="accEdit linkdin-sec">
            <form class="basics-form">
                <div class="form-group">
                    <label class="col-sm-3 control-label" for=""><i class="fa fa-facebook"></i>Google </label>
                    <div class="col-sm-9 social" id="google" style="display:<?php echo $google_acc == NULL ? "block" : "none"; ?>">
                        <button class="btn btn-block btn-social btn-google-plus social-connect ladda-button" data-style="expand-left" data-provider="google" id="google-conn">                            
                            <span class="ladda-label"><i class="fa fa-google"></i> Connect with Google</span>
                            <span class="ladda-spinner"></span>
                        </button>
                    </div>
                    <div class="col-sm-9 social" id="google-rmv" style="display:<?php echo $google_acc == NULL ? "none" : ""; ?>">
                        <?php echo $google_acc == NULL ? "" : $fb_acc->email->email; ?>
                        ( <a href="#" class="disconnect-login" data-type="google">Disconnect</a> )
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label" for=""><i class="fa fa-google"></i>Facebook </label>
                    <div class="col-sm-9 social" id="facebook" style="display:<?php echo $fb_acc == NULL ? "block" : "none"; ?>">                        
                        <button class="btn btn-block btn-social btn-facebook social-connect ladda-button"  data-style="expand-left"  data-provider="facebook" id="facebook-conn">                            
                            <span class="ladda-label"><i class="fa fa-facebook"></i> Connect with Facebook</span>
                            <span class="ladda-spinner"></span>
                        </button>
                    </div>
                    <div class="col-sm-9 social" id="facebook-rmv" style="display:<?php echo $fb_acc == NULL ? "none" : ""; ?>">
                        <?php echo $fb_acc == NULL ? "" : $fb_acc->email; ?>
                        ( <a href="#" class="disconnect-login" data-type="facebook">Disconnect</a> )
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label" for="User_full_name"><i class="fa fa-envelope"></i> Email</label>
                    <div class="col-sm-9"><?php echo $model->email; ?></div>
                </div>

                <div class="form-group">
                    <div class="col-sm-offset-3 col-sm-10">                        
                        <button class="btn-submit-gray" type="submit">Connect another email</button>
                    </div>                
                </div>
            </form>            
        </div>
        <!-- Tab panes -->
    </div> 
</div>  
<?php
$this->loadJs(["hello.all.min.js", 'custom/organization.js']);