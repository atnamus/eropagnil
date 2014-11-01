<!--<div class="container">
    <table class="table table-bordered">
        <thead>
            <tr>
                <th><span id="anio"></span></th>
                <th colspan="5" style="padding: 0px; line-height: 38px;">
                    <a class="prev" onclick="Go('prev')" href="javascript:void(0)"></a>
                    <span id="mes"></span>
                    <a class="next" onclick="Go('next')" href="javascript:void(0)"></a>
                </th>
                <th style="padding: 0px; line-height: 40px;">
                    <a class="today" onclick="Go('today')" href="javascript:void(0)">TODAY</a>
                </th>
            </tr>
            <tr class="weekdays info" id="monday">
                 WEEKDAYS 
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
</div>-->
<?php
//$this->loadCss("modern-style.css");
//
//$this->loadJs(
//        array(
//            "json2.js",
//            "script.js",
//            "jquery-ui.js",
//            "jquery-ui.js",
//            "timepicker-addon.js",
//        )
//);
?>
<script>
    $(document).ready(function(e) {
        $(document).on("click", ".cal_nav", function(e) {
            e.preventDefault();
            fetch_events($(this).attr("data-month"), $(this).attr("data-year"));
        });
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();
        fetch_events("<?php echo date("m"); ?>", "<?php echo date("Y"); ?>");
    });

    function fetch_events(month, year) {
        var curr_month = month;
        var curr_year = year;
        $.ajax({
            url: full_path + "/ajax-get-calender-events",
            type: "POST",
            data: {
                month: curr_month,
                year: curr_year
            },
            success: function(response) {
                $("#calendar_holder").html(response);
            }
        });
    }
</script>
<div id="calendar_holder">

</div>
<?php
$this->loadCss("widget-calendar.css");
?>