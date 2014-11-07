function fetch_events(month, year) {
    //show_js_loader(true);
    var curr_month = month;
    var curr_year = year;
    $.ajax({
        url: full_path + "/ajax-get-calender-events",
        type: "POST",
        data: {
            month: curr_month,
            year: curr_year,
            user_id: $("#calendar_user_id").val()
        },
        success: function(response) {
            //show_js_loader(false);
            $("#calendar_holder").html(response);
        }
    });
}

var pindex = 0;
var stop_flag = false;

function get_user_corrections()
{
    if (stop_flag == false)
    {
        var starts = (pindex * 10);

        show_js_loader(true);

        $.ajax({
            url: full_path + "/ajax-fetch-user-corrections",
            type: "post",
            data: {
                start: starts,
                user_id: $("#calendar_user_id").val(),
                date: $("#modal_body").attr("data-date")
            },
            success: function(data)
            {
                var html = $("#modal_body").html();
                $("#modal_body").html(html + data);
                show_js_loader(false);
                if (data != '')
                {
                    pindex++;
                }
                else
                {
                    stop_flag = true;
                }
            }
        });
    }
}

$(document).ready(function() {
    $(".go_to_correct_area a.com-cor-btn").click(function(e) {
        e.preventDefault();
        $("#correc-comm-araea").show();
        $("#main_comment_box").focus();
    });
//
//    $(window).scroll(function() {
//        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
//            get_user_corrections();
//        }
//    });

    $("#modal_body").scroll(function() {
        if ($(this).scrollTop() + $(this).innerHeight() >= this.scrollHeight) {
            get_user_corrections();
        }
        $("#modal_body").getNiceScroll().resize();
    });

    $("#modal_body").niceScroll({cursorcolor: "#FFAA66", cursorborderradius: "10px", cursorwidth: 10});

    $(document).on("click", ".correction_cal_view", function(e) {
        show_js_loader(true);
        var THIS = $(this);
        pindex = 0;
        stop_flag = false;
        $("#modal_body").html("");
        $("#modal_body").attr("data-date", $(THIS).attr("data-date"));
        $.ajax({
            url: full_path + "/ajax-fetch-user-corrections",
            type: "POST",
            data: {
                user_id: $("#calendar_user_id").val(),
                date: $("#modal_body").attr("data-date")
            },
            success: function(response) {
                show_js_loader(false);
                pindex++;
                console.debug(response);
                $("#modal_title").html("Corrections");
                $("#modal_body").html(response);
                $('#largemoadal').modal('show');
                $("#modal_body").getNiceScroll().resize();

//                $("#modal_body").getNiceScroll().remove();
//                $("#modal_body").niceScroll({cursorcolor: "#FFAA66", cursorborderradius: "10px", cursorwidth: 10,railoffset:true});
                $("#modal_body").scrollTop(0);
            }
        });
    });

    $('#largemoadal').on('hide', function() {
        console.log('hide');
    });

    $('#largemoadal').on('hidden.bs.modal', function() {
        // do something…
        $("#modal_body").getNiceScroll().remove();
        $("#modal_body").niceScroll({cursorcolor: "#FFAA66", cursorborderradius: "10px", cursorwidth: 10, railoffset: true});
        $(this).removeData('bs.modal');
    })

    $(document).on("click", ".cal_nav", function(e) {
        e.preventDefault();
        fetch_events($(this).attr("data-month"), $(this).attr("data-year"));
    });

//    fetch_events();

    $("#visible_to").change(function(e) {
        if ($(this).val() == "4") {

        }
    });

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
        $(this).hide();
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
                    $("#corctReciv").html(response.correction_recieved);
                    $("#corctMade").html(response.correction_made);
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
        $(this).closest(".intro_line").attr("data-perfect", "1");
        $(this).closest(".intro_line").find(".line_perfect_input").val("1");
        $(this).hide();
    });

    $(".btn-correct").click(function(e) {
        e.preventDefault();
        var opened = $(this).attr("data-correct");
        if (opened == 0) {
            $(this).attr("data-correct", "1");
            $(this).closest(".intro_line").attr("data-correct", "1");
            $(this).closest(".intro_line").find(".line_perfect_input").val("0");
            $(this).closest(".intro_line").find(".correction_panel").show();
        } else {
            $(this).attr("data-correct", "0");
            $(this).closest(".intro_line").attr("data-correct", "0");
            $(this).closest(".intro_line").find(".line_perfect_input").val("2");
            $(this).closest(".intro_line").find(".correction_panel").hide();
        }
    });

    $(document).on("click", ".remove_new_string_link", function(e) {
        $(this).closest(".intro_line").attr("data-perfect", "0");
        $(this).closest(".intro_line").find(".line_perfect_input").val("0");
        $(this).closest(".perfect_sentence_panel").html("");
    });

    $(".preview_correction").click(function(e) {
        e.preventDefault();
        tinyMCE.triggerSave();
        $(this).parent("div").parent("div").find("div[id*='mceu_']").hide();
        var correction = $(this).parent("div").parent("div").find(".corrected_line").val();
        var correction_comment = $(this).parent("div").parent("div").find(".correction_comment").val();
        $(this).parent("div").parent("div").find(".preview_correction_holder").html(correction);
        $(this).parent("div").parent("div").find(".correction_comment_holder").html(correction_comment);
        $(this).parent("div").parent("div").find(".correction_comment").hide();
        $(this).parent("div").parent("div").find(".c_com_label").hide();
        $(this).parent("div").parent("div").find(".c_bom_btn").hide();
    });

    $("#post_correction").click(function(e) {
        e.preventDefault();
        tinyMCE.triggerSave();
        show_js_loader(true);
        $.ajax({
            url: full_path + '/ajax-post-correction-comment',
            type: 'POST',
            dataType: 'json',
            data: $("#correction_comment_form").serialize(),
            success: function(response) {
                show_js_loader(false);
                if (response.status == "success") {
                    window.location.reload();
                } else if (response.status == "error") {
                    showJsError(response.message);
                }
            }
        });
    });

    $(document).on("click", ".like_comment", function(e) {
        var commentid = $(this).attr("data-commentid");
        var correctionid = $(this).attr("data-correctionid");
        var THIS = $(this);
        show_js_loader(true);
        $(THIS).hide();
        $.ajax({
            url: full_path + "/ajax-like-comment",
            type: "POST",
            dataType: "json",
            data: {comment_id: commentid, correction_id: correctionid},
            success: function(data) {
//                console.debug(data);
                show_js_loader(false);
                if (data.status == "success") {
                    $(THIS).parent("div").find(".like_text").html(data.html);
                    $(THIS).remove();
                }
            }, error: function(xhr) {
                console.log("OOPS! SOMETHING WENT WRONG");
            }
        });

    });

    $(".post_comment_label").click(function(e) {
        e.preventDefault();
        $(".correction_related").hide();
        $(".comment_related").show();
        $(this).hide();
        $(".post_correction_label").show();
        $("#comment_type").val("1");
    });

    $(".post_correction_label").click(function(e) {
        e.preventDefault();
        $(".correction_related").show();
        $(".comment_related").hide();
        $(this).hide();
        $(".post_comment_label").show();
        $("#comment_type").val("0");
    });

