function connect(network, event) {
    console.log(event);

}
$(document).ready(function() {
    $(".social-connect").click(function(event) {
        event.preventDefault();
        var l = Ladda.create(this);
        l.start();
        hello.login($(this).data('provider'), {scope: 'friends,email'}, function(data) {
            console.log(data);
            if (data.error != undefined && data.error) {
                l.stop();
            }
        });
    });
    $(".disconnect-login").click(function(e) {
        e.preventDefault();
        alert(1);
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
            } else {

            }
        });
    });
});
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
                } else {

                }
            }).always(function() {
                var l = Ladda.create(document.querySelector("#" + e.network + "-conn"));
                l.stop();
            });
        });
    });
    hello.init(CLIENT_IDS, {redirect_uri: ''});
});