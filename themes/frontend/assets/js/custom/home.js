$(document).ready(function(e){

    $(".step1,.step2,.step3,.step4,.step5,.step6").hide();
    $(".step1").show();
        
    $("#get_started").click(function(){
        $(".banner").fadeOut('slow',function(){
            $(".stapes-wrap").fadeIn();
        });
    });
        
    $("#build_lesson").click(function(e){
        $(".step1").fadeOut('slow', function(e){
            $(".step2").fadeIn('slow');
        });
    });
        
    $("#step2_done").click(function(e){
        $(".step2").fadeOut('slow', function(e){
            $(".step5").fadeIn('slow');
        });
    });
        
    $("#step3_done").click(function(e){
        $(".step3").fadeOut('slow', function(e){
            $(".step5").fadeIn('slow');
        });
    });
    
    $("#step4_done").click(function(e){
        $(".step4").fadeOut('slow', function(e){
            $(".step5").fadeIn('slow');
        });
    });
    
    $("#create_skit_step2").click(function(e){
        $(".step2").fadeOut('slow',function(e){
            $(".create_skit").fadeIn('slow');
        });
    });
    
    $("#create_quiz_step2").click(function(e){
        $(".step2").fadeOut('slow',function(e){
            $(".create_quiz").fadeIn('slow');
        });
    });
    
    $("#create_skit_step3").click(function(e){
        $(".step3").fadeOut('slow',function(e){
            $(".create_skit").fadeIn('slow');
        });
    });
    
    $("#create_quiz_step3").click(function(e){
        $(".step3").fadeOut('slow',function(e){
            $(".create_quiz").fadeIn('slow');
        });
    });
    
    $("#create_skit_step4").click(function(e){
        $(".step4").fadeOut('slow',function(e){
            $(".create_skit").fadeIn('slow');
        });
    });
    
    $("#create_quiz_step4").click(function(e){
        $(".step4").fadeOut('slow',function(e){
            $(".create_quiz").fadeIn('slow');
        });
    });

    $("ul#tabs li").click(function(e){
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("ul#tabs li.active").removeClass("active");
            $(this).addClass("active");
            $("ul#tab li.active").removeClass("active");
            $("ul#tab li:nth-child("+nthChild+")").addClass("active");
        }
    });
    
    //Ajax Calling Part
    
    $("#stage").change(function(e){
        if($(this).val()!=""){
            $.ajax({
                url:full_path+"ajax-fetch-category",
                type:"POST",
                data:{
                    stage:$(this).val()
                },
                success:function(data){
                    var str="<option value=''>Select</option>";
                    str+=data;
                    $("#category").html(data);
                },
                error:function(e){
                    showError("Something Went Wrong");
                }
            });
        }
        else
        {
            $("#category").html("<option value=''>Select</option>");
        }
    });

});