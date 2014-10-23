<?php
$assetFolder = Yii::app()->assetManager->publish(dirname(Yii::app()->basePath) . DIRECTORY_SEPARATOR . 'themes' . DIRECTORY_SEPARATOR . 'frontend' . DIRECTORY_SEPARATOR . 'assets');
Yii::app()->clientScript->registerScriptFile($assetFolder . '/js/jquery.timeago.js', CClientScript::POS_END);
Yii::app()->clientScript->registerScriptFile($assetFolder . '/js/jquery.livequery.js', CClientScript::POS_END);
Yii::app()->clientScript->registerScriptFile($assetFolder . '/js/time_count.js', CClientScript::POS_END);
?>

<div class="blog forum">
    <div class="container">
        <h2 class="forum-title">Gave us their highest accolades</h2>
        <div class="conversation-content">
            <ul class="conversation-list">
                <li class="">
                    <div class="conv-left">
                        <img src="<?php echo $thread->author->ProfileImgUrl ?>" width="100" height="100" alt="<?php echo $thread->author->fullname; ?>"/>
                        <h3><?php echo $thread->author->fullname; ?></h3>
                    </div>                 
                    <div class="conv-right">
                        <h3><?php echo $thread->title; ?></h3>
                        <span class="conv-time"><?php echo $thread->time ?></span>
                        <div class="conv-cont"><?php echo $thread->content; ?></div>
                        <div class="conv-controls text-right">
                            <!--
                            <?php if (Yii::app()->user->id) { ?>
                                <?php if (Yii::app()->user->id == $thread->author->id) { ?>
                                                                                    <a href="#" class="conv-edit"><i class="glyphicon glyphicon-pencil"></i>Edit</a>
                                <?php } ?>
                                                        <a href="#" class="conv-edit"><i class="glyphicon glyphicon-comment"></i>Comment</a>
                            <?php } ?>
                            -->
                        </div>
                    </div>
                </li>
                <?php if (count($thread)) { ?>
                    <?php foreach ($thread->posts as $post) { ?>
                        <li class="" id="post-<?php echo $post->id ?>">

                            <div class="conv-left"><a name="#">
                                    <img src="<?php echo $post->author->ProfileImgUrl ?>" width="100" height="100" alt="<?php echo $thread->author->fullname; ?>">
                                    <h3><?php echo $post->author->fullname; ?></h3>
                            </div>                 
                            <div class="conv-right">  
                                <?php
                                $dbtime = $post->time;
                                $phptime = strtotime($dbtime);
                                $mtime = date("c",$phptime);
                                ?>
                                <span class="conv-time">
                                    <a href='#' class='timeago' title="<?php echo $mtime.","; ?>"></a>,&nbsp;<?php
                                    $time = strtotime($post->time);
                                    echo date("g:i A F j,Y", $time);
                                    ?></span>
                                <div class="conv-cont"><?php echo $post->content; ?></div></a>
                                <div class="conv-controls text-right">
                                    <!--
                                    <?php if (Yii::app()->user->id == $post->author->id) { ?>
                                                                <a href="#" class="conv-edit"><i class="glyphicon glyphicon-pencil"></i>Edit</a>
                                    <?php } ?>
                                    -->
                                </div>
                            </div>
                        </li>
                    <?php } ?>
                <?php } ?>
            </ul>          


            <?php if (Yii::app()->user->id) { ?>
                <?php $url = $this->createUrl('Forum/ThreadDetails'); ?>            
                <form method="post" action="">
                    <textarea class="form-control" rows="5" placeholder="Start typing..." name="post"></textarea>
                    <button class="forum-btn pull-right" name="button">Post Reply</button>
                </form>

            <? } ?>

        </div>
    </div>
</div> 

<p id="some"></p>