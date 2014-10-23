<?php

/**
 * Controller is the customized base controller class.
 * All controller classes for this application should extend from this base class.
 */
class AllFunction extends Controller {

    function __construct() {
    }

    function get_page_metadata($page_name) {
        $seo = SeoMaster::model()->findByAttributes(array("PageName" => $page_name));

        if ($seo != null) {
            $page_meta_title = $seo->Title;
            $page_meta_keywords = $seo->Keyword;
            $page_meta_description = $seo->Description;

            $str = "";

            $str.="<title>{$page_meta_title}</title>";
            $str.="<meta name=\"keywords\" content=\"{$page_meta_keywords}\">";
            $str.="<meta name=\"description\" content=\"{$page_meta_description}\">";

            return $str;
        }
    }
    
    function get_youtube_video_id($url) {

        preg_match(
                '/[\\?\\&]v=([^\\?\\&]+)/', $url, $matches
        );

        $video_id = $matches[1];

        return $video_id;

    }

    function embed_youtube($url, $height, $width) {
        preg_match(
                '/[\\?\\&]v=([^\\?\\&]+)/', $url, $matches
        );
        $video_id = $matches[1];
        $embed_code = '<iframe width="' . $width . '" height="' . $height . '" src="//www.youtube-nocookie.com/embed/' . $video_id . '" frameborder="0" allowfullscreen></iframe>';
        return $embed_code;
    }

    function getYoutubeImage($e, $height = 70, $width = 100) {
        //GET THE URL
        $url = $e;

        $queryString = parse_url($url, PHP_URL_QUERY);

        parse_str($queryString, $params);

        $v = $params['v'];
        //DISPLAY THE IMAGE
        if (strlen($v) > 0) {
            return "<img src='http://i3.ytimg.com/vi/$v/default.jpg' width='" . $width . "' height='" . $height . "' />";
        }
    }

    public function randstring($length) {
        $alphanum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        $rand = substr(str_shuffle($alphanum), 0, $length);
        $time = time();
        $val = $time . $rand;

        return $val;
    }

    function clean($str) {
        if ($str) {
            $str = strip_tags(addslashes(stripslashes(htmlspecialchars($str))));
            return $str;
        } else {
            return FALSE;
        }
    }

    function file_extension($file_name) {
        $ext_name = $file_name;
        $ext_arr = explode('.', $ext_name);
        $total_val = count($ext_arr);
        if ($total_val > 1) {
            $ext = $ext_arr[$total_val - 1];
            $ext = strtolower($ext);
        } else {
            $ext = '';
        }
        return $ext;
    }

    function unlink_file($filename) {
        if (file_exists($filename)) {
            unlink($filename);
        }
    }

    public function check_valid_file_extension($ext, $valid_ext = NULL) {
        if ($valid_ext == NULL)
            $valid_ext = array('jpg', 'jpeg', 'gif', 'png');

        $val = in_array($ext, $valid_ext) ? TRUE : FALSE;

        return $val;
    }

    function check_image_valid($image) {
        $mime = array(
            'image/gif',
            'image/jpeg',
            'image/png'
        );
        $file_info = getimagesize($image);

        if (empty($file_info)) { // No Image?
            return false;
        } else { // An Image?
            $file_mime = $file_info['mime'];
            if (in_array($file_mime, $mime))
                return true;
            else
                return false;
        }
    }

    function validateEmail($email) {
        $extension = explode("@", $email);
        count($extension);
        if (count($extension) < 2) {
            return false;
        }
        $dmain_ext = $extension[1];
        $domain = explode('.', $dmain_ext);
        $dmain_arr = count($domain);
        if ($dmain_arr < 2) {
            return false;
        }
        if ($dmain_arr > 6) {
            return false;
        }

        if ($dmain_arr == 6 || $dmain_arr == 5) {
            $n1 = is_validateNumeric($domain[0]);
            $n2 = is_validateNumeric($domain[1]);
            $n3 = is_validateNumeric($domain[2]);
            $n4 = is_validateNumeric($domain[3]);
            if (($n1 && $n2 && $n3 && $n4) != 1) {
                return false;
            }
        }
        if ($dmain_arr == 6) {
            $ext1 = is_validateNumeric($domain[4]);
            $ext2 = is_validateNumeric($domain[5]);
            if ($ext1 == $ext2) {
                return false;
            }
        }

        if ($dmain_arr == 3) {
            if ($domain[1] == $domain[2]) {
                return false;
            }
        }

        if ($dmain_arr == 2) {

            if (strlen($domain[1]) > 6) {
                return false;
            }
        }

        if (!preg_match("/^[a-zA-Z0-9_\+-]+(\.[a-zA-Z0-9_\+-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.([a-z]{2,7})$/", $email)) {
            return false;
        } else {
            return true;
        }
    }

    function rand_string_pass($digits) {
        $alphanum = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        $rand = substr(str_shuffle($alphanum), 0, $digits);

        return $rand;
    }
    
    function show_date($date_time,$date_format="M d, Y H:i"){
        return date($date_format,strtotime($date_time));
    }

}