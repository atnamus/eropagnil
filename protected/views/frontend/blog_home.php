<script type="text/javascript"> 
$(document).ready(function(){
   
            $(".blog-desc").val($('.blog-desc').text());
 
});
</script>


<!-- Blog -->
    <div class="blog">
        <div class="container">
              <?php
            foreach ($blog_list as $i => $blog) {
                ?>
            <div class="blog-list">
                <div class="col-lg-3">
                    <div class="blog-img"><img src="<?php echo $blog->BlogImgUrl;?>" width="217" height="225" alt="<?php echo $blog->title; ?>"></div>
                </div>
                <div class="col-lg-9">
                    <h2 class="blog-title"> <?php echo $blog->title ?></h2>
                    <div class="date-time">
                        <div class="date"><?php $phpdate = strtotime( $blog->create_at);
$date = date("D, j M Y", $phpdate ); echo $date;?></div>
                        <div class="time"><?php $phpdate = strtotime( $blog->create_at);
$time = date(" H:i:s", $phpdate ); echo $time;?></div>
                    </div>
                    <div class="blog-desc"><?php echo substr($blog->content,0,220); ?>....</div>
                    <div class="blist">
                        <div class="comment"><a href="#"><?php  echo $blog->commentCount; ?> comment</a></div>
                       
                        <div class="read-more"><a href="<?php echo $this->createUrl("blog/$blog->slug/$blog->id"); ?>">Continue  Reading</a></div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
            <?php } ?>
           
            <!-- <div class="col-sm-12 text-center"> -->
                <ul class="pagination pull-right">
                  <li class=""><a href="#"><</a></li>
                  <li class="active"><a href="#">1</a></li>
                  <li class=""><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">></a></li>
                </ul>
            <!-- </div> -->
            
        </div>
    </div> 
    
   