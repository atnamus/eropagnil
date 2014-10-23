  $(document).ready(function() {
        $.timeago(new Date());
       
        $(".timeago").livequery(function()
        {
            $(this).timeago();
        });
    });
