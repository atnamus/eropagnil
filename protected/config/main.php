<?php

require_once dirname(__DIR__) . DIRECTORY_SEPARATOR . 'components' . DIRECTORY_SEPARATOR . 'helper' . DIRECTORY_SEPARATOR . 'Assets.php';
return array(
    'basePath' => dirname(__FILE__) . DIRECTORY_SEPARATOR . '..',
    'name' => 'Lingapore',
    'theme' => 'frontend',
    // preloading 'log' component
    'preload' => array('log'),
    // autoloading model and component classes
    'import' => array(
        'application.models.*',
        'application.components.*',
        'application.controllers.admin.*'
    ),
    'modules' => array(
        'admin',
        // uncomment the following to enable the Gii tool
        'gii' => array(
            'class' => 'system.gii.GiiModule',
            'password' => 'lingapore',
            // If removed, Gii defaults to localhost only. Edit carefully to taste.
//            'ipFilters' => array('127.0.0.1', '::1', 'fe80::30de:d523:6d63:6023'),
            'ipFilters' => array($_SERVER['REMOTE_ADDR']),
        ),
    ),
    // application components
    'components' => array(
        /* 'user' => array(
          // enable cookie-based authentication
          'allowAutoLogin' => true,
          'autoUpdateFlash' => false,
          ), */
        'imagemod' => array(
            //alias to dir, where you unpacked extension
            'class' => 'application.extensions.imagemodifier.CImageModifier',
        ),
        'user' => array(// Webuser for the frontend
            'class' => 'CWebUser',
            'loginUrl' => array('site/login'),
            'stateKeyPrefix' => 'frontend_',
        ),
        'adminUser' => array(// Webuser for the admin area (admin)
            'class' => 'AdminWebUser',
            'loginUrl' => array('/admin/auth/login'),
            'stateKeyPrefix' => 'admin_',
        ),
        'mailer' => array(
            // for smtp
            'class' => 'ext.mailer.SmtpMailer',
            'server' => 'smtp.163.com',
            'port' => '25',
            'username' => 'your username',
            'password' => 'your password',
            // for php mail
            'class' => 'ext.mailer.PhpMailer',
        ),
        /*
          'db'=>array(
          'connectionString' => 'sqlite:'.dirname(__FILE__).'/../data/testdrive.db',
          ),
         */
        // uncomment the following to use a MySQL database
        'db' => array(
            'connectionString' => 'mysql:host=localhost;dbname=lingapore',
            'tablePrefix' => 'site_',
            'emulatePrepare' => true,
            'username' => 'lingapore',
            'password' => 'lingapore',
            'charset' => 'utf8',
            'enableProfiling' => true,
            'enableParamLogging' => true,
        ),
        'errorHandler' => array(
            // use 'site/error' action to display errors
            'errorAction' => 'site/error',
        ),
        'log' => array(
            'class' => 'CLogRouter',
            'routes' => array(
                array(
                    'class' => 'CFileLogRoute',
                    'levels' => 'error, warning',
                ),
                array(
                    'class' => 'ext.yii-debug-toolbar.YiiDebugToolbarRoute',
                ),
            // uncomment the following to show log messages on web pages
            /*
              array(
              'class'=>'CWebLogRoute',
              ),
             */
            ),
        ),
    ),
    // application-level parameters that can be accessed
    // using Yii::app()->params['paramName']
    'params' => array(
        'lesson_audio_path' => '/uploads/lesson/audio/',
        'lesson_image_path' => 'uploads/lesson/image',
        'lesson_video_path' => 'uploads/lesson/video',
    ),
    'behaviors' => array(
        'runEnd' => array(
            'class' => 'application.components.WebApplicationEndBehavior',
        ),
    ),
);