<?php

return CMap::mergeArray(
    require(dirname(__FILE__) . '/main.php'), array(
        'components' => array(
            'urlManager' => array(
                'urlFormat' => 'path',
                'showScriptName' => false,
                'rules' => array(
                    'administrator/' => 'home/index', 
                    'administrator/dashboard' => 'home/index',
                    'administrator/login' => 'site/login',
                    'administrator/logout' => 'site/logout',
                    
                    'administrator/contact' => 'contactUs/admin',
                    'administrator/contact/delete/<id>' => 'contactUs/delete',
                    'administrator/contact/manage' => 'contactUs/admin',
                    'administrator/contact/view/<id>' => 'contactUs/view',
                    
                    
                    'administrator/pages' => 'cmsPages/admin',
                    'administrator/pages/create' => 'cmsPages/create',
                    'administrator/pages/update/<id>' => 'cmsPages/update',
                    'administrator/pages/delete/<id>' => 'cmsPages/delete',
                    'administrator/pages/manage' => 'cmsPages/admin',
                    'administrator/pages/view/<id>' => 'cmsPages/view',
                    
                    'administrator/blocks' => 'cmsBlocks/admin',
                    'administrator/blocks/update/<id>' => 'cmsBlocks/update',
                    'administrator/blocks/delete/<id>' => 'cmsBlocks/delete',
                    'administrator/blocks/manage' => 'cmsBlocks/admin',
                    'administrator/blocks/view/<id>' => 'cmsBlocks/view',
                    
                    'administrator/lessons' => 'lesson/admin',
                    'administrator/lessons/update/<id>' => 'lesson/update',
                    'administrator/lessons/delete/<id>' => 'lesson/delete',
                    'administrator/lessons/manage' => 'lesson/admin',
                    'administrator/lessons/view/<id>' => 'lesson/view',
                    
                    'administrator/lesson-categories' => 'lessonCategory/admin',
                    'administrator/lesson-categories/create' => 'lessonCategory/create',
                    'administrator/lesson-categories/update/<id>' => 'lessonCategory/update',
                    'administrator/lesson-categories/delete/<id>' => 'lessonCategory/delete',
                    'administrator/lesson-categories/manage' => 'lessonCategory/admin',
                    'administrator/lesson-categories/view/<id>' => 'lessonCategory/view',
                    
                    'administrator/users' => 'userMaster/admin',
                    'administrator/users/create' => 'userMaster/create',
                    'administrator/users/update/<id>' => 'userMaster/update',
                    'administrator/users/delete/<id>' => 'userMaster/delete',
                    'administrator/users/manage' => 'userMaster/admin',
                    'administrator/users/view/<id>' => 'userMaster/view',
                    
                    'administrator/news' => 'newsMaster/admin',
                    'administrator/news/create' => 'newsMaster/create',
                    'administrator/news/update/<id>' => 'newsMaster/update',
                    'administrator/news/delete/<id>' => 'newsMaster/delete',
                    'administrator/news/manage' => 'newsMaster/admin',
                    'administrator/news/view/<id>' => 'newsMaster/view',
                    
                    '<controller:\w+>/<id:\d+>' => '<controller>/view',
                    '<controller:\w+>/<action:\w+>/<id:\d+>' => '<controller>/<action>',
                    '<controller:\w+>/<action:\w+>' => '<controller>/<action>',
                ),
            ),
        )
    )
);