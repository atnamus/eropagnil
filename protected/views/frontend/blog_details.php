<!-- Blog -->
<div class="blog">
    <div class="container">
        <div class="blog-list">
            <!-- <div class="col-lg-3">
                <div class="blog-img"><img src="images/blog-img.jpg" alt=""></div>
            </div> -->
            <div class="col-lg-12">
                <div class="blog-img blog-detls-img"><img src="<?php echo $blog_details->BlogImgUrl; ?>"  width="312" height="323" alt="<?php echo $blog_details->title; ?>"></div>

                <h2 class="blog-title"> <?php echo $blog_details->title; ?></h2>
                <div class="date-time">
                    <div class="date"><?php
                        $phpdate = strtotime($blog_details->create_at);
                        $date = date("D, j M Y", $phpdate);
                        echo $date;
                        ?></div>
                    <div class="time"><?php
                        $phpdate = strtotime($blog_details->create_at);
                        $time = date(" H:i:s", $phpdate);
                        echo $time;
                        ?></div>
                </div>
                <div class="blog-desc">
                    <p><?php echo $blog_details->content; ?></p>

                </div>

            </div>
            <div class="clear"></div>
        </div>


        <div id="comments" class="comments-area">
            <header class="page-header">
                <h2 class="comments-title"><?php
                    if ($blog_details->commentCount > 0) {
                        echo $blog_details->commentCount;
                        echo "&nbsp thoughts on <span>\"Page with comments\"</span>";
                    } else {
                        echo "no comment";
                    }
                    ?></h2>
            </header>
            <?php
            $comments = $blog_details->comments;
            foreach ($comments as $comment) {
                ?>
                <ol class="comment-list media-list">
                    <li id="comment-3" class="comment">
                        <article id="div-comment-3" class="comment-body media">
                          <?php $author = User::model()->findByPk($comment->author_id); ?>
                            <a class="pull-left" href="#"><img src="<?php echo $author->ProfileImgUrl; ?>" width="50" height="50" alt="<?php echo $author->username; ?>"></a>
                            <div class="media-body">
                                <div class="media-body-wrap panel">
                                    <h5 class="media-heading"><cite class="fn"><?php echo $author->first_name; ?></cite> <span class="says">says:</span></h5>
                                    <p class="comment-meta">
                                        <a href="#"><time datetime=""><?php
                                                $phpdate = strtotime($comment->create_at);
                                                $date = date("F j, Y", $phpdate);
                                                echo $date;
                                                ?> at <?php
                                            $phpdate = strtotime($comment->create_at);
                                            $time = date("g:i a", $phpdate);
                                            echo $time;
                                            ?></time></a>
                                    </p>
                                    <div class="comment-content">
                                        <p><?php echo $comment->comment; ?></p>
                                    </div>                        
                                </div>
                            </div>
                            <!-- .media-body -->
                        </article>
                        <!-- .comment-body -->                  
                    </li>              
                </ol>
<?php } ?>
            <!-- .comment-list -->
<?php if (Yii::app()->user->id) { ?>
                <div id="respond" class="comment-respond">
                    <h3 id="reply-title" class="comment-reply-title">Leave a Comment </h3>
                    <form action="" method="post" id="commentform" class="form-horizontal comment-form">
                      <!-- <p class="comment-notes">Your email address will not be published. Required fields are marked <em class="required">*</em></p> -->
                        <!-- <div class="form-group">
                          <label for="author" class="col-sm-2 control-label">Name</label>
                          <div class="col-sm-5">
                            <input type="text" class="form-control" id="author" placeholder="Name">
                          </div>
                        </div>
                        
                        <div class="form-group">
                          <label for="email" class="col-sm-2 control-label">Email</label>
                          <div class="col-sm-5">
                            <input type="text" class="form-control" id="email" placeholder="Email">
                          </div>
                        </div> -->

                        <div class="form-group">
                            <!-- <label for="email" class="col-sm-2 control-label">Comments</label> -->
                            <div class="col-sm-12">
                                <textarea class="form-control" rows="5" placeholder="Start typing..." name="comment"></textarea>
                            </div>
                        </div>
                        <!-- <p class="form-allowed-tags">You may use these <abbr title="HyperText Markup Language">HTML</abbr> tags and attributes:</p> -->
                        <!-- <div class="alert alert-info">&lt;a href="" title=""&gt; &lt;abbr title=""&gt; &lt;acronym title=""&gt; &lt;b&gt; &lt;blockquote cite=""&gt; &lt;cite&gt; &lt;code&gt; &lt;del datetime=""&gt; &lt;em&gt; &lt;i&gt; &lt;q cite=""&gt; &lt;strike&gt; &lt;strong&gt; </div> -->
                        <p class="form-submit">
                            <input name="submit" type="submit" id="commentsubmit" value="Post Comment" class="btn btn-primary">

                        </p>
                    </form>
                </div>
<? } ?>
            <!-- #respond -->
        </div>



    </div>
</div> 



<!-- Blog End -->