//    $('.normal_comment_box').keydown(function(e) {
//        if (e.ctrlKey && e.keyCode == 13) {
//            
//        }
//    });

    $(".reply-btn").click(function(e) {
        var THIS = $(this).parent("div").parent("div").find(".normal_comment_box");

        if ($.trim($(THIS).val()) != "") {
            show_js_loader(true);
            var comment = $(THIS).val();
            $(THIS).val("");
            $.ajax({
                url: full_path + "/ajax-post-child-comment",
                type: "post",
                data: {
                    parent_id: $(THIS).attr("data-commentid"),
                    correction_id: $(THIS).attr("data-correctionid"),
                    comment_text: comment,
                },
                success: function(data) {
                    $(THIS).closest(".reply_comment_field").find(".child_comments_holder").html(data);
                    show_js_loader(false);
                }
            });
        } else {
            $(THIS).focus();
        }
    });

    $("#view_native_text").click(function(e) {
        if ($("#native_text").is(":visible")) {
            $("#native_text").fadeOut('slow');
        } else {
            $("#native_text").fadeIn('slow');
        }
    });

    $(".comment_thanks").click(function(e) {
        var commentid = $(this).attr("data-commentid");
        var correctionid = $(this).attr("data-correctionid");
        var THIS = $(this);
        $.ajax({
            url: full_path + "/ajax-correct-comment-mark",
            type: "POST",
            dataType: "json",
            data: {comment_id: commentid, correction_id: correctionid},
            success: function(data) {
                console.debug(data);
                if (data.status == "success") {
                    $(THIS).parent("div").find(".thank_after").show();
                    $(THIS).remove();
                }
            }, error: function(xhr) {
                console.log("OOPS! SOMETHING WENT WRONG");
            }
        });

    });



});



