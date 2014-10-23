function preview(img, selection) {
    //get width and height of the uploaded image.
    var current_width = $('#uploaded_image').find('#thumbnail').width();
    var current_height = $('#uploaded_image').find('#thumbnail').height();

    var scaleX = 114 / selection.width;
    var scaleY = 106 / selection.height;

    $('#uploaded_image').find('#thumbnail_preview').css({
        width: Math.round(scaleX * current_width) + 'px',
        height: Math.round(scaleY * current_height) + 'px',
        marginLeft: '-' + Math.round(scaleX * selection.x1) + 'px',
        marginTop: '-' + Math.round(scaleY * selection.y1) + 'px'
    });
    $('#x1').val(selection.x1);
    $('#y1').val(selection.y1);
    $('#x2').val(selection.x2);
    $('#y2').val(selection.y2);
    $('#w').val(selection.width);
    $('#h').val(selection.height);
}


//$(document).ready(function() {
//    cropimagescript();                
//});

$(document).ready(function() {

    $('#upload_link').click(function() {
        $('#selectimage').trigger("click");
    });

    $('#txt_upload').click(function() {
        $('#selectimage').trigger("click");
    });
});

$(document).ready(function() {

    var a;

    var b = {
        on: {
            load: function(g, d) {
                var f = /image.*/;
                if (!d.type.match(f)) {
                    alert('File "' + d.name + '" is not a valid image file');
                    return false
                }
                if (parseInt(d.size / 1024) > 2050) {
                    alert('File "' + d.name + '" is too big.Max allowed size is 2 MB.');
                    return false
                }
                create_box(g, d)
            },
        }
    };


    FileReaderJS.setupInput(document.getElementById("selectimage"), b)

});
create_box = function(f, b) {
    var d = Math.floor((Math.random() * 100000) + 3);
    var a = b.name;
    var g = f.target.result;
    upload(b, d)
};

upload = function(a, b) {
    var c = new Array();
    c[b] = new XMLHttpRequest();
    loadingmessage('Loading...', 'show');
    c[b].open("post", full_path + image_thum_ajax_path, true);
    c[b].upload.addEventListener("progress", function(d) {
    
        if (d.lengthComputable) {
            $(".progress[id='" + b + "'] span").css("width", (d.loaded / d.total) * 100 + "%");
            $(".preview[id='" + b + "'] .updone").html(((d.loaded / d.total) * 100).toFixed(2) + "%")
        } else {
            alert("Failed to compute file upload length")
        }
    }, false);
    c[b].onreadystatechange = function(d) {
        if (c[b].readyState === 4) {
            if (c[b].status === 200) {
                
                loadingmessage('', 'hide');
                $(".progress[id='" + b + "'] span").css("width", "100%");
                $(".preview[id='" + b + "']").find(".updone").html("100%");
                $(".preview[id='" + b + "'] .overlay").css("display", "none");
                $(".progress[id='" + b + "']").fadeOut();
                var response = c[b].responseText.split("|");

                var responseType = response[0];
                var responseMsg = response[1];
                // console.log(responseType);
                if (responseType == "success") {

                    $("#txt_upload").hide();
                    var current_width = response[2];
                    var current_height = response[3];
                    var image_name = response[4];
                    //put the image in the appropriate div
                    $("#text-crop-image").show();
                    $('#uploaded_image').html(' <span id="text-crop-image" style="display:block;">Select the cropping section for image</span><img src="' + responseMsg + '" id="thumbnail" alt="Create Thumbnail" /><div class="img-prev" style="position:absolute; left:132px; top:-128px; overflow:hidden; width:114px; height:106px;"><img src="' + responseMsg + '" id="thumbnail_preview" alt="Thumbnail Preview" /></div>')
                    $('#hidden_path').attr('value', responseMsg);
                    $('#cropped_image_name').attr('value', image_name);
                    $('#my_crop_image').val(image_name);
                    //find the image inserted above, and allow it to be cropped
                    $('#uploaded_image').find('#thumbnail').imgAreaSelect({
                        aspectRatio: '1:0.929824561404',
                        onSelectChange: preview
                    });
                    //display the hidden form
                    $('#save_thumb').show();
                    $('#thumbnail_form').show();
                } else if (responseType == "error") {
                    //$('#upload_status').show().html();
                    $('#uploaded_image').html('');
                    $('#thumbnail_form').hide();
                } else {
                    // $('#upload_status').show().html();
                    $("#text-crop-image").hide();
                    $('#uploaded_image').html('');
                    $('#thumbnail_form').hide();
                }

            } else {
                alert("Error : Unexpected error while uploading file")
            }
        }
    };
    c[b].setRequestHeader("X-File-Name", a.name);
    c[b].setRequestHeader("X-File-Size", a.size);
    c[b].setRequestHeader("X-File-Type", a.type);
    c[b].send(a)
};

