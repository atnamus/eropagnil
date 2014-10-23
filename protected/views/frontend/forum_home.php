<?php
$assetFolder = Yii::app()->assetManager->publish(dirname(Yii::app()->basePath) . DIRECTORY_SEPARATOR . 'themes' . DIRECTORY_SEPARATOR . 'frontend' . DIRECTORY_SEPARATOR . 'assets');
Yii::app()->clientScript->registerScriptFile($assetFolder . '/js/jquery.timeago.js', CClientScript::POS_END);
Yii::app()->clientScript->registerScriptFile($assetFolder . '/js/jquery.livequery.js', CClientScript::POS_END);
Yii::app()->clientScript->registerScriptFile($assetFolder . '/js/time_count.js', CClientScript::POS_END);
?>

<div class="blog forum">
    <div class="container">
        <h2 class="forum-title">Latest lingapore Announcements and Blog Posts</h2>
        <div class="panel-group" id="accordion">
            <?php
            foreach ($forum_category as $i => $cat) {
                ?>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne<?php echo $i; ?>">
                                <?php echo $cat->name ?>
                            </a>
                        </h4>
                    </div>
                    <div id="collapseOne<?php echo $i; ?>" class="panel-collapse collapse <?php echo!$i ? "in" : ""; ?>">
                        <div class="panel-body">
                            <?php if (count($cat->forum)) { ?>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Title  </th>
                                            <th style="width: 50px;">&nbsp;</th>
                                            <th style="width: 200px;">Last Post</th>         
                                        </tr>
                                    </thead>
                                    <tbody>                                   
                                        <?php foreach ($cat->forum as $forum) { ?>
                                            <?php
                                            $phptime = strtotime($forum->last_thread->create_at);
                                            $mtime = date("c", $phptime);
                                            ?>
                                            <tr>
                                                <td>
                                                    <div class="form-acc-list">
                                                        <h3><a href="<?php echo $this->createUrl("forum/$forum->slug/$forum->id"); ?>"><?php echo $forum->name; ?></a></h3>
                                                        <?php echo $forum->description; ?>
                                                    </div> 
                                                </td>
                                                <td width="15%">Threads: <span><?php echo $forum->thread_count ?></span><br> Posts: <span><?php echo $forum->post_count ?></span></td>

                                                <td width="20%">
                                                    <a href="<?php echo "forum/" . $forum->slug . "/" . $forum->id ?>"><?php echo $forum->last_thread->title ?></a> by <?php echo $forum->last_thread->author->fullname; ?>&nbsp;<a href='#' class='timeago' title="<?php echo $mtime . ","; ?>"></a>,&nbsp; <?php
                                                    $time = strtotime($forum->last_thread->create_at);
                                                    echo date("F j,Y  g:i A", $time);
                                                    ?> 
                                                </td>         
                                            </tr>  
                                            <tr>                                         

                                            </tr>                       
        <?php } ?>
                                    </tbody>
                                </table>
                            <?php } else { ?>
                                <div>None</div>
    <?php } ?>
                        </div>
                    </div>
                </div>
<?php } ?>
        </div>
    </div>
</div> 