//Correct.prototype = {
//    // button
//    button_f_red_str: "red",
//    button_f_blue_str: "blue",
//    button_f_gray_str: "gray",
//    button_f_bold_str: "bold",
//    button_sline_str: "sline",
//    button_apply_str: "apply",
//    button_cancel_str: "cancel",
//    button_correct_str: "correct",
//    button_remove_format_str: "remove format",
//    // Shortcuts
//    // See http://keithcirkel.co.uk/jwerty/
//    // when you want to change to other 'keys' combinations
//    shortcuts: {
//        bold: {
//            keys: 'ctrl+b',
//            title: 'Ctrl B',
//        },
//        strikethrough: {
//            keys: 'ctrl+d',
//            title: 'Ctrl D',
//        },
//        red: {
//            keys: 'ctrl+alt+r',
//            title: 'Ctrl Alt R',
//        },
//        blue: {
//            keys: 'ctrl+alt+b',
//            title: 'Ctrl Alt B',
//        },
//        gray: {
//            keys: 'ctrl+Alt+g',
//            title: 'Ctrl Alt G',
//        },
//        removeformat: {
//            keys: 'ctrl+u',
//            title: 'Ctrl U',
//        },
//    },
//    // fixed data.
//    f_red_tag_head: "[f-red]",
//    f_red_tag_tail: "[/f-red]",
//    f_blue_tag_head: "[f-blue]",
//    f_blue_tag_tail: "[/f-blue]",
//    f_gray_tag_head: "[f-gray]",
//    f_gray_tag_tail: "[/f-gray]",
//    f_bold_tag_head: "[f-bold]",
//    f_bold_tag_tail: "[/f-bold]",
//    sline_tag_head: "[sline]",
//    sline_tag_tail: "[/sline]",
//    //æ›¸ãè¾¼ã¿å…ˆã‚¿ã‚°
//    title_id_str: "correct_sentence_title",
//    body_id_str: "correct_sentence_body",
//    // string for show/hide link.
//    show_text: "show",
//    hide_text: "hide",
//    // string for correction comment
//    correction_comment_explanation: 'Add a comment or explanations here.(optional)',
//    correction_comment_label: 'Comment',
//    set_static_value: function(vals) {
//        if ('international' in vals) {
//            if ('show_text' in vals['international'])
//                this.show_text = vals['international']['show_text'];
//            if ('hide_text' in vals['international'])
//                this.hide_text = vals['international']['hide_text'];
//        }
//        if ('button' in vals) {
//            if ('red' in vals['button'])
//                this.button_f_red_str = vals['button']['red'];
//            if ('blue' in vals['button'])
//                this.button_f_blue_str = vals['button']['blue'];
//            if ('gray' in vals['button'])
//                this.button_f_gray_str = vals['button']['gray'];
//            if ('bold' in vals['button'])
//                this.button_f_bold_str = vals['button']['bold'];
//            if ('sline' in vals['button'])
//                this.button_sline_str = vals['button']['sline'];
//            if ('apply' in vals['button'])
//                this.button_apply_str = vals['button']['apply'];
//            if ('cancel' in vals['button'])
//                this.button_cancel_str = vals['button']['cancel'];
//            if ('correct' in vals['button'])
//                this.button_correct_str = vals['button']['correct'];
//            if ('remove' in vals['button'])
//                this.button_remove_format_str = vals['button']['remove'];
//        }
//        if ('correction_comment' in vals) {
//            if ('explanation' in vals.correction_comment)
//                this.correction_comment_explanation = vals.correction_comment.explanation;
//            if ('label' in vals.correction_comment)
//                this.correction_comment_label = vals.correction_comment.label;
//        }
//    },
//    get_sentence_text: function(id) {
//        var sentence = $j('#sentence_' + id).text().replace(/\n|\r/g, "");
//        return sentence;
//    },
//    load: function() {
//        this.init_correction_box();
//    },
//    init_correction_box: function() {
//        var self = this;
//        $j('.correction_edit_link .btn-primary').each(function(i, element) {
//            var sentence = self.get_sentence_text(i);
//            $j(this).click(self.create_editable_frame(i, Base64.encode(encodeURI(sentence))));
//        });
//
//        $j('div.editable').hide();
//    },
//    init: function() {
//    },
//    doRichEditCommand: function(id, aName, aArg) {
//        return function() {
//            jQuery("#" + id).contents()[0].execCommand(aName, false, aArg);
//            jQuery('#' + id)[0].contentWindow.focus();
//            return false;
//        }
//    },
//    create_editable_frame: function(id, str) {
//        that = this;
//        return function() {
//            str = Base64.decode(str);
//            // for restored content from autosave feature
//            var restoredCorrection = jQuery('#new_correction_' + id + '');
//            var isRestored = restoredCorrection.length > 0;
//            if (isRestored) {
//                str = restoredCorrection.html();
//            }
//
//            var element = jQuery("#editable_" + id);
//
//            var $toolbar = jQuery('<div class="btn-group" style="width:210px"></div>');
//            $toolbar.append(jQuery('<a class="btn" href="#" title="' + that.button_f_bold_str + ' (' + that.shortcuts.bold.title + ')"><i class="icon-bold"></i></a>').click(that.doRichEditCommand('frame_editable_' + id, 'bold')));
//            $toolbar.append(jQuery('<a class="btn" href="#" title="' + that.button_sline_str + ' (' + that.shortcuts.strikethrough.title + ')"><i class="icon-strikethrough"></i></a>').click(that.doRichEditCommand('frame_editable_' + id, 'strikethrough')));
//            $toolbar.append(jQuery('<a class="btn" href="#" title="' + that.button_f_red_str + ' (' + that.shortcuts.red.title + ')"><i class="icon-font" style="color:red;"></i></a>').click(that.doRichEditCommand('frame_editable_' + id, 'forecolor', 'red')));
//            $toolbar.append(jQuery('<a class="btn" href="#" title="' + that.button_f_blue_str + ' (' + that.shortcuts.blue.title + ')"><i class="icon-font" style="color:blue;"></i></a>').click(that.doRichEditCommand('frame_editable_' + id, 'forecolor', 'blue')));
//            $toolbar.append(jQuery('<a class="btn" href="#" title="' + that.button_f_gray_str + ' (' + that.shortcuts.gray.title + ')"><i class="icon-font" style="color:gray;"></i></a>').click(that.doRichEditCommand('frame_editable_' + id, 'forecolor', 'gray')));
//            $toolbar.append(jQuery('<a class="btn" href="#" title="' + that.button_remove_format_str + ' (' + that.shortcuts.removeformat.title + ')"><i class="icon-undo"></i></a>').click(that.doRichEditCommand('frame_editable_' + id, 'removeformat')));
//            element.append($toolbar);
//
//            element.append(jQuery('<iframe class="correction_form" id="frame_editable_' + id + '"></iframe>').load(that.init_frame('frame_editable_' + id, str)));
//            element.append('<br />');
//            element.append(that.correction_comment_explanation);
//            element.append('<br>');
//            element.append($j('<textarea>')
//                    .addClass('correction_comment')
//                    .addClass('empty')
//                    .val(that.correction_comment_label)
//                    .focus(function() {
//                        var $textarea = $j(this);
//                        if ($textarea.hasClass('empty')) {
//                            $textarea
//                                    .removeClass('empty')
//                                    .val('');
//                        }
//                    })
//                    .blur(function() {
//                        var $textarea = $j(this);
//                        if ($textarea.val().strip().length === 0) {
//                            $textarea
//                                    .addClass('empty')
//                                    .css('height', '') // for Widget.Textarea
//                                    .val(that.correction_comment_label);
//                        }
//                    })
//                    );
//            element.append('<br>');
//            if (isRestored) {
//                var value = jQuery('#correction_draft' + id + ' .correction_comment').html();
//                element.find('textarea').removeClass('empty').val(value);
//            }
//            element.append(jQuery('<input type="button" class="edit_apply_button" value="' + that.button_apply_str + '" />').click(that.apply_edit(id)));
//            element.append(jQuery('<input type="button" class="edit_cancel_button" value="' + that.button_cancel_str + '" />').click(that.close_editable_frame(id)));
//
//            element.show();
//            element.find('textarea').autosize();
//
//            if (jQuery("#remove_new_string_link_" + id)) {
//                jQuery("#remove_new_string_link_" + id).hide();
//            }
//            jQuery("#correction_edit_link" + id).find('.btn-primary').unbind('click');
//            jQuery("#correction_edit_link" + id + " ul.language_status").find('.btn-primary').click(that.change_correction_box_visibility(id));
//        }
//    },
//    close_editable_frame: function(id) {
//        return function() {
//            jQuery("#editable_" + id).hide();
//            if (jQuery("#remove_new_string_link_" + id)) {
//                jQuery("#remove_new_string_link_" + id).css('display', "inline");
//            }
//        }
//    },
//    destroy_editable_frame: function(id) {
//        that = this
//        return function() {
//            jQuery("#editable_" + id).html('');
//            jQuery("#editable_" + id).hide();
//            jQuery("#correction_edit_link" + id).find('.btn-primary').unbind('click');
//
//            var sentence = that.get_sentence_text(id);
//            jQuery("#correction_edit_link" + id + " ul.language_status").find('.btn-primary').click(that.create_editable_frame(id, Base64.encode(encodeURI(sentence))));
//            if (jQuery("#remove_new_string_link_" + id)) {
//                jQuery("#remove_new_string_link_" + id).css('display', "inline");
//            }
//        }
//    },
//    change_correction_box_visibility: function(id) {
//        return function() {
//            if (jQuery("#editable_" + id).is(":visible")) {
//                jQuery("#editable_" + id).hide();
//                if (jQuery("#remove_new_string_link_" + id)) {
//                    jQuery("#remove_new_string_link_" + id).css('display', "inline");
//                }
//            } else {
//                jQuery("#editable_" + id).show();
//                if (jQuery("#remove_new_string_link_" + id)) {
//                    jQuery("#remove_new_string_link_" + id).css('display', "none");
//                }
//            }
//        }
//    },
//    /* Insert sentence data into correction iframe. */
//    init_frame: function(id, str) {
//        that = this;
//        return function() {
//            var $iframe = $j('#' + id);
//            $iframe.contents()
//                    .attr('designMode', 'on')
//                    .find('body')
//                    .html(decodeURI(str))
//                    .keypress(function(event) {
//                        // if TAB key is pressed
//                        if (event.which === 9) {
//                            // focusing moves to the next field
//                            $iframe.find('~ textarea').focus();
//                            return false;
//                        }
//                    });
//            $textarea = $iframe.contents().find('body');
//            $textarea.bind('keydown', jwerty.event('ctrl+i', false));
//            $textarea.bind('keydown', jwerty.event(that.shortcuts.bold.keys, function() {
//                (this.doRichEditCommand(id, 'bold'))();
//                return false;
//            }, that));
//            $textarea.bind('keydown', jwerty.event(that.shortcuts.strikethrough.keys, function() {
//                (this.doRichEditCommand(id, 'strikethrough'))();
//                return false;
//            }, that));
//            $textarea.bind('keydown', jwerty.event(that.shortcuts.red.keys, function() {
//                (this.doRichEditCommand(id, 'forecolor', 'red'))();
//                return false;
//            }, that));
//            $textarea.bind('keydown', jwerty.event(that.shortcuts.blue.keys, function() {
//                (this.doRichEditCommand(id, 'forecolor', 'blue'))();
//                return false;
//            }, that));
//            $textarea.bind('keydown', jwerty.event(that.shortcuts.gray.keys, function() {
//                (this.doRichEditCommand(id, 'forecolor', 'gray'))();
//                return false;
//            }, that));
//            $textarea.bind('keydown', jwerty.event(that.shortcuts.removeformat.keys, function() {
//                (this.doRichEditCommand(id, 'removeformat'))();
//                return false;
//            }, that));
//        }
//    },
//    mark_as_perfect: function(id) {
//        var that = this;
//        return function() {
//            var $p_correction = $j('<p>')
//                    .append($j('<span>')
//                            .attr('id', 'perfect_sentence_' + id)
//                            .attr('class', 'perfect_sentence draft_correct')
//                            .html(l8.t('rgo'))
//                            );
//
//            $p_correction.append($j('<a>')
//                    .attr('id', 'remove_new_string_link_' + id)
//                    .attr('class', 'remove_new_string_link')
//                    .attr('title', 'delete this correction')
//                    .click(that.reset_new_correction(id))
//                    .append($j('<img>')
//                            .attr('src', '/static/images2/ico_closebt.png')
//                            .attr('height', 16)
//                            .attr('width', 16)
//                            )
//                    );
//
//            var $li_correct = $j('<li>')
//                    .attr('class', 'perfect')
//                    .append($p_correction);
//
//            $j('#correction_draft' + id + ' ul.correction_field')
//                    .empty()
//                    .append($li_correct);
//
//            // hide iframe
//            (that.close_editable_frame(id))();
//            return false;
//        }
//    },
//    apply_edit: function(id) {
//        that = this;
//        return function() {
//            if (jQuery('#correct_comment').data('tutorial') === undefined) {
//                setTimeout(function() {
//                    autosave_comment_draft();
//                }, 0);
//            }
//
//            var copy;
//            if (!$("frame_editable_" + id).contentDocument) {
//                copy = document.getElementById("frame_editable_" + id).contentWindow.document.body.cloneNode(true);
//            } else {
//                copy = document.getElementById("frame_editable_" + id).contentDocument.body.cloneNode(true);
//            }
//
//            jQuery(copy).find('p').each(function(idx, p) {
//                jQuery(p).replaceWith(jQuery(p).html());
//            });
//
//            jQuery(copy).find('div').each(function(idx, div) {
//                jQuery(div).replaceWith(jQuery(div).html());
//            });
//
//            jQuery(copy).find('br, img').each(function(idx, elm) {
//                jQuery(elm).remove();
//            });
//
//            jQuery(copy).find('a').each(function(idx, a) {
//                jQuery(a).replaceWith(jQuery(a).html());
//            });
//
//            jQuery(copy).find('li').each(function(idx, li) {
//                jQuery(li).replaceWith(jQuery(li).html());
//            });
//
//            jQuery(copy).find('ul').each(function(idx, ul) {
//                jQuery(ul).replaceWith(jQuery(ul).html());
//            });
//
//            jQuery(copy).find('h1,h2,h3,h4,h5,h6,h7').each(function(idx, h) {
//                jQuery(h).replaceWith(jQuery(h).html());
//            });
//
//            // convert &nbsp;(no break space) and other whitespaces to " "(space).
//            jQuery(copy).html(jQuery(copy).html().replace(/(\s|&nbsp;)+/g, " "));
//
//            if (jQuery(copy).html() == "" || !jQuery(copy).html().match(/\S/g)) {
//                (that.destroy_editable_frame(id))();
//                return;
//            }
//
//            jQuery(copy).html(jQuery(copy).html().replace(/(\r|\n)+/g, ""));
//
//            // show correction
//            var $p_correction = $j('<p>')
//                    .append($j('<span>')
//                            .attr('id', 'new_correction_' + id)
//                            .attr('class', 'new_correction draft_correct')
//                            .html($j(copy).html())
//                            )
//                    .append($j('<a>')
//                            .attr('id', 'remove_new_string_link_' + id)
//                            .attr('class', 'remove_new_string_link')
//                            .attr('title', 'delete this correction')
//                            .click(that.reset_new_correction(id))
//                            .append($j('<img>')
//                                    .attr('src', '/static/images2/ico_closebt.png')
//                                    .attr('height', 16)
//                                    .attr('width', 16)
//                                    )
//                            );
//
//            var $li_correct = $j('<li>')
//                    .attr('class', 'correct')
//                    .append($p_correction);
//
//            var $correction_comment =
//                    $j('#editable_' + id + ' textarea.correction_comment');
//
//            if (!$correction_comment.hasClass('empty')) {
//                var correction_comment = $correction_comment.val().strip();
//                if (correction_comment.length) {
//                    $li_correct.append($j('<p>')
//                            .attr('class', 'correction_comment')
//                            .html(that.nl2br(correction_comment.escapeHTML()))
//                            );
//                }
//            }
//
//            $j('#correction_draft' + id + ' ul.correction_field')
//                    .empty()
//                    .append($li_correct);
//
//            // hide iframe
//            (that.close_editable_frame(id))();
//        }
//    },
//    // delete new correction
//    reset_new_correction: function(id) {
//        that = this;
//        return function() {
//            if (confirm("Are you sure you want to delete this correction?")) {
//                (that.destroy_editable_frame(id))();
//                jQuery("#correction_draft" + id + " li.perfect").remove();
//                jQuery("#correction_draft" + id + " li.correct").remove();
//            }
//        }
//    },
//    nl2br: function(string) {
//        return string.replace(/\r?\n/g, '\n<br />');
//    }
//}