//show and hide the loading message
function loadingmessage(msg, show_hide) {
    if (show_hide == "show") {
        $('#loader').show();
        $("#text-crop-image").hide();
        $('#progress').show().text(msg);
        $('#uploaded_image').html('');
    } else if (show_hide == "hide") {
        $('#loader').hide();
        $("#text-crop-image").hide();
        $('#progress').text('').hide();
    } else {
        $('#loader').hide();
        $("#text-crop-image").hide();
        $('#progress').text('').hide();
        $('#uploaded_image').html('');
    }
}

//cancel the thumbmail
$(document).ready(function() {

    $('#cancel_thumb').click(function(event) {
        event.preventDefault();
        $("#cropped_image_name").val('');
        $('#uploaded_image').html('');
        $('#thumbnail_form').hide();
        $("#txt_upload").show();
        $("#text-crop-image").hide();
        $(".area").remove();
    });

});


//create the thumbnail
//************************************
$(document).ready(function() {

    //create the thumbnail
    $('#save_thumb').click(function() {
        var x1 = $('#x1').val();
        var y1 = $('#y1').val();
        var x2 = $('#x2').val();
        var y2 = $('#y2').val();
        var w = $('#w').val();
        var h = $('#h').val();
        var profile_image = $('#cropped_image_name').val();

        if (x1 == "" || y1 == "" || x2 == "" || y2 == "" || w == "" || h == "") {
            alert("You must make a selection first");
            return false;
        } else {
            //hide the selection and disable the imgareaselect plugin
            $('#uploaded_image').find('#thumbnail').imgAreaSelect({
                disable: true,
                hide: true
            });

            $.ajax({
                type: 'POST',
                url: full_path + image_crop_ajax_path,
                data: 'save_thumb=Save Thumbnail&x1=' + x1 + '&y1=' + y1 + '&x2=' + x2 + '&y2=' + y2 + '&w=' + w + '&h=' + h + '&profile_image=' + profile_image,
                cache: false,
                success: function(response) {
                    loadingmessage('', 'hide');
                    response = unescape(response);
                    var response = response.split("|");
                    // alert(response);
                    var responseType = response[0];
                    //var responseLargeImage = response[1];
                    var responseThumbImage = response[1];
                    if (responseType == "success") {
                        $('#save_thumb').hide();
                        $('#thumbnail_form').hide();
                        $('#x1').val('');
                        $('#y1').val('');
                        $('#x2').val('');
                        $('#y2').val('');
                        $('#w').val('');
                        $('#h').val('');
                        $('#user_profile_image').attr('src', responseThumbImage);

                        loadingmessage('Loading...', 'show');
                        loadingmessage('', 'hide');
                        $("#text-crop-image").hide();
                    } else {
                        //$('#upload_status').show().html('<h1>Unexpected Error</h1><p>Please try again</p>'+response);
                        //reactivate the imgareaselect plugin to allow another attempt.
                        $('#uploaded_image').find('#thumbnail').imgAreaSelect({
                            aspectRatio: '1:0.929824561404',
                            onSelectChange: preview
                        });
                        $('#thumbnail_form').show();
                        loadingmessage('Please wait...', 'show');
                        loadingmessage('', 'hide');
                        $("#text-crop-image").hide();
                    }
                    $("#txt_upload").show();

                }
            });

            return false;
        }
    });
});