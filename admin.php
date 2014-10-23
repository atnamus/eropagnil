<?php
 
require_once(dirname(__FILE__) . '/protected/components/ExceptionHandler.php');
$router = new ExceptionHandler();

// change the following paths if necessary
$yii=dirname(__FILE__).'/../framework/yii.php';

// remove the following lines when in production mode
defined('YII_DEBUG') or define('YII_DEBUG',true);
// specify how many levels of call stack should be shown in each log message
defined('YII_TRACE_LEVEL') or define('YII_TRACE_LEVEL',3);

require_once($yii);

$config = dirname(__FILE__).'/protected/config/admin-config.php';

Yii::createWebApplication($config)->runEnd('frontend');