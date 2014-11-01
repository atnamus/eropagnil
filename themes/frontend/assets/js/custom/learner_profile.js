$(document).ready(function(e) {
    $("#follow_unfollow").click(function(e) {
        e.preventDefault();
        show_js_loader(true);
        var THIS=$(this);
        $.ajax({
            url: full_path + "/ajax-follow-user",
            type: "POST",
            dataType: "json",
            data: {
                following_id: $(THIS).attr("data-userid")
            },
            success: function(data) {
                show_js_loader(false);
                if (data.status != undefined && data.status == "success") {
                    window.location.reload();
                }
            }
        });
    });
    
    $("#load_entries_written").click(function(e){
        
    });
    
});