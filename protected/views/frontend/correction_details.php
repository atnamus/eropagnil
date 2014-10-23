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
                            echo $cor_dtls->intro_text;
                            ?>
                        </div>
                        <?php
                        if ($cor_dtls->native_text != "") {
                            ?>
                            <hr />
                            <div class="">
                                <?php
                                echo $cor_dtls->native_text;
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
                            <a href="#" class="com-cor-btn">Post comments and corrections</a>                          
                        </div>
                    </div>
                    <div id="corrections_comments" style="display:none;">
                        <div class="little-spaced">
                            <!--add this-->

                            <div class="pull-right">
                                <a href="#" class=""><img src="<?php echo $this->image_path; ?>/article-clipper-fr.png" alt=""></a>
                            </div>
                        </div>
                        <div class="comments-corrections-field">
                            <div class="single_comment_block">
                                <div class="cmt_body_bar">
                                    <div class="pull-left cmt_status">
                                        <a href="#" class="user_icon"><img alt="" src="<?php echo $this->image_path; ?>/ch-less03.jpg"></a>
                                        <a href="#" class="user_name">John Roy</a>
                                    </div>
                                    <div class="pull-right cmt_status2">
                                        <span class="p_datetime">Sep 19, 2014 01:55</span>
                                        <span class="report_spam_link">
                                            <a class="" href="#">Report this content.</a>
                                        </span>
                                    </div>
                                </div>
                                <div class="correction_list">
                                    <div class="correction_box">
                                        <ul class="correction_field">
                                            <li class="incorrect">I played tennis last evening.</li>
                                            <li class="correct">This sentence is perfect! No correction needed!</li>
                                        </ul>
                                        <div class="correction_note_box pull-right" id="">
                                          <!-- <span class="nice_pt_status">1 people think this correction is good.</span> -->
                                            <a href="#">Good</a>
                                            <a href="#" class="comnt-cort-quote">Quote</a>
                                            <a class="edit_note_links" href="#"><img alt="" src="<?php echo $this->image_path; ?>/note-icon.png" title="Add this to My Notebook"></a>

                                        </div>
                                    </div>
                                    <div class="correction_box">
                                        <ul class="correction_field">
                                            <li class="incorrect">I played tennis last evening.</li>
                                            <li class="perfect">This sentence is perfect! No correction needed!</li>
                                        </ul>
                                        <div class="correction_note_box pull-right" id="">
                                            <span class="nice_pt_status">1 people think this correction is good.</span>
                                            <a href="#">Good</a>
                                            <a href="#" class="comnt-cort-quote">Quote</a>
                                            <a class="edit_note_links bt_ico" href="#"><img alt="" src="<?php echo $this->image_path; ?>/note-icon.png" title="Add this to My Notebook"></a>                              
                                        </div>
                                    </div>                        
                                </div>
                                <span class="thank_after"><i class="glyphicon glyphicon-star"></i>Thank you for your correction!</span>
                            </div>
                            <div class="reply_comment_field">
                                <a href="#" class="user_icon"><img src="<?php echo $this->image_path; ?>/ch-less01.jpg" alt=""></a>
                                <div class="reply_field">                            
                                    <textarea class="form-control" rows="2" placeholder="Replay"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="correct_comment">
                        <form action="" method="post" id="correction_comment_form" enctype="multipart/form-data">
                            <div class="comment_heading">
                                <h3 class="pull-left">Post comments and corrections</h3>
                                <div class="pull-right button_group_box">
                                    <a href="#" class="btn btn-bl">Go to the corrections tutorial </a>
                                    <a href="#" class="btn btn-wht">How do I correct a journal?</a>
                                </div>
                            </div>
                            <div class="text-right"><a href="#" class="comment_blue">Post Comment</a></div>
                            <div class="wrap_correct_as">
                                <h4>Body</h4>
                            </div>
                            <?php
                            $expl = explode("\n", $cor_dtls->intro_text);
                            $i = 0;
                            foreach ($expl as $key => $line) {
                                $i++;
                                ?>
                                <div class="correct_sentence_title intro_line" data-perfect='0' data-index="<?php echo $i; ?>">
                                    <span class="sentence"><?php echo $line; ?></span>
                                    <input type="hidden" name="main_line[]" value="<?php echo $line; ?>" />
                                    <input type="hidden" name="line_perfect[]" value="0" />
                                    <div class="button_group_box correction_edit_link">
                                        <a href="#" class="btn btn-correct">Correct</a>
                                        <a href="#" class="btn btn-perfect">Perfect</a>
                                    </div>
                                    <div class="perfect_sentence_panel" id="perfect_sentence_panel_<?php echo $i; ?>">

                                    </div>
                                    <div class="correction_panel editor_panel" id="correct_editor_panel<?php echo $i; ?>">
                                        <div class="form-group">
                                            <img src="<?php echo $this->image_path; ?>/text-editor.png" alt="">
                                        </div>
                                        <div class="form-group">
                                            <label for="">Add a description or comment here.(Optional)</label>
                                            <input type="text" class="form-control" id="" placeholder="">
                                        </div>
                                        <div class="btn-group btn-group-sm">
                                            <button type="button" class="btn btn-default">Preview</button>
                                            <button type="button" class="btn btn-default">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                                <?php
                            }
                            ?>
                            <div class="fukidashi">
                                <div class="button_group_box">
                                    <a href="javascript:void(0)" class="btn btn-wht">Native Language Version</a>
                                </div>
                                <div class="single_comment_box">
                                    <div class="comment_box_status">
                                        <a href="#" class="user_icon"><img alt="" src="<?php echo $this->profile_image_path . "/" . $this->profile_pic; ?>"></a>
                                        <a href="#" class="user_name"><?php echo $this->full_name; ?></a>
                                        <span class="pull-right gray_text"><?php echo date("M d, Y h:i"); ?></span>
                                    </div>
                                    <textarea class="form-control" id="" name="" rows="5" placeholder="Write a comment"></textarea>
                                </div>
                                <div class="button_group_box text-center">
                                    <a href="javascript:void(0)" id="post_correction" class="com-cor-btn">Post corrections</a>
                                    <a href="#" id="reset_correcion_form" class="btn btn-reset">Reset</a>
                                </div>
                            </div> 
                        </form>
                    </div>

                </div>
                <div class="col-md-4">
                    <div class="author_box">
                        <div class="user_icon"><img src="<?php echo $this->profile_image_path; ?>/<?php echo $this->profile_pic; ?>" alt=""></div>
                        <div class="author_info"><a href="" class="user_name"><?php echo $this->full_name; ?></a></div>
                        <div class="clear"></div>
                        <div class="learning_languages">
                            <ul class="language_status">
                                <li class="speak">English</li>
                                <li class="study">Cantonese</li>
                            </ul>
                        </div>
                        <div class="bdbox">
                            <table class="entry_status">
                                <tbody>
                                    <tr>
                                        <td class="">
                                            <p><a href="#"><?php echo $entries_written; ?></a></p>
                                            <span>Entries Written</span>
                                        </td>
                                        <td class="">
                                            <p><a href="#">0</a></p>
                                            <span>Corrections made</span>
                                        </td>
                                        <td class="">
                                            <p><a href="#">0</a></p>
                                            <span>Corrections received</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="lpointtbl side-bar">
                                <tbody>
                                    <tr>
                                        <th>L points</th>
                                        <td class="l_point">210</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="calendar-section">
                        <img src="<?php echo $this->image_path; ?>/calendar.jpg" alt="">
                    </div>

                </div>
            </div>                
        </div>
    </div>
</div>
<?php
$this->loadJs(array("custom/correction.js"));
?>