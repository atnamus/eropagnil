<html>
    <head>
        <meta charset="UTF-8">	
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <?php
        Yii::app()->getClientScript()->registerCoreScript('jquery');
        //$this->loadJs("jquery-1.11.0.min.js",CClientScript::POS_HEAD);
        ?>
        <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>-->
        <title><?php echo $this->page_meta_title; ?></title>
        <!--<meta content="keyword"-->
        <meta name="description" content="<?php echo $this->page_meta_description; ?>" />
        <meta name="keywords" content="<?php echo $this->page_meta_keywords; ?>" />
        <script type="text/javascript">
            /*<![CDATA[*/
            var member_url = "<?php echo $this->createUrl("home/Memberhome"); ?>";
            var full_path = "<?php echo Yii::app()->request->getBaseUrl(true); ?>";
            var real_full_path = "<?php echo Yii::app()->request->getBaseUrl(true); ?>";
            var assets_path = "<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/";
            var FACEBOOK_CLIENT_ID = {
                'localhost': '220133184721685',
                'appserver3': '306037612930218',
                '192.168.1.11': '306037612930218',
                '66.23.235.244': '733597033376139',
                'lingapore.com': ''
            }[window.location.hostname];
            var GOOGLE_CLIENT_ID = '656984324806-sr0q9vq78tlna4hvhlmcgp2bs2ut8uj8.apps.googleusercontent.com';
            var CLIENT_IDS = {
                google: GOOGLE_CLIENT_ID,
                facebook: FACEBOOK_CLIENT_ID
            };
            /*]]>*/
        </script>
        <?php
        $this->loadCss(array(
            "bootstrap.css",
            "style.css",
            "token-input.css",
            "token-input-facebook.css",
//            "token-input-mac.css",
            "responsive.css",
            "jquery.selectbox.css",
        ));
        //load common plugins
        Assets::loadPlugin(['toast-message', 'ladda-bootstrap']);
        ?>
    </head>
    <body>
        <div id="loader_block">
            <div class="col-md-6" id="progress_bar_container">
                <label id="loader_text">Uploading Please Wait ...</label>
                <div class="progress" id="progress_bar">
                    <div id="main_progressbar" class="progress-bar progress-bar-striped progress-bar-danger active" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" style="width: 70%">
                        <span class="sr-only" id="progress_value">70% Complete</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="errorJsSummary" style="display:none;"></div>
        <div class="successmsg" style="display:none;"></div>
        <?php
        if (empty($this->user_id)) {
            $this->renderPartial('/layouts/header_default', array('content' => $content));
        } else {
            $this->renderPartial('/layouts/header_user', array('content' => $content));
        }
        ?>
        <div id="main_site_container">
            <?php echo $content; ?>
        </div>
        <?php $this->renderPartial('/layouts/footer_html'); ?>
        <?php
        if (Yii::app()->user->hasFlash("success_msg")) {
            ?>
            <div class="success_msg">
                <?php echo Yii::app()->user->getFlash("success_msg"); ?>
            </div>
            <?php
        }

        if (Yii::app()->user->hasFlash("error_msg")) {
            ?>
            <div class="error_msg">
                <?php echo Yii::app()->user->getFlash("error_msg"); ?>
            </div>
            <?php
        }
        $this->loadJs(array(
            "bootstrap.js",
            "jquery.tokeninput.js",
//            "bootstrap-tagsinput.js",
//            "typeahead.bundle.js",
            "jquery.selectbox-0.2.js",
            "jquery.nicescroll.min.js",
            "custom/common.js",
        ));
        ?>
    </body>
</html>