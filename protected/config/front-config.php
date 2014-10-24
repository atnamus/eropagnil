<?php

return CMap::mergeArray(
                require(dirname(__FILE__) . '/main.php'), array(
            'import' => array(
                'application.modules.admin.models.LessonStage',
                'application.modules.admin.models.LessonStageCategory',
                'application.modules.admin.models.LessonCategory',
                'application.modules.admin.models.Seo',
            ),
            'components' => array(
                'urlManager' => array(
//                    'class' => 'application.components.UrlManager',
                    'urlFormat' => 'path',
                    'showScriptName' => false,
                    'rules' => array(
                        '/<language:\w+>/dashboard' => 'home/Memberhome',
                        '/dashboard' => 'home/Memberhome',
                        '/<language:\w+>/terms' => 'home/Terms',
                        '/terms' => 'home/Terms',
                        '/<language:\w+>/about-us' => 'home/Aboutus',
                        '/about-us' => 'home/Aboutus',
                        '/<language:\w+>/privacy' => 'home/Privacy',
                        '/privacy' => 'home/Privacy',
                        //START FORUM
                        '/<language:\w+>/forum' => 'forum/Index',
                        '/forum' => 'forum/Index',
                        //forum details
                        '/<language:\w+>/forum/<slug:([A-Za-z0-9-]+)>/<id:\d+>' => 'forum/ForumDetails/',
                        '/forum/<slug:([A-Za-z0-9-]+)>/<id:\d+>' => 'forum/ForumDetails/',
                        //thread details
                        '/<language:\w+>/forum/thread/<slug:([A-Za-z0-9-]+)>/<thread_id:\d+>' => 'forum/ThreadDetails/',
                        '/forum/thread/<slug:([A-Za-z0-9-]+)>/<thread_id:\d+>' => 'forum/ThreadDetails/',
                        //END FORUM
                        //START BLOG
                        '/<language:\w+>/blog' => 'blog/Index',
                        '/blog' => 'blog/Index',
                        //blog details
                        '/<language:\w+>/blog/<slug:([A-Za-z0-9-]+)>/<id:\d+>' => 'blog/BlogDetails/',
                        '/blog/<slug:([A-Za-z0-9-]+)>/<id:\d+>' => 'blog/BlogDetails/',
                        //add new blog
                        '/<language:\w+>/blog/add' => 'blog/AddBlog',
                        '/blog/add' => 'blog/AddBlog',
                        //END BLOG                       
                        '/<language:\w+>/' => 'user/Signup',
                        '/' => 'user/Signup',
                        '/facebook-signup' => 'user/Signupwithfacebook',
                        '/activate-account/<activation_key>' => 'user/Activateaccount',
                        '/reset-password/<reset_key>' => 'user/Resetpassword',
                        '/<language:\w+>/members/logout' => 'user/Logout',
                        '/members/logout' => 'user/Logout',
                        '/<language:\w+>/profile/<username:\w+>' => 'profile/Viewprofile',
                        '/profile/<username:\w+>' => 'profile/Viewprofile',
                        '/<language:\w+>/account-settings' => 'profile/Settings',
                        '/account-settings' => 'profile/Settings',
                        '/<language:\w+>/post-correction' => 'correction/Post',
                        '/post-correction' => 'correction/Post',
                        '/<language:\w+>/correction-details/<display_id:\w+>' => 'correction/Viewcorrection',
                        '/correction-details/<display_id:\w+>' => 'correction/Viewcorrection',
                        '/<language:\w+>/correction-edit/<display_id:\w+>' => 'correction/Editcorrection',
                        '/correction-edit/<display_id:\w+>' => 'correction/Editcorrection',
                        '/<language:\w+>/correction-delete/<display_id:\w+>' => 'correction/Deletecorrection',
                        '/correction-delete/<display_id:\w+>' => 'correction/Deletecorrection',
                        '/<language:\w+>/correction-list' => 'correction/Listcorrection',
                        '/correction-list' => 'correction/Listcorrection',
                        /* ----------------------AJAX ROUTES--------------------------- */
                        '/ajax-do-login' => 'user/Ajaxlogin',
                        '/ajax-fetch-category' => 'ajax/Ajaxfetchcategory',
                        '/ajax-create-update-lesson' => 'ajax/Ajaxcreateupdatelesson',
                        '/ajax-fetch-tags' => 'ajax/Ajaxfetchtags',
                        '/ajax-upload-skit-video' => 'ajax/Ajaxuploadskitvideo',
                        '/ajax-create-update-quiz' => 'ajax/Ajaxcreateupdatequiz',
                        '/ajax-create-update-skit' => 'ajax/Ajaxcreateupdateskit',
                        '/ajax-delete-lesson' => 'ajax/Ajaxdeletelesson',
                        '/ajax-post-lesson' => 'ajax/Ajaxpostlesson',
                        '/ajax-draft-lesson' => 'ajax/Ajaxdraftlesson',
                        '/ajax-upload-files' => 'ajax/Ajaxuploadfiles',
                        '/ajax-get-quiz-data' => 'ajax/Ajaxgetquizdata',
                        '/ajax-get-skit-data' => 'ajax/Ajaxgetskitdata',
                        '/ajax-get-lesson-data' => 'ajax/Ajaxgetlessondata',
                        '/ajax-save-correction' => 'ajax/Ajaxcreatecorrection',
                        '/ajax-update-correction' => 'ajax/Ajaxupdatecorrection',
                        '/ajax-like-correction' => 'ajax/Ajaxlikecorrection',
                        '/ajax-load-corrections' => 'ajax/Ajaxloadcorrections',
                        '/ajax-post-correction-comment' => 'ajax/Ajaxpostcorrectioncomment',
                        '/ajax-like-comment' => 'ajax/Ajaxlikecomment',
                        '/ajax-correct-comment-mark' => 'ajax/Ajaxcommentmarkcorrect',
                        /* ------------------------------------------------------------- */
                        '<language:\w+>/<controller:\w+>/<id:\d+>' => '<controller>/view',
                        '<language:\w+>/<controller:\w+>/<action:\w+>/<id:\d+>' => '<controller>/<action>',
                        '<language:\w+>/<controller:\w+>/<action:\w+>/*' => '<controller>/<action>',
//                        'gii' => 'gii',
//                        'gii/<controller:\w+>' => 'gii/<controller>',
//                        'gii/<controller:\w+>/<action:\w+>' => 'gii/<controller>/<action>',
                    ),
                ),
            ),
            'sourceLanguage' => 'en',
            'language' => 'en',
            'params' => array(
                'languages' => array('tr' => 'Türkçe', 'en' => 'English', 'de' => 'Deutsch'),
            ),
                // Put front-end settings there
                )
);