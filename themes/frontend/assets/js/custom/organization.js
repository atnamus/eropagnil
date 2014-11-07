function birthday_IsValidDate(input) {
    var bits = input.split('-');
    var d = new Date(bits[0], bits[1] - 1, bits[2]);
    return d.getFullYear() == bits[0] && (d.getMonth() + 1) == bits[1] && d.getDate() == Number(bits[2]);
}
var formc;
function childformValidate(form, data, hasError)
{
    if (hasError) {
        var obj = data;
        var error = obj[Object.keys(obj)[0]];
        //            var error_str='<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+error+'</div>';
        var error_str = '' + error + '';
        showError(error_str);
    } else {
        return false;
    }
}
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
/*$(".ladda-button").click(function() {
 Ladda.create(this).start();
 });*/
function reload_child_list(obj, data) {
    //console.log(obj);
    $("#all-child").html(data.list);
}
function showLoader(form, data, hasError)
{
    /*child-submit-button
     formc=form;
     console.log(form);*/
    return;
}
var prv = '';
$(document).ready(function() {
    $("#short-month-birthday").birthdayPicker({
        //"defaultDate": "01-03-1980",
        //"maxYear": "2020",
        "maxAge": 125,
        "monthFormat": "short"
    });
    jQuery('.birthdayPicker .span2').on('change', function() {
        if ($(".birthDay").val() != '') {
            $("#step2-data").show();
        }
    });
    $(".birthDay").on('change', function() {
        $("#step2-data").slideDown();
    });
    //step1-data
    //hello.js
    $(".social-connect").click(function(event) {
        event.preventDefault();
        var l = Ladda.create(this);
        l.start();
        hello.login($(this).data('provider'), {scope: 'friends,email'}, function(data) {
            console.log(data);
            if (data.error != undefined && data.error) {
                l.stop();
                $.simplyToast(toTitleCase(data.network + " " + data.error.message), 'warning');
            }
        });
    });
    $(".disconnect-login").click(function(e) {
        e.preventDefault();
        var r = confirm("It will remove "+$(this).data('type')+" account from your lingapore account.");
        if (r == true) {
            data = {'provider': $(this).data('type')};
            $.ajax({
                url: full_path + "/account/sync/remove",
                type: "POST",
                data: data,
                dataType: "json"
            }).done(function(resp) {
                if (resp.ok == 1) {
                    $("#" + data.provider + "-rmv").hide();
                    $("#" + data.provider).show();
                    $.simplyToast(resp.msg, 'success');
                } else {

                }
            });
        } else {
            //txt = "You pressed Cancel!";
        }

    });
    //child management
    $("#add-child-button").click(function(e) {
        e.preventDefault();
        $("#create-child-step1").show();
        $("#listing").slideUp();
        // alert(1);
    });
    $("#back-to-child-mng").click(function(e) {
        e.preventDefault();
        $("#create-child-step1").slideUp();
        $("#listing").slideDown();
    });
});
//hello.js
$(function() {
    hello.on("auth.failed", function(e) {
        l.stop();
    });
    hello.on("auth", function(e) {
        //log("auth", e);
        hello(e.network).api("/me", function(data) {
            data.provider = e.network;
            $.ajax({
                url: full_path + "/account/sync/save",
                type: "POST",
                data: data,
                dataType: "json"
            }).done(function(resp) {
                if (resp.ok == 1) {
                    $("#" + data.provider + "-rmv").show().prepend(data.email);
                    $("#" + data.provider).hide();
                    $.simplyToast(resp.msg, 'success');
                } else {
                    $.simplyToast(resp.msg, 'warning');
                }
            }).always(function() {
                var l = Ladda.create(document.querySelector("#" + e.network + "-conn"));
                l.stop();
            });
        });
    });
    hello.init(CLIENT_IDS, {redirect_uri: ''});
});