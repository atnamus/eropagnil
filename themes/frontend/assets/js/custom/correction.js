$(document).ready(function() {
    $("#correction_form").submit(function(event) {
        event.preventDefault();
        show_js_loader(true);
        $.ajax({
            url: full_path + '/ajax-save-correction',
            type: 'POST',
            dataType: 'json',
            data: $("#correction_form").serialize(),
            success: function(response) {
                show_js_loader(false);
                if (response.status == "success") {
                    window.location.href = full_path + "/correction-details/" + response.correction_id;
                } else if (response.status == "error") {
                    showJsError(response.message);
                }
            }
        });

    });

    $("#publish_correction").click(function(e) {
        $("#correction_form").trigger('submit');
    });
    
    $("#update_form").submit(function(event) {
        event.preventDefault();
        show_js_loader(true);
        $.ajax({
            url: full_path + '/ajax-update-correction',
            type: 'POST',
            dataType: 'json',
            data: $("#update_form").serialize(),
            success: function(response) {
                show_js_loader(false);
                if (response.status == "success") {
//                    window.location.href = full_path + "/correction-details/" + response.correction_id;
                    window.location.reload();
                } else if (response.status == "error") {
                    showJsError(response.message);
                }
            }
        });

    });

    $("#save_correction").click(function(e) {
        $("#update_form").trigger('submit');
    });

    $("#correction_like").click(function(e) {
        var correction_id = $(this).attr("data-correctionid");
        show_js_loader(true);
        $.ajax({
            url: full_path + '/ajax-like-correction',
            type: 'POST',
            dataType: 'json',
            data: {
                correctionid: correction_id
            },
            success: function(response) {
                show_js_loader(false);
                if (response.status == "success") {
                    $("#liked_container").html(response.html);
                    $("#correction_like").css("visibility", "hidden");
                } else {
                    showJsError(response.message);
                }
            }
        });

    });

    $("#corrections_tab").click(function(e) {
        e.preventDefault();
        show_js_loader(true);
        $.ajax({
            url: full_path + '/ajax-load-corrections',
            type: 'POST',
            dataType: 'json',
            success: function(response) {
                if (response.entries_written != undefined) {
                    $("#entrWritten").html(response.entries_written);
                    $("#visitors").html(response.correction_visitors);
                }
                show_js_loader(false);
            }
        });


    });

    $(".intro_line").hover(function(e) {
        if ($(this).attr("data-perfect") == "0") {
            $(this).find(".btn-perfect").show();
        }
    }, function(e) {
        if ($(this).attr("data-perfect") == "0") {
            $(this).find(".btn-perfect").hide();
        }
    });

    $(".btn-perfect").click(function(e) {
        e.preventDefault();
        var str = '<span id="perfect_sentence_1" class="perfect_sentence draft_correct">This sentence is perfect! No correction needed!</span>';
        str += '<a id="remove_new_string_link_1" class="remove_new_string_link" title="delete this correction" style="display: inline;">X</a>';
        $(this).closest(".intro_line").find(".perfect_sentence_panel").html(str);
        $(this).closest(".intro_line").attr("data-perfect","1");
        $(this).hide();
    });
    
    $(document).on("click",".remove_new_string_link",function(e){
        $(this).closest(".intro_line").attr("data-perfect","0");
        $(this).closest(".perfect_sentence_panel").html("");
    });
    
});