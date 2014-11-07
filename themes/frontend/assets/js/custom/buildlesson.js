var validate_form = true;
var proceed_to_next = false;

var lesson_assets;

var lesson_assets_index = 0;

function load_skit_data(skitid) {
    show_js_loader(true);
    $.ajax({
        url: full_path + "/ajax-get-skit-data",
        type: "post",
        data: {
            skit_id: skitid
        },
        dataType: "json",
        success: function(response) {
            show_js_loader(false);

            $("input[name='temp_skit_id']").val(response.skit_data.id);

            $(".skit_video_name").val(response.skit_data.video_name);
            $(".skit_audio_name").val(response.skit_data.audio_name);
            $(".skit_image_name").val(response.skit_data.image_name);

            $("#video_choose").parent("div").find("input[type='text']").val(response.skit_data.video_name);
            $("#audio_choose").parent("div").find("input[type='text']").val(response.skit_data.audio_name);
            $("#image_choose").parent("div").find("input[type='text']").val(response.skit_data.image_name);

            if (response.skit_data.skit_type == "V") {
                $("#video_tab").trigger('click');
            } else if (response.skit_data.skit_type == "A") {
                $("#audio_tab").trigger('click');
            } else if (response.skit_data.skit_type == "I") {
                $("#image_tab").trigger('click');
            }

            swap_panel($(".step5"), $(".step3"));

        }
    });
}

function load_quiz_data(quizid) {
    show_js_loader(true);
    $.ajax({
        url: full_path + "/ajax-get-quiz-data",
        type: "post",
        data: {
            quiz_id: quizid
        },
        dataType: "json",
        success: function(response) {
            show_js_loader(false);

            $.each(response.answers, function(index, elem) {
                var answer_holder = $(".answer_holder:eq(" + (index) + ")");
                $(answer_holder).find(".image_name").val(elem.image);
                $(answer_holder)
                        .find(".image_name")
                        .closest(".file_container")
                        .find(".file_name_holder").html(elem.image);

                $(answer_holder)
                        .find(".audio_name")
                        .closest(".file_container")
                        .find(".file_name_holder").html(elem.audio);

                if (elem.audio != "") {
                    $(answer_holder)
                            .find(".audio_holder")
                            .find(".file_cross").addClass('audio_delete');
                } else {
                    $(answer_holder)
                            .find(".audio_holder")
                            .find(".file_cross").removeClass('audio_delete');
                }

                if (elem.image != "") {
                    $(answer_holder)
                            .find(".image_holder")
                            .find(".file_cross").addClass('image_delete');
                } else {
                    $(answer_holder)
                            .find(".image_holder")
                            .find(".file_cross").removeClass('image_delete');
                }

                $(answer_holder).find(".audio_name").val(elem.audio);

                $(answer_holder).find(".answer_text").val(elem.answer);

                // console.debug($(".answer_holder:eq(" + (index) + ")"));

                if (elem.is_answer == "1") {
                    $(answer_holder).find(".answer_chkbox").prop("checked", true);
                }

            });

            $("#question_text").val(response.question_details.question_text);
            $("input[name='audio_file_name_1']").val(response.question_details.audio);
            $("input[name='image_file_name_1']").val(response.question_details.image);

            if (response.question_details.audio != "") {
                $(".audio_delete_question").addClass('audio_delete');
            } else {
                $(".audio_delete_question").removeClass('audio_delete');
            }

            if (response.question_details.image != "") {
                $(".image_delete_question").addClass('image_delete');
            } else {
                $(".image_delete_question").removeClass('image_delete');
            }

            $("input[name='audio_file_name_1']").closest(".file_container").find(".file_name_holder").html(response.question_details.audio);
            $("input[name='image_file_name_1']").closest(".file_container").find(".file_name_holder").html(response.question_details.image);

            $("#question_form").find("input[name='temp_question_id']").val(response.question_details.id);

            swap_panel($(".step5"), $(".step4"));
        },
        error: function(xhr) {
            showJsError("Error Occured");
        }
    });
}

