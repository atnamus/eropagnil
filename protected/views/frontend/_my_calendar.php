<?php
$this->widget('application.components.widgets.calendar-advance.AdvanceCalendarWidget', array('month' => $month, 'year' => $year, 'events' => $events));
?>
<style>
    .have-event{
        background:#64B0D2 !important;
        color:#fff !important;
    }
</style>