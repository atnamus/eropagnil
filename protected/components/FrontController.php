<?php

class FrontController extends CController {

    public $language_id = 1;
    public $languages = array();
    public $user_id = "";
    public $username = "";
    public $default_profile_pic = "default-avatar.jpg";
    public $profile_pic;
    public $user_type_id;
    public $first_name = "";
    public $last_name = "";
    public $full_name = "";
    private $_assetsUrl;
    public $image_path;
    public $profile_image_path;
    private $all_function;
    public $page_name;
    public $page_meta_title = "Lingapore";
    public $page_meta_keywords;
    public $page_meta_description;

    public function __construct($id, $module = null) {
        parent::__construct($id, $module);
        $this->profile_pic = $this->default_profile_pic;
        // If there is a post-request, redirect the application to the provided url of the selected language 
        if (isset($_POST['language'])) {
            $lang = $_POST['language'];
            $MultilangReturnUrl = $_POST[$lang];
            $this->redirect($MultilangReturnUrl);
        }

        $this->image_path = Yii::app()->request->getBaseUrl(true) . "/themes/frontend/assets/images";
        $this->profile_image_path = Yii::app()->request->getBaseUrl(true) . "/uploads/images/profile_pic";

        $assets_url = $this->getAssetsUrl();
        Assets::init([
            'assets_url' => $assets_url,
            'theme' => 'frontend',
            'package_path' => 'vendor',
            'js_path' => 'js',
            'css_path' => 'css',
        ]);

        // Set the application language if provided by GET, session or cookie
        if (isset($_GET['language'])) {
            Yii::app()->language = $_GET['language'];
            Yii::app()->user->setState('language', $_GET['language']);
            $cookie = new CHttpCookie('language', $_GET['language']);
            $cookie->expire = time() + (60 * 60 * 24 * 365); // (1 year)
            Yii::app()->request->cookies['language'] = $cookie;
        } else if (Yii::app()->user->hasState('language'))
            Yii::app()->language = Yii::app()->user->getState('language');
        else if (isset(Yii::app()->request->cookies['language']))
            Yii::app()->language = Yii::app()->request->cookies['language']->value;

        $lang_code = "en";

        $lang_code = Yii::app()->language;

        $lang = Languages::model()->findByAttributes(array("code" => $lang_code));

        if (!empty($lang)) {
            Yii::app()->session['language'] = $lang->id;
        }

        $this->all_function = new AllFunction();
    }

    public function getKey($email) {
        $generatedKey = sha1(mt_rand(10000, 99999) . time() . $email);
        return $generatedKey;
    }

    public function beforeAction($action) {
        $languages = Languages::model()->findAllByAttributes(array("status" => "1"));
        $this->languages = $languages;
        $current_action = Yii::app()->controller->id . "/" . Yii::app()->controller->action->id;

        if (Yii::app()->request->getParam("lang") != "") {
            $this->change_language(Yii::app()->request->getParam("lang"));
        }

        if (isset(Yii::app()->session['language'])) {
            $this->language_id = Yii::app()->session['language'];
        }

        $this->language_id = 1;

        if (Yii::app()->user->hasState("user")) {
            $this->user_id = Yii::app()->user->getState("user");

            $criteria = new CDbCriteria();
            $criteria->select = "t.profile_image,t.username,t.first_name,t.last_name,t.full_name,t.user_type_id";
            $criteria->addCondition("t.id='" . $this->user_id . "'");

            $user_info = User::model()->find($criteria);

            if ($user_info->profile_image != "") {
                $this->profile_pic = $user_info->profile_image;
            }

            $this->username = $user_info->username;
            $this->user_type_id = $user_info->user_type_id;
            $this->first_name = $user_info->first_name;
            $this->last_name = $user_info->last_name;
            $this->full_name = $user_info->full_name;
        } else {
            $allowed_action = array(
                "user/Signup",
                "user/Ajaxlogin",
                "user/Activateaccount",
                "home/Aboutus",
                "home/Terms",
                "user/Forgotpassword",
                "user/Resetpassword",
                "user/SocialLogin",
                "forum/Index",
                "forum/ForumDetails",
                "forum/ThreadDetails",
                "blog/Index",
                "blog/BlogDetails",
                'blog/AddBlog',
            );
            if (!in_array($current_action, $allowed_action)) {
                $this->redirect($this->createUrl("user/Signup"));
            }
        }

        return true;
    }

    public function change_language($lang_code) {
        $lang = Languages::model()->findByAttributes(array("code" => $lang_code));

        if (!empty($lang)) {
            Yii::app()->session['language'] = $lang->id;
        }
        $curpage = Yii::app()->getController()->getAction()->controller->id;
        $curpage .= '/' . Yii::app()->getController()->getAction()->controller->action->id;
        $url = $this->createAbsoluteUrl($curpage);
        $this->redirect($url);
    }

    /**
     * @return string the base URL that contains all published asset files of this module.
     */
    public function getAssetsUrl() {
        Yii::app()->assetManager->forceCopy = true;
        if ($this->_assetsUrl === null) {
            $this->_assetsUrl = Yii::app()->createAbsoluteUrl('/themes/frontend/assets');//Yii::app()->request->baseUrl . '/themes/frontend/assets/';
            //$this->_assetsUrl = Yii::app()->assetManager->publish(dirname(Yii::app()->basePath) . DIRECTORY_SEPARATOR . 'themes' . DIRECTORY_SEPARATOR . 'frontend' . DIRECTORY_SEPARATOR . 'assets');
        }
        //$this->_assetsUrl = Yii::app()->assetManager->publish(dirname(Yii::app()->request->baseUrl) . '/public/themes/frontend/assets/');
        return $this->_assetsUrl;
    }

    function loadJs($js, $to_end = CClientScript::POS_END) {
        if (is_array($js)) {
            foreach ($js as $key => $val) {
                Yii::app()->clientScript->registerScriptFile($this->_assetsUrl . '/js/' . $val, $to_end);
            }
        } else {
            Yii::app()->clientScript->registerScriptFile($this->_assetsUrl . '/js/' . $js, $to_end);
        }
    }

    function loadCss($css) {
        if (is_array($css)) {
            foreach ($css as $key => $val) {
                Yii::app()->clientScript->registerCssFile($this->_assetsUrl . '/css/' . $val);
            }
        } else {
            Yii::app()->clientScript->registerCssFile($this->_assetsUrl . '/css/' . $css);
        }
    }

    /**
     * @param string the base URL that contains all published asset files of this module.
     */
    public function setAssetsUrl($value) {
        $this->_assetsUrl = $value;
    }

    public function registerCss($file, $media = 'all') {
        $href = $this->getAssetsUrl() . '/css/' . $file;
        return '<link rel="stylesheet" type="text/css" href="' . $href . '" media="' . $media . '" />';
    }

    public function registerImage($file) {
        return $this->getAssetsUrl() . '/images/' . $file;
    }

    public function createMultilanguageReturnUrl($lang = 'en') {
        if (count($_GET) > 0) {
            $arr = $_GET;
            $arr['language'] = $lang;
        }
        else
            $arr = array('language' => $lang);
        return $this->createUrl('

        ', $arr);
    }

    function set_page_seo($page_name) {
        $this->page_name = $page_name;
        $seo = Seo::model()->findByAttributes(array("page_name" => $this->page_name, "language_id" => $this->language_id));

        if ($seo != null) {
            $this->page_meta_title = $seo->title;
            $this->page_meta_keywords = $seo->keyword;
            $this->page_meta_description = $seo->description;
        }
    }

}