<div class="learner_public_profile">
    <div class="container">
        <div class="learn_pp">
            <div class="row">
                <div class="col-md-8">
                    <div class="cortion-details">
                        <?php if ($is_owner) { ?>
                            <div style='text-align:right;'>
                                <a href='<?php echo $this->createUrl("correction-edit/" . $cor_dtls->display_id); ?>'>Edit</a>
                                | 
                                <a style='color:#F00;' href='<?php echo $this->createUrl("correction-delete/" . $cor_dtls->display_id); ?>'>Delete</a>
                            </div>
                        <?php } ?>
                        <div class="tit_02">
                            <h3 class="subject_show"><?php echo $title; ?></h3>
                            <div class="edit_links">
                                <ul>
                                    <li><a href="#" class="edit_pdf_links"><img alt="" src="<?php echo $this->image_path; ?>/pdf-icon.png"></a></li>
                                    <li><a href="#" class="edit_note_links"><img alt="" src="<?php echo $this->image_path; ?>/note-icon.png"></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="tools_for_journal">
                          <!-- <span class="journal_date">Sep 18, 2014 04:16</span> -->
                            <span class="journal_date"><?php echo $post_date; ?></span>
                            <ul class="journal_status pull-right">
                                <li class="privacy_level" data-original-title="Share with all Lang-8 users" rel="tooltip"><?php echo $visibility; ?></li>
                                <li class="visiters" data-original-title="Views" rel="tooltip"><?php echo $total_views; ?></li>
                                <li class="comment_num" data-original-title="Comments" rel="tooltip"><?php echo $total_comments; ?></li>
                                <li class="corrections_num" data-original-title="Corrections" rel="tooltip"><?php echo $total_corrections; ?></li>
                                <li class="studying" data-original-title="The language that needs to be corrected" rel="tooltip"><?php echo $language; ?></li>
                            </ul>
                        </div>
                        <div class="">
                            <?php
                            echo Yii::app()->cglobal->new_line($cor_dtls->intro_text);
                            ?>
                        </div>
                        <?php
                        if ($cor_dtls->native_text != "") {
                            ?>
                            <hr />
                            <div class="">
                                <?php
                                echo Yii::app()->cglobal->new_line($cor_dtls->native_text);
                                ?>
                            </div>
                            <?php
                        }
                        ?>
                        <div class="box_like_button">
                            <div class="liked_message" id="liked_container" style="">
                                <?php
                                if ($i_liked == "1" && $other_likes == "0") {
                                    echo "You liked this entry";
                                } else if ($i_liked == "0" && $other_likes > "0") {
                                    echo $other_likes . " people likes this entry";
                                } else if ($i_liked == "1" && $other_likes > "0") {
                                    echo "You and " . $other_likes . " people likes this entry";
                                }
                                ?>
                            </div>
                            <?php
                            if ($i_liked == "0") {
                                ?>
                                <a href="javascript:void(0)" id="correction_like" data-correctionid="<?php echo $cor_dtls->id; ?>" class="like-btn">Like</a><?php
                            } else {
                                ?><br/><?php
                            }
                            ?>
                        </div>
                        <div class="go_to_correct_area">
                            <a href="#" class="com-cor-btn"  data-show="false" >Post comments and corrections</a>                          
                        </div>
                    </div>
                    <div id="corrections_comments">
                        <div class="little-spaced">
                            <!--add this-->&nbsp;

                            <div class="pull-right">
                                <a href="#" class=""><img src="<?php echo $this->image_path; ?>/article-clipper-fr.png" alt=""></a>
                            </div>
                        </div>
                        <?php
                        foreach ($corretion_comments as $com_index => $com_val) {
                            ?>
                            <div class='comment_holder'>
                                <div class="comments-corrections-field">
                                    <div class="single_comment_block">
                                        <div class="cmt_body_bar">
                                            <div class="pull-left cmt_status">
                                                <a href="<?php echo $this->createUrl("profile/" . $com_val['user']->username); ?>" class="user_icon"><img alt="" src="<?php echo $this->profile_image_path . '/' . (($com_val['user']->profile_image != "") ? $com_val['user']->profile_image : $this->default_profile_pic); ?>"></a>
                                                <a href="<?php echo $this->createUrl("profile/" . $com_val['user']->username); ?>" class="user_name"><?php echo $com_val['user']->full_name; ?></a>
                                            </div>
                                            <div class="pull-right cmt_status2">
                                                <span class="p_datetime"><?php echo date("M d, Y h:i", strtotime($com_val->create_at)); ?></span>
                                                <span class="report_spam_link">
                                                    <a class="" href="#">Report this content.</a>
                                                </span>
                                            </div>
                                        </div>
                                        <?php
                                        if ($com_val->comment_type == "0"):
                                            ?>
                                            <div class="correction_list">
                                                <?php
                                                foreach ($com_val['userCorrections'] as $cor_index => $cor_val) {
                                                    ?>
                                                    <div class="correction_box">
                                                        <ul class="correction_field">
                                                            <li class="incorrect"><?php echo $cor_val->main_line; ?></li>
                                                            <?php
                                                            if ($cor_val->correction_type == "1") {
                                                                ?>
                                                                <li class="perfect">This sentence is perfect! No correction needed!</li>
                                                                <?php
                                                            } else if ($cor_val->correction_type == "0") {
                                                                ?>
                                                                <div class='corrected'>
                                                                    <?php echo $cor_val->corrected_line; ?>
                                                                    <div class="correction_comment_holder">
                                                                        <?php echo $cor_val->comment; ?>
                                                                    </div>
                                                                </div>
                                                                <?php
                                                            }
                                                            ?>
                                                        </ul>
                                                        <div class="correction_note_box pull-right" id="">
                                                            <a href="#">Good</a>
                                                            <a href="#" class="comnt-cort-quote">Quote</a>
                                                            <a class="edit_note_links" href="#"><img alt="" src="<?php echo $this->image_path; ?>/note-icon.png" title="Add this to My Notebook"></a>
                                                        </div>
                                                    </div>
                                                    <?php
                                                }
                                                ?>
                                            </div>
                                            <?php
                                        endif;
                                        ?>
                                        <div class="commentsss clearfix">
                                            <div class="comment_txt pull-left">
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
                                                    <!--                                                    You and <a href="#">1 people</a> like this -->
                                                </div>
                                                <?php
                                                if ($user_likes['user_liked'] == 0) {
                                                    ?>
                                                    <a href="javascript:void(0)" data-correctionid="<?php echo $cor_dtls->id; ?>" data-commentid="<?php echo $com_val->id; ?>" class="like-btn like_comment">Like</a>
                                                    <?php
                                                }
                                                ?>
                                                <a href="#" class="edit_note_links"><img title="Add this to My Notebook" src="<?php echo $this->image_path; ?>/note-icon.png" alt=""></a>
                                            </div>
                                        </div>
                                        <div class="thanks_with_btn">
                                            <?php
                                            if ($com_val->comment_type == "0" && $this->user_id == $cor_dtls->user_id && $com_val->user_id != $this->user_id) {
                                                if ($com_val->is_correct == "0") {
                                                    ?>
                                                    <a class="btn comment_thanks" data-correctionid="<?php echo $cor_dtls->id; ?>" data-commentid='<?php echo $com_val->id; ?>' href="javascript:void(0)"><i class="glyphicon glyphicon-star"></i>Thanks</a>
                                                   <!-- <a href="javascript:void(0)" class='thank_after' data-correctionid="<?php echo $cor_dtls->id; ?>" data-commentid='<?php echo $com_val->id; ?>'>Thanks</a> -->
                                                    <?php
                                                }
                                            }
                                            ?>
                                            <span class="thank_after" style='<?php
                                            if ($com_val->is_correct == "0") {
                                                echo "display:none;";
                                            } else {
                                                echo "display:block";
                                            }
                                            ?>'><i class="glyphicon glyphicon-star"></i>Thank you for your correction!</span>
                                        </div>
                                    </div>
                                    <div class="reply_comment_field">
                                        <div class="child_comments_holder">
                                            <?php
                                            $this->renderPartial("/child_comments", array("parent_id" => $com_val->id));
                                            ?>
                                        </div>
                                        <div class="clearfix">
                                            <a href="javascript:void(0)" class="user_icon"><img src="<?php echo $this->profile_image_path . "/" . $this->profile_pic; ?>" alt=""></a>
                                            <div class="reply_field">
                                                <textarea data-correctionid="<?php echo $cor_dtls->id; ?>" data-commentid="<?php echo $com_val->id; ?>" class="form-control normal_comment_box" rows="2" placeholder="Replay"></textarea>
                                                <div class='text-right'>
                                                    <a href="javascript:void(0)" class="com-cor-btn reply-btn">Reply</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php
                        }
                        ?>
                    </div>
                    <div class="correct_comment" id="correc-comm-araea" style="display: none;">
                        <form action="" method="post" id="correction_comment_form" enctype="multipart/form-data">
                            <input type="hidden" name="correction_id" value="<?php echo $cor_dtls->id; ?>" />
                            <div class="comment_heading">
                                <h3 class="pull-left">Post comments and corrections</h3>
                                <div class="pull-right button_group_box">
                                    <a href="#" class="btn btn-bl">Go to the corrections tutorial </a>
                                    <a href="#" class="btn btn-wht">How do I correct a journal?</a>
                                </div>
                            </div>
                            <div class="text-right">
                                <a href="#" class="comment_blue post_comment_label">Post Comment</a>
                                <a href="#" class="comment_blue post_correction_label" style="display: none;">Post Correction</a>
                            </div>
                            <div class="wrap_correct_as">
                                <h4 class="correction_related">Body</h4>
                                <h4 class="comment_related" style="display:none;">Post Comment</h4>
                            </div>
                            <div class="correction_related">
                                <?php
                                $expl = explode(".", $cor_dtls->intro_text);
                                $i = 0;
                                foreach ($expl as $key => $line) {
                                    if (trim($line) != "") {
                                        $line.=".";
                                        $i++;
                                        ?>
                                        <div class="correct_sentence_title intro_line" data-perfect='0' data-correct='0' data-index="<?php echo $i; ?>">
                                            <span class="sentence"><?php echo $line; ?></span>
                                            <input type="hidden" name="main_line[]" value="<?php echo $line; ?>" />
                                            <input type="hidden" class="line_perfect_input" name="line_perfect[]" value="2" />
                                            <div class="button_group_box correction_edit_link">
                                                <a href="#" class="btn btn-correct" data-correct='0'>Correct</a>
                                                <a href="#" class="btn btn-perfect">Perfect</a>
                                            </div>
                                            <div class="perfect_sentence_panel" id="perfect_sentence_panel_<?php echo $i; ?>">

                                            </div>
                                            <div class="correction_panel editor_panel" id="correct_editor_panel<?php echo $i; ?>">
                                                <div class="form-group">
                                                    <!--<img src="<?php // echo $this->image_path;    ?>/text-editor.png" alt="">-->
                                                    <textarea name="corrected_line[]" class="corrected_line"><?php echo $line; ?></textarea>
                                                    <div class='preview_correction_holder'>

                                                    </div>
                                                    <div class="correction_comment_holder">

                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="" class="c_com_label">Add a description or comment here.(Optional)</label>
                                                    <input type="text" class="form-control correction_comment" name="correction_comments[]" id="" placeholder="">
                                                </div>
                                                <div class="btn-group btn-group-sm c_bom_btn">
                                                    <button type="button" class="btn btn-default preview_correction">Preview</button>
                                                    <button type="button" class="btn btn-default">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                        <?php
                                    }
                                }
                                ?>
                            </div>
                            <div class="fukidashi">
                                <div class="button_group_box correction_related">
                                    <a href="javascript:void(0)" class="btn btn-wht" id="view_native_text">Native Language Version</a>
                                    <div id="native_text" style="display:none; padding:10px;">
                                        <?php
                                        echo $cor_dtls->native_text;
                                        ?>
                                    </div>
                                </div>
                                <div class="single_comment_box">
                                    <div class="comment_box_status">
                                        <a href="#" class="user_icon"><img alt="" src="<?php echo $this->profile_image_path . "/" . $this->profile_pic; ?>"></a>
                                        <a href="#" class="user_name"><?php echo $this->full_name; ?></a>
                                        <span class="pull-right gray_text"><?php echo date("M d, Y h:i"); ?></span>
                                    </div>
                                    <input type="hidden" name="comment_type" id="comment_type" value="0" />
                                    <textarea class="form-control" id="main_comment_box" name="comment_box" rows="5" placeholder="Write a comment"></textarea>
                                </div>
                                <div class="button_group_box text-center">
                                    <a href="javascript:void(0)" id="post_correction" class="com-cor-btn">Post corrections</a>
                                    <a href="#" id="reset_correcion_form" class="btn btn-reset">Reset</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <?php
                $this->renderPartial("/_correction_right", array("user_id" => $user_id));
                ?>
            </div>                
        </div>
    </div>
