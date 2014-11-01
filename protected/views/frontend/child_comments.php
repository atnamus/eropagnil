<ul>
    <?php
    $criteria = new CDbCriteria();
    $criteria->select = "t.*,user.id,user.*,correction.id";
    $criteria->addcondition("t.parent_id='" . $parent_id . "'");

    $comments = CorrectionComments::model()->with("user", "correction")->findAll($criteria);
    foreach ($comments as $key => $com_val) {
        ?>
        <li>
            <div class="clearfix">
                <div class="user_icon">
                    <img src="<?php echo $this->profile_image_path . '/' . (($com_val['user']->profile_image != "") ? $com_val['user']->profile_image : $this->default_profile_pic); ?>" />
                </div>
                <div class="right_rply_histry">
                    <div class="comment_auther">
                        <label><a href='<?php echo $this->createUrl("profile/".$com_val['user']->username); ?>'><?php echo $com_val['user']->full_name; ?></a></label>
                        <span class="comment_time pull-right"><?php echo date("M d, Y h:i", strtotime($com_val->create_at)); ?></span>
                    </div>
                    <?php
                    echo Yii::app()->cglobal->new_line($com_val->comment_text);
                    ?>
                </div>
                <div class="comments_like_div pull-right">
                    <div class="liked_message like_text">
                        <?php
                        $user_likes = CorrectionCommentLike::model()->userHasLike($com_val->id, $this->user_id);
                        echo $user_likes['html'];
                        ?>
                        <!--                    You and <a href="#">1 people</a> like this -->
                    </div>
                    <?php
                    if ($user_likes['user_liked'] == 0) {
                        ?>
                        <a class="like-btn like_comment" data-commentid="<?php echo $com_val->id; ?>" data-correctionid="<?php echo $com_val['correction']->id; ?>" href="javascript:void(0)">Like</a>
                        <?php
                    }
                    ?>
                    <a class="edit_note_links" href="#"><img alt="" src="<?php echo $this->image_path; ?>/note-icon.png" title="Add this to My Notebook"></a>
                </div>
            </div>
        </li>
        <?php
    }
    ?>
</ul>