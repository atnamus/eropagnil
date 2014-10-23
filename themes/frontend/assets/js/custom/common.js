$(document).ready(function(e) {
    $("#go_forgotsignin").click(function(e) {
        $("#login_box").fadeOut('normal', function(e) {
            $("#forgotpass_box").fadeIn();
        });
    });
    $("#go_signin").click(function(e) {
        $("#forgotpass_box").fadeOut('normal', function(e) {
            $("#login_box").fadeIn();
        });
    });
    $("#language").selectbox({
        onChange: function(val, inst) {
            $("#language option").removeAttr("selected");
            $("#language").val(val);
            $("#language").parent("form").submit();
        }
    });
});
function show_loader()
{
    var str = '<img src="' + assets_path + 'images/loader.gif' + '" height="30" />';
    $(".errorSummary").attr("style", "display:none;").fadeIn('slow').html(str);
    return true;
}

function showSuccessMSG() {
    $(".success_msg").fadeIn();
    setTimeout(function(e) {
        $(".success_msg").slideUp('slow');
    }, 5000);
}

function formValidate(form, data, hasError)
{
    if (hasError) {
        var obj = data;
        var error = obj[Object.keys(obj)[0]];
        //            var error_str='<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+error+'</div>';
        var error_str = '' + error + '';
        showError(error_str);
    } else {
        return true;
    }
}

function show_js_loader(show)
{
    if (show == true) {
        var str = '<img src="' + assets_path + 'images/loader.gif' + '" height="30" />';
        $(".errorJsSummary").stop().attr("style", "display:none;").fadeIn('slow').html(str);
        return true;
    } else if (show == false) {
        $(".errorJsSummary").stop().fadeOut('slow');
        return true;
    }
}

function showJsError(error_str)
{
    $(".errorJsSummary").stop().attr("style", "display:none;").fadeIn('slow').html(error_str);
    setTimeout(function() {
        $(".errorJsSummary").fadeOut();
    }, 5000);
}

function showError(error_str)
{
    $(".errorSummary").attr("style", "display:none;").fadeIn('slow').html(error_str);
    setTimeout(function() {
        $(".errorSummary").fadeOut();
    }, 5000);
}

function showSuccess(msg)
{
    $(".successmsg").attr("style", "display:none;").fadeIn('slow').html(msg);
    setTimeout(function() {
        $(".successmsg").fadeOut();
    }, 5000);
}

function dologin(e)
{
    var msg = "";
    if ($.trim($("#login_email").val()) == "") {
        $("#login_email").focus();
        msg = "Please enter Username or Email";
    } else if ($.trim($("#login_password").val()) == "") {
        $("#login_password").focus();
        msg = "Please enter password";
    }

    if (msg != "") {
        showError(msg);
    } else {
        show_loader();
        $.ajax({
            url: $("#form_login").attr("action"),
            type: "post",
            dataType: "json",
            data: $("#form_login").serialize(),
            success: function(resp) {
                if (resp.status == "success") {
                    window.location.href = member_url;
                } else if (resp.status == "error") {
                    showError(resp.message);
                }
            },
            error: function(data) {
                showError("Oops, something went wrong");
            }
        });
    }

    e.preventDefault();
}

function doresetpassword(e)
{
    var msg = "";
    if ($.trim($("#forgot_email").val()) == "") {
        $("#forgot_email").focus();
        msg = "Please enter Email";
    }

    if (msg != "") {
        showError(msg);
    } else {
        show_js_loader(true);
        $.ajax({
            url: $("#form_resetpassword").attr("action"),
            type: "post",
            dataType: "json",
            data: $("#form_resetpassword").serialize(),
            success: function(resp) {
                show_js_loader(false);
                if (resp.status == "success") {
                    showSuccess(resp.message);
                } else if (resp.status == "error") {
                    showJsError(resp.message);
                }
                $("#form_resetpassword")[0].reset();
            },
            error: function(data) {
                showError("Oops, something went wrong");
            }
        });
    }

    e.preventDefault();
}

function show_progress(show, value) {
    if (show == true) {
        $("#loader_block").fadeIn();
    } else {
        $("#loader_block").fadeOut();
    }
    $("#main_progressbar").css("width", (value + "%"));
    $("#main_progressbar").attr("aria-valuenow", (value));
}

function InvalidMsg(textbox) {
    if (textbox.validity.typeMismatch) {
        textbox.setCustomValidity('Please enter a valid email address');
    }
    return true;
}