</div>
<script src="//tinymce.cachefly.net/4.1/tinymce.min.js"></script>
<script>
    tinymce.init({
        menubar: false,
        theme: "modern",
        selector: ".corrected_line",
        toolbar: "bold,strikethrough,red_button,blue_button,gray_button",
//        theme_modern_buttons1_add: "bold, italic, underline, strikethrough,bold_button",
        setup: function(editor) {
            editor.addButton('bold_button', {
                text: 'BOLD',
                image: full_path + '/themes/frontend/assets/images/cat-icon.png',
                onclick: function() {
//                editor.insertContent('Main button');
                    tinymce.activeEditor.formatter.register('bold_text', {inline: 'span', styles: {'font-weight': '%value'}});
                    tinymce.activeEditor.formatter.apply('bold_text', {value: 'bold'});
                }
            });
            editor.addButton('strike_button', {
                text: 'STRIKETHOUGH',
                image: full_path + '/themes/frontend/assets/images/cat-icon.png',
                onclick: function() {
//                editor.insertContent('Main button');
                    tinymce.activeEditor.formatter.register('striked_text', {inline: 'span', styles: {'text-decoration': '%value'}});
                    tinymce.activeEditor.formatter.apply('striked_text', {value: 'line-through'});
                }
            });
            editor.addButton('red_button', {
                text: 'RED',
                image: full_path + '/themes/frontend/assets/images/cat-icon.png',
                onclick: function() {
//                editor.insertContent('Main button');
                    tinymce.activeEditor.formatter.register('red_text', {inline: 'span', styles: {color: '%value'}});
                    tinymce.activeEditor.formatter.apply('red_text', {value: 'red'});
                }
            });
            editor.addButton('blue_button', {
                text: 'BLUE',
                image: full_path + '/themes/frontend/assets/images/cat-icon.png',
                onclick: function() {
//                editor.insertContent('Main button');
                    tinymce.activeEditor.formatter.register('blue_text', {inline: 'span', styles: {color: '%value'}});
                    tinymce.activeEditor.formatter.apply('blue_text', {value: 'blue'});
                }
            });
            editor.addButton('gray_button', {
                text: 'GRAY',
                image: full_path + '/themes/frontend/assets/images/cat-icon.png',
                onclick: function() {
//                editor.insertContent('Main button');
                    tinymce.activeEditor.formatter.register('gray_text', {inline: 'span', styles: {color: '%value'}});
                    tinymce.activeEditor.formatter.apply('gray_text', {value: 'gray'});
                }
            });
        }
    });
</script>
<?php
$this->loadJs(array("custom/correction.js",));
?>