$(document).ready(function(e) {

    $(".start_as").click(function(e) {
        e.preventDefault();
        show_js_loader(true);
        var THIS = $(this);
        $.ajax({
            url: full_path + '/ajax-choose-startas',
            type: "POST",
            dataType: "json",
            data: {
                user_type: $(THIS).attr("data-usertype")
            },
            success: function(data) {
                if (data.status != undefined) {
                    show_js_loader(false);
                    window.location.reload();
                }
            }
        });
    });

    $(".audio_delete_answer").click(function(event) {
        $(this).parent("a").find(".file_container").find("input").val("");
        $(this).parent("a").find(".file_container").find(".file_name_holder").html("");
        $(this).toggleClass("audio_delete");
    });

    $(".image_delete_answer").click(function(event) {
        $(this).parent("a").find(".file_container").find("input").val("");
        $(this).parent("a").find(".file_container").find(".file_name_holder").html("");
        $(this).toggleClass("image_delete");
    });

    $(".audio_delete_question").click(function(event) {
        $(this).parent("a").find(".file_container").find("input").val("");
        $(this).parent("a").find(".file_container").find(".file_name_holder").html("");
        $(this).toggleClass("audio_delete");
    });

    $(".image_delete_question").click(function(event) {
        $(this).parent("a").find(".file_container").find("input").val("");
        $(this).parent("a").find(".file_container").find(".file_name_holder").html("");
        $(this).toggleClass("image_delete");
    });

    $(document).on("click", ".list_quiz", function(e) {
        var quizid = $(this).attr("data-quizid");
        load_quiz_data(quizid);
    });

    $(document).on("click", ".list_skit", function(e) {
        var skitid = $(this).attr("data-skitid");
        load_skit_data(skitid);
    });

    $("#skit_form").find(".bootstrap-filestyle")
            .css("margin", "auto")
            .css("width", "86%")
            .css("margin-top", "3px");

    $("#delete_lesson").click(function(e) {
        e.preventDefault();

        bootbox.confirm("Are you sure you want to delete?", function(result) {
            if (result) {
                show_js_loader(true);
                $.ajax({
                    url: full_path + '/ajax-delete-lesson',
                    type: "post",
                    data: {
                        lesson_id: $("#temp_lesson_id").val()
                    },
                    dataType: "json",
                    success: function(response) {
                        show_js_loader(false);
                        swap_panel($(".stapes-wrap"), $(".banner"));
                        swap_panel($(".step2,.step3,.step4,.step5,.step6"), $(".step1"));
                        $("#lesson_assets").html("");
                        $("#question_form")[0].reset();
                        $("#temp_lesson_id").val("");
                        $("#skit_form")[0].reset();
                        $("#lesson_details_form")[0].reset();
                        $("#tags").tokenInput("clear");
                        $(".token-input-dropdown-facebook").hide();
                    }
                });
            }
        });

    });

    $("#post_lesson").click(function(e) {
        e.preventDefault();

        show_js_loader(true);
        $.ajax({
            url: full_path + '/ajax-post-lesson',
            type: "post",
            data: {
                lesson_id: $("#temp_lesson_id").val()
            },
            dataType: "json",
            success: function(response) {
                show_js_loader(false);
                swap_panel($(".stapes-wrap"), $(".banner"));
                swap_panel($(".step2,.step3,.step4,.step5,.step6"), $(".step1"));
                $("#lesson_assets").html("");
                $("#question_form")[0].reset();
                $("#temp_lesson_id").val("");
                $("#skit_form")[0].reset();
                $("#lesson_details_form")[0].reset();
                $("#tags").tokenInput("clear");
                $(".token-input-dropdown-facebook").hide();
                showSuccess("Lesson posted successfully");
            }
        });
    });

    $("#save_as_draft").click(function(e) {
        e.preventDefault();

        show_js_loader(true);
        $.ajax({
            url: full_path + '/ajax-draft-lesson',
            type: "post",
            data: {
                lesson_id: $("#temp_lesson_id").val()
            },
            dataType: "json",
            success: function(response) {
                show_js_loader(false);
                swap_panel($(".stapes-wrap"), $(".banner"));
                swap_panel($(".step2,.step3,.step4,.step5,.step6"), $(".step1"));
                $("#lesson_assets").html("");
                $("#question_form")[0].reset();
                $("#temp_lesson_id").val("");
                $("#skit_form")[0].reset();
                $("#lesson_details_form")[0].reset();
                $("#tags").tokenInput("clear");
                $(".token-input-dropdown-facebook").hide();
                showSuccess("Lesson saved as draft");
            }
        });
    });

    $("#tags").tokenInput(real_full_path + "/ajax-fetch-tags", {
        theme: 'facebook',
        zindex: 9999999,
        preventDuplicates: true,
        hintText: "Enter tag",
        searchingText: "Please wait...",
        allowFreeTagging: true,
        freeTaggingText: "Use",
        tokenValue: "name",
        autoSelectFirstResult: false,
        onResult: function(data) {
            var exists = {};
            $($(this).val().split(",")).each(function(i, val) {
                exists[val] = true;
            });
            return $.grep(data, function(val) {
                return !(exists[val.id]);
            });
        }
    });

    $(".token-input-list-facebook").css("width", "345px");

    $.each($(".rec-icon"), function(index, element) {
        $(element).attr("href", "javascript:void(0)");
    });

    $(".audio_file").change(function(e) {
        var ext = $(this).val().split('.').pop();
        if (ext.toLowerCase() == "mp3") {
            var file_name = $(this).val().replace(/^.*[\\\/]/, '');
            $(this).closest(".file_container").find(".file_name_holder").html(file_name);
            $(this).wrap('<form id="upload_form" method="post" enctype="multipart/form-data"></form>');

            upload_file("A", $(this).attr("id"), $("input[name='audio_file_name_" + $(this).attr("data-fileindex") + "']"));
            $(this).closest(".file_container").parent("a").find(".audio_delete_question").addClass("audio_delete");
            $(this).closest(".file_container").parent("a").find(".audio_delete_answer").addClass("audio_delete");
        } else {
            $(this).val("");
            $(this).closest(".file_container").parent("a").find(".audio_delete_answer").removeClass("audio_delete");
            $(this).closest(".file_container").parent("a").find(".audio_delete_question").removeClass("audio_delete");
            showJsError("Only .mp3 file supported");
        }
    });

    $(".image_file").change(function(e) {
        var ext = $(this).val().split('.').pop();
        if (ext.toLowerCase() == "jpg" || ext.toLowerCase() == "jpeg" || ext.toLowerCase() == "png" || ext.toLowerCase() == "gif") {
            var file_name = $(this).val().replace(/^.*[\\\/]/, '');
            $(this).closest(".file_container").find(".file_name_holder").html(file_name);
            $(this).wrap('<form id="upload_form" method="post" enctype="multipart/form-data"></form>');

            upload_file("I", $(this).attr("id"), $("input[name='image_file_name_" + $(this).attr("data-fileindex") + "']"));
            $(this).closest(".file_container").parent("a").find(".image_delete_question").addClass("image_delete");
            $(this).closest(".file_container").parent("a").find(".image_delete_answer").addClass("image_delete");
        } else {
            $(this).val("");
            $(this).closest(".file_container").parent("a").find(".image_delete_question").removeClass("image_delete");
            $(this).closest(".file_container").parent("a").find(".image_delete_answer").removeClass("image_delete");
            showJsError("Only image supported");
        }
    });

    $("#video_choose").change(function(e) {
        var ext = $(this).val().split('.').pop();
        if (ext.toLowerCase() == "mp4" || ext.toLowerCase() == "flv") {
            var file_name = $(this).val().replace(/^.*[\\\/]/, '');

            $("#video_choose").wrap('<form id="upload_form" method="post" enctype="multipart/form-data"></form>');

            upload_file("V", "video_choose", $("input[name='video_file_name']"));
        } else {
            showJsError("Only .flv and .mp4 file supported");
            $(this).val("");
            return false;
        }
    });

    $(".step1,.step2,.step3,.step4,.step5,.step6").hide();

    $(".step1").show();

    $("#get_started").click(function(e) {
        $("#start_as_wrapper").fadeIn('slow');
    });

    $("#get_started_guide").click(function() {
        $("#start_as_wrapper").fadeOut('normal', function() {
            swap_panel($(".banner"), $(".stapes-wrap-build-lesson"));
        });
        // swap_panel($(".banner"), $(".stapes-wrap"));
        // swap_panel($(".step1"), $(".step3"));

    });

    $("#build_lesson").click(function(e) {
        swap_panel($(".step1"), $(".step2"));
    });

    $("#step2_done").click(function(e) {
        bootbox.dialog({
            message: "I Want To",
            title: "Build Lesson",
            buttons: {
                success: {
                    label: "Save And Exit!",
                    className: "btn-primary",
                    callback: function() {
                        create_update_lession($(".stapes-wrap-build-lesson"), $(".banner"));
                    }
                },
                warning: {
                    label: "Save And Continue!",
                    className: "btn-primary",
                    callback: function() {
                        create_update_lession($(".step2"), $(".step2"));
                    }
                },
                danger: {
                    label: "Finish",
                    className: "btn-primary",
                    callback: function() {
                        create_update_lession($(".step2"), $(".step5"));
                    }
                },
                main: {
                    label: "Cancel",
                    className: "btn-primary",
                    callback: function() {

                    }
                }
            }
        });
        but = $(".modal-footer").find('button');
        but.css({'margin-right': '5px'});
        but.eq(0).data({
            toogle: 'popover',
            placement: 'top',
            content: 'Save current data and exit from build lession.',
            'original-title': 'Info'
        });
        but.eq(1).data({
            toogle: 'popover',
            placement: 'top',
            content: 'Save current data and provide facility to add new.',
            'original-title': 'Info'
        });
        but.eq(2).data({
            toogle: 'popover',
            placement: 'top',
            content: 'I have completed the build lession.',
            'original-title': 'Info'
        });
        but.eq(3).data({
            toogle: 'popover',
            placement: 'top',
            content: 'I want to change somthing in current page.',
            'original-title': 'Info'
        });
        /*but.hover(function() {
            $(this).css({'margin-right': '5px'});
        });*/
        but.popover({trigger: 'hover', placement: 'top'});
    });

    $("#create_skit_step2").click(function(e) {
        create_update_lession($(".step2"), $(".create_skit"));
    });

    $("#create_quiz_step2").click(function(e) {
        create_update_lession($(".step2"), $(".create_quiz"));
    });

    $("#create_skit_step3").click(function(e) {
        create_update_skit($(".step3"), $(".create_skit"));
    });

    $("#create_quiz_step3").click(function(e) {
        create_update_skit($(".step3"), $(".create_quiz"));
    });

    $("#step3_done").click(function(e) {
//        bootbox.confirm("Do you want to save?", function(result) {
//            if (result) {
//                create_update_skit($(".step3"), $(".step5"));
//            } else {
//                swap_panel($(".step3"), $(".step5"));
//                $("#skit_form")[0].reset();
//            }
//        });

        bootbox.dialog({
            message: "I Want To",
            title: "Build Lesson",
            buttons: {
                success: {
                    label: "Save And Exit!",
                    className: "btn-primary",
                    callback: function() {
                        create_update_skit($(".stapes-wrap-build-lesson"), $(".banner"));
                    }
                },
                warning: {
                    label: "Save And Continue!",
                    className: "btn-primary",
                    callback: function() {
                        create_update_skit($(".step3"), $(".step3"));
                    }
                },
                danger: {
                    label: "Finish",
                    className: "btn-primary",
                    callback: function() {
                        validate_form = false;
                        create_update_skit($(".step3"), $(".step5"));
                        validate_form = true;
                    }
                },
                main: {
                    label: "Cancel",
                    className: "btn-primary",
                    callback: function() {

                    }
                }
            }
        });
    });

    $("#create_skit_step4").click(function(e) {
        create_update_quiz($(".step4"), $(".create_skit"));
    });

    $("#create_quiz_step4").click(function(e) {
        create_update_quiz($(".step4"), $(".create_quiz"));
    });

    $("#step4_done").click(function(e) {
//        bootbox.confirm("Do you want to save?", function(result) {
//            if (result) {
//                create_update_quiz($(".step4"), $(".step5"));
//            } else {
//                swap_panel($(".step4"), $(".step5"));
//                $("#question_form")[0].reset();
//            }
//        });
        bootbox.dialog({
            message: "I Want To",
            title: "Build Lesson",
            buttons: {
                success: {
                    label: "Save And Exit!",
                    className: "btn-primary",
                    callback: function() {
                        create_update_quiz($(".stapes-wrap-build-lesson"), $(".banner"));
                    }
                },
                warning: {
                    label: "Save And Continue!",
                    className: "btn-primary",
                    callback: function() {
                        create_update_quiz($(".step4"), $(".step4"));
                    }
                },
                danger: {
                    label: "Finish",
                    className: "btn-primary",
                    callback: function() {
                        validate_form = false;
                        create_update_quiz($(".step4"), $(".step5"));
                        validate_form = true;
                    }
                },
                main: {
                    label: "Cancel",
                    className: "btn-primary",
                    callback: function() {

                    }
                }
            }
        });
    });

    $(".edit-first").click(function(event) {
        swap_panel($(".step1,.step3,.step4,.step5,.step6"), $(".step2"));
    });

    $("#video_tab,#audio_tab,#image_tab").click(function(e) {
        var id = $(this).attr("id");
        var skit_type = "V";
        switch (id) {
            case "video_tab":
                skit_type = "V";
                break;

            case "audio_tab":
                skit_type = "A";
                break;

            case "image_tab":
                skit_type = "I";
                break;
        }

        $("#skit_form").find("#skit_type").val(skit_type);
    });

    $("#audio_choose").change(function(e) {
        var ext = $(this).val().split('.').pop();
        if (ext.toLowerCase() == "mp3") {
            var file_name = $(this).val().replace(/^.*[\\\/]/, '');
            $("#audio_choose").wrap('<form id="upload_form" method="post" enctype="multipart/form-data"></form>');

            upload_file("A", "audio_choose", $("input[name='audio_file_name']"));
        } else {
            showJsError("Only .mp3 file supported");
            $(this).val("");
            return false;
        }
    });

    $("#image_choose").change(function() {
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
        if (regex.test($(this).val().toLowerCase())) {
            if ($.browser.msie && parseFloat(jQuery.browser.version) <= 9.0) {
                $("#skit_preview_image")[0].filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = $(this).val();
            } else {
                if (typeof (FileReader) != "undefined") {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        $("#skit_preview_image").attr("src", e.target.result);
                    }
                    reader.readAsDataURL($(this)[0].files[0]);
                } else {
                    showJsError("This browser does not support FileReader.");
                }
            }
            $("#image_choose").wrap('<form id="upload_form" method="post" enctype="multipart/form-data"></form>');

            upload_file("I", "image_choose", $("input[name='image_file_name']"));
        } else {
            showJsError("Please upload a valid image file.");
        }
    });

    $("ul#tabs li").click(function(e) {
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum + 1;
            $("ul#tabs li.active").removeClass("active");
            $(this).addClass("active");
            $("ul#tab li.active").removeClass("active");
            $("ul#tab li:nth-child(" + nthChild + ")").addClass("active");
        }
    });

    //Ajax Calling Part

    $("#stage").change(function(e) {
        if ($(this).val() != "") {

            $("#category").html("<option value=''>Please Wait...</option>");

            $.ajax({
                url: full_path + "/ajax-fetch-category",
                type: "POST",
                data: {
                    stage_id: $(this).val(),
                    selected: selected_cat
                },
                dataType: "json",
                success: function(response) {
                    var str = "<option value=''>Select</option>";
                    str += response.data;
                    $("#category").html(str);
                },
                error: function(e) {
                    showError("Something Went Wrong");
                }
            });
            if ($(this).val() == 3) {
                $("#level_select").attr("disabled", "disabled");
                $("#level_select").val("1");
            } else {
                $("#level_select").removeAttr("disabled");
            }
        } else {
            $("#category").html("<option value=''>Select</option>");
        }
    });
});

