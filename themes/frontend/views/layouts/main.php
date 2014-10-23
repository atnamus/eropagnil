<html>
    <head>
        <meta charset="UTF-8">	
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
        <title><?php echo $this->page_meta_title; ?></title>
        <!--<meta content="keyword"-->
        <meta name="description" content="<?php echo $this->page_meta_description; ?>" />
        <meta name="keywords" content="<?php echo $this->page_meta_keywords; ?>" />
        <script>
            var member_url = "<?php echo $this->createUrl("home/Memberhome"); ?>";
            var full_path = "<?php echo Yii::app()->request->getBaseUrl(true); ?>";
            var real_full_path = "<?php echo Yii::app()->request->getBaseUrl(true); ?>";
            var assets_path = "<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/";
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
        ?>
    </head>
    <body>
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
        <footer class="footer" role="contentinfo">
            <div class="container">
                <ul class="footer-nav">
                    <li><a href="<?php echo $this->createUrl("home/Aboutus"); ?>">About Us</a></li>
                    <li><a href="<?php echo Yii::app()->createUrl("blog/"); ?>">Blog</a></li>
                    <li><a href="<?php echo Yii::app()->createUrl("forum/"); ?>">Forum</a></li>
                    <li><a href="<?php echo $this->createUrl("home/Terms"); ?>">Terms</a></li>
                    <li><a href="<?php echo $this->createUrl("home/Privacy"); ?>">Privacy</a></li>
                    <li><a href="#">Display Language</a></li>
                </ul>
                <p class="copy-right">© 2014  our company</p>
            </div>
        </footer>
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
            "custom/common.js",
        ));
        ?>
    </body>
</html>