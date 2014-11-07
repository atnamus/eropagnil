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
adad
</div>
<?php
$this->loadCss("widget-calendar.css");
?>