function upload_file(file_type, file_input, file_name_div) {
    // $("#" + file_input).closest(".file_container").find(".file_name_holder").html("");
    $('#upload_form').attr("action", full_path + "/ajax-upload-files");

    $('#upload_form')
            .find("input")
            .attr("name", "upload_file");

    $("<input type='hidden' name='file_type' value='" + file_type + "' />").appendTo($("#upload_form"));

    $('#upload_form').ajaxForm({
        beforeSend: function() {
            var percentVal = '0';
            show_progress(true, percentVal);
        },
        uploadProgress: function(event, position, total, percentComplete) {
            var percentVal = percentComplete;
            show_progress(true, percentVal);
        },
        success: function() {
            var percentVal = '100';
            show_progress(true, percentVal);
        },
        complete: function(xhr) {
            var data = $.parseJSON(xhr.responseText);
            if (data.status != undefined || data.status == "success") {
                $('#upload_form').find("input[type='hidden']").remove();
                $("#" + file_input).unwrap();
                $("#" + file_input).val("");
                $("#" + file_input).closest(".file_container").find(".file_name_holder").html(data.file_name);
                $(file_name_div).val(data.file_name);
                show_progress(false, 0);
            }
        }
    });

    $("#upload_form").trigger("submit");
}

function swap_panel(hide_div, show_div) {
    $(hide_div).fadeOut('slow', function(e) {
        $(show_div).fadeIn('slow');
    });
}

