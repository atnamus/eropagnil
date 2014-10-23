<?php
$assetFolder = Yii::app()->assetManager->publish(dirname(Yii::app()->basePath) . DIRECTORY_SEPARATOR . 'themes' . DIRECTORY_SEPARATOR . 'frontend' . DIRECTORY_SEPARATOR . 'assets');
Yii::app()->clientScript->registerScriptFile($assetFolder . '/js/jquery.timeago.js', CClientScript::POS_END);
Yii::app()->clientScript->registerScriptFile($assetFolder . '/js/jquery.livequery.js', CClientScript::POS_END);
Yii::app()->clientScript->registerScriptFile($assetFolder . '/js/time_count.js', CClientScript::POS_END);
?>

<div class="blog forum">
    <div class="container">
        <h2 class="forum-title"><?php echo $forum->category->name ?></h2>
        <div class="panel-group" id="accordion">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                            <?php echo $forum->name ?>
                        </a>
                    </h4>
                </div>
                <div id="" class="">
                    <div class="panel-body">
                        <?php if (count($forum->thread)) { ?>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Title  </th>
                                        <th style="width: 50px;">&nbsp;</th>
                                        <th style="width: 200px;">Last Post</th>         
                                    </tr>
                                </thead>
                                <tbody>                                   
                                    <?php foreach ($forum->thread as $thread) { ?>
                                        <tr>
                                            <td>
                                                <div class="form-acc-list"> <?php                            
                                $phptime = strtotime($thread->created_date);
                                $mtime = date("c", $phptime);
                                ?>
                                                    <h3><a href="<?php echo $this->createUrl("forum/thread/$thread->slug/$thread->id"); ?>"><?php echo $thread->title; ?></a></h3>
                                                    By <?php echo $thread->author->fullname ?> <a href='#' class='timeago' title="<?php echo $mtime.","; ?>"></a>,&nbsp;                                    
                                   <?php $time=strtotime($thread->created_date); echo date("F j,Y  g:i A",$time)?> </a>
                                                </div> 
                                            </td>
                                            <td width="15%">Post: <span><?php echo $thread->post_count ?></span><br>
                                                View: <span><?php echo $thread->view_count ?></span></td>
                                          
                                            <?php $last_post = ForumThread::model()->lastPost($thread->id); ?>                                          
                                         
                                            <?php foreach ($last_post as $content) { ?>                                      
                                            
                                             <?php                            
                                $phptime1 = strtotime($content['create_at']);
                                $mtime1 = date("c", $phptime1);
                                ?>
                                                <td width="20%">   <a href="<?php echo $this->createUrl("forum/thread/$thread->slug/$thread->id/#"); ?>"><?php echo substr($content['content'], 0, 10);$user_id=$content['user_id'];$time=$content['create_at']; ?>............ </a>
                                                     <?php $user_name= ForumThread::model()->getUserName($user_id); ?>
                                                    by <?php foreach ($user_name as $name){ ?><?php echo $name['username']; } ?>
                                                      <a href='#' class='timeago' title="<?php echo $mtime1.","; ?>"></a>,&nbsp;  <?php $time1=strtotime($time); echo date("F j,Y  g:i A",$time1); ?>
                                                <?php } ?>
                                            </td>         
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
        </div>
    </div>
</div>