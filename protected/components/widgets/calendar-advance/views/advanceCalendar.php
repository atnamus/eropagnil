<div class='cal-header'>
    <?php
    $this->storePreviousLink = CHtml::link("&nbsp;", "javascript:void(0)", array("class" => "cal_nav cal-nav-prev", "data-month" => $this->previousMonth, "data-year" => $this->yearPreviousMonth));

    $this->storeNextLink = CHtml::link("&nbsp;", "javascript:void(0)", array("class" => "cal_nav cal-nav-next", "data-month" => $this->nextMonth, "data-year" => $this->yearNextMonth));
    echo $this->printStartForm();
    echo $this->storePreviousLink;

    echo "<h2 class='cal-title'>" . $this->title . "</h2>";

    echo $this->storeNextLink;
    echo $this->printCloseForm();
    echo $this->printCalendar();
    ?>
</div>