function required_validated(value) {
    if ($.trim(value).toString().length > 0) {
        return true;
    } else {
        return false;
    }
}

function create_update_lession(hide_div, show_div) {

    var error_msg = "";
    if (required_validated($("#language_id").val()) === false) {
        error_msg = "Please Select Language";
    } else if (required_validated($("#title").val()) === false) {
        error_msg = "Please Enter Title";
    } else if (required_validated($("#stage").val()) === false) {
        error_msg = "Please Select Stage";
    } else if (required_validated($("#category").val()) === false) {
        error_msg = "Please Select Category";
    } else if (required_validated($("#tags").val()) === false) {
        error_msg = "Please Enter Tags";
    } else if (required_validated($("#memo").val()) === false) {
        error_msg = "Please Enter Memo";
    }

    if (error_msg != "") {
        showJsError(error_msg);
    } else {

        show_js_loader(true);
        $.ajax({
            url: full_path + "/ajax-create-update-lesson",
            type: "post",
            data: $("#lesson_details_form").serialize(),
            dataType: "json",
            success: function(response) {
                if (response.status != undefined && response.status == "success") {
                    $("#temp_lesson_id").val(response.lesson_id);
                    proceed_to_next = true;
                    show_js_loader(false);
                    swap_panel(hide_div, show_div);
                } else {
                    showJsError(response.message);
                }
            }
        });
    }
}

