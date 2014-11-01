<?php

class DemoController extends FrontController {

    public $layout = "//layouts/main";

    public function actionIndex() {

        $this->render("/demo");
    }

    function actionAjaxcalendar() {
        $request = Yii::app()->request;
        if ($request->isAjaxRequest) {
            $month = $request->getPost("month");
            $year = $request->getPost("year");
            $user_id = $request->getPost("user_id");
            $data_msg = array();
            $data_msg['month'] = $month;
            $data_msg['year'] = $year;
            
            $corrections=array();
            
            $events = array();

            $events[] = array(
                "rdate" => time(),
                "html" => "asdasd"
            );

            $date = new DateTime("2014-10-29 18:29:26");

            $events[] = array(
                "rdate" => $date->getTimestamp(),
                "html" => "weqweqwe"
            );

            $data_msg['events'] = $events;
            $this->renderPartial("/_my_calendar", $data_msg);
        }
    }

}
