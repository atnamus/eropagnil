<?php

class CGlobal extends CApplicationComponent {

    function new_line($text) {
        $str = "";
        $expl = explode("\n", $text);

        foreach ($expl as $key => $val) {
            $str.=$val . "<br/>";
        }

        return $str;
    }

    function get_lesson_title($title, $intro_line) {
        $title = $title;
        if ($title == "") {
            $expl = explode("\n", $intro_line);
            if (count($expl) > 0) {
                $title = $expl[0];
            } else {
                $title = $intro_line;
            }
        }

        return $title;
    }

}