var selected_cat = 0;

function load_lesson_data(lessonid) {

    $.ajax({
        url: full_path + '/ajax-get-lesson-data',
        type: 'POST',
        dataType: 'json',
        data: {
            lesson_id: lessonid
        },
        success: function(response) {
            var counter = 1;
            selected_cat = response.lesson_data.category_id;

            $("#language_id").val(response.lesson_data.language_id);
            $("#title").val(response.lesson_data.title);
            $("#stage").val(response.lesson_data.stage_id).trigger("change");
            $("#level_select").val(response.lesson_data.level);
            $("#memo").val(response.lesson_data.memo);

            $("input[name='temp_lesson_id']").val(response.lesson_data.id);
            $("input[name='lesson_id']").val(response.lesson_data.id);

            $.each(response.lesson_tags, function(index, val) {
                $("#tags").tokenInput("add", {
                    id: val.id,
                    name: val.name
                });
            });

            $.each(response.lesson_assets, function(index, val) {
                var str = "";
                if (val.type == "S") {
                    str = "<li class='list_skit' data-skitid='" + val.id + "'>" + counter + ". Skit</li>";
                } else if (val.type == "Q") {
                    str = "<li class='list_quiz' data-quizid='" + val.id + "'>" + counter + ". Quiz</li>";
                }
                $(str).appendTo('#lesson_assets');
                counter++;
            });
        }
    });

}

function create_update_skit(hide_div, show_div) {
    var error_msg = "";

    var form = $("#skit_form");

    var skit_type = $("#skit_form").find("#skit_type").val();

    if (skit_type == "V" && required_validated($(form).find("input[name='video_file_name']").val()) == false) {
        error_msg = "Please select a video";
    } else if (skit_type == "A" && required_validated($(form).find("input[name='audio_file_name']").val()) == false) {
        error_msg = "Please select an audio";
    } else if (skit_type == "I" && required_validated($(form).find("input[name='image_file_name']").val()) == false) {
        error_msg = "Please select an image";
    }

    if (error_msg != "" && validate_form == true) {
        showJsError(error_msg);
    } else if (error_msg != "" && validate_form == false) {
        $("#skit_form")[0].reset();
        $("#skit_preview_image").attr("src", "");
        swap_panel(hide_div, show_div);

        $("input[name='video_file_name']").val("");
        $("input[name='audio_file_name']").val("");
        $("input[name='image_file_name']").val("");
    } else {

        $('#skit_form').attr("action", full_path + "/ajax-create-update-skit");

        $('#skit_form').find("input[name='lesson_id']").val($("#temp_lesson_id").val());

        $('#skit_form').ajaxForm({
            beforeSend: function() {
                show_js_loader(true);
                //                status.empty();
                //                var percentVal = '0%';
                //                bar.width(percentVal)
                //                percent.html(percentVal);
            },
            uploadProgress: function(event, position, total, percentComplete) {
                //                var percentVal = percentComplete + '%';
                //                bar.width(percentVal)
                //                percent.html(percentVal);
                //console.log(percentVal, position, total);
            },
            success: function() {
                //                var percentVal = '100%';
                //                bar.width(percentVal)
                //                percent.html(percentVal);
            },
            complete: function(xhr) {
                var data = $.parseJSON(xhr.responseText);
                if (data.status != undefined || data.status == "success") {
                    $("#skit_form")[0].reset();
                    $("#skit_preview_image").attr("src", "");
                    show_js_loader(false);
                    lesson_assets_index += 1;

                    var this_skit = $("li[data-skitid='" + data.skitid + "']").length;
                    if (this_skit == 0) {
                        $("<li class='list_skit' data-skitid='" + data.skitid + "'>" + (lesson_assets_index) + ". Skit</li>").appendTo("#lesson_assets");
                        showSuccess("Skit added successfully");
                    } else {
                        showSuccess("Skit updated successfully");
                    }

                    swap_panel(hide_div, show_div);

                    $("input[name='video_file_name']").val("");
                    $("input[name='audio_file_name']").val("");
                    $("input[name='image_file_name']").val("");
                }
            }
        });

        $("#skit_form").trigger("submit");
    }
}

function create_update_quiz(hide_div, show_div) {
    var error_msg = "";
    var answer_checked = $(".chkbox:checked").length;
    var value_present = false;
    //    console.debug(answer_checked);

    $(".answer_holder").css("border", "solid 1px #ececec");
    $(".question_holder").css("border", "solid 1px #ececec");

    if (required_validated($("#question_form").find("input[name='audio_file_name_1']").val()) == false && required_validated($("#question_form").find("input[name='image_file_name_1']").val()) == false && required_validated($("#question_text").val()) == false) {
        error_msg = "Please enter Image or Audio or Text for question";
        $(".question_holder").css("border", "solid 1px brown");
    } else if (answer_checked == 0) {
        value_present = true;
        error_msg = "Please select correct answer(s) from the checkboxes at the right";
    } else {
        value_present = true;
        var checked_elements = $(".chkbox:checked");
        var all_found = true;
        $.each(checked_elements, function(index, elem) {
            if (required_validated($(elem).closest(".row").find(".audio_name").val()) == false && required_validated($(elem).closest(".row").find(".image_name").val()) == false && required_validated($(elem).closest(".row").find(".answer_text").val()) == false) {
                all_found = false;
                $(elem).closest(".row").find(".answer_holder").css("border", "solid 1px brown");
            }

            if (all_found == false) {
                error_msg = "Please specify Image or Audio or Text for selected answer(s)";
            }
        });
    }

    if (error_msg != "" && validate_form == true) {
        showJsError(error_msg);
    } else if (error_msg != "" && value_present == true && validate_form == false) {
        showJsError(error_msg);
    } else if (error_msg != "" && value_present == false && validate_form == false) {
        $("#question_form")[0].reset();
        $(".file_name_holder").html("");
        $(".audio_name,.image_name").val("");
        $("input[name='image_file_name_1']").val("");
        $("input[name='audio_file_name_1']").val("");
        swap_panel(hide_div, show_div);
    } else {

        var bar = $('.bar');
        var percent = $('.percent');
        var status = $('#status');

        $('#question_form').attr("action", full_path + "/ajax-create-update-quiz");

        $('#question_form').find("input[name='lesson_id']").val($("#temp_lesson_id").val());

        $('#question_form').ajaxForm({
            beforeSend: function() {
                show_js_loader(true);
                //                status.empty();
                //                var percentVal = '0%';
                //                bar.width(percentVal)
                //                percent.html(percentVal);
            },
            uploadProgress: function(event, position, total, percentComplete) {
                //                var percentVal = percentComplete + '%';
                //                bar.width(percentVal)
                //                percent.html(percentVal);
                //console.log(percentVal, position, total);
            },
            success: function() {
                //                var percentVal = '100%';
                //                bar.width(percentVal)
                //                percent.html(percentVal);
            },
            complete: function(xhr) {
                var data = $.parseJSON(xhr.responseText);
                if (data.status != undefined || data.status == "success") {
                    $("#question_form")[0].reset();
                    $(".file_name_holder").html("");
                    $(".audio_name,.image_name").val("");
                    $("input[name='image_file_name_1']").val("");
                    $("input[name='audio_file_name_1']").val("");
                    show_js_loader(false);
                    lesson_assets_index += 1;
                    var this_quiz = $("li[data-quizid='" + data.quizid + "']").length;
                    if (this_quiz == 0) {
                        $("<li class='list_quiz' data-quizid='" + data.quizid + "'>" + (lesson_assets_index) + ". Quiz</li>").appendTo("#lesson_assets");
                        showSuccess("Quiz added successfully");
                    } else {
                        showSuccess("Quiz updated successfully");
                    }

                    swap_panel(hide_div, show_div);
                }
            }
        });

        $("#question_form").trigger("submit");
    }
}