<div class="stapes-wrap stapes-wrap-build-lesson" style="display:none; z-index:9999;">
    <div class="create-stapes">
        <div class="container">
            <div class="steps-box">
                <div class="step1">
                    <div class="step-left">
                        <h2>A new language learning</h2>
                        <a href="javascript:void(0)" id="build_lesson" class="build-lesson">Build lesson</a>
                    </div>
                    <div class="step-right">
                        <img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/step-1.png" alt="">
                    </div>
                </div>
                <div class="step2">
                    <h2>information <a href="javascript:void(0)" id="step2_done" class="pull-right done-btn">Done</a></h2>
                    <div class="step-left col-xs-7">
                        <form class="form-horizontal" id="lesson_details_form" role="form">
                            <div class="form-group">
                                <label for="" class="col-sm-3 control-label">Language:</label>
                                <div class="col-sm-9">
                                    <div class="stape-select">
                                        <select name="language_id" id="language_id" tabindex="1" class="form-control stape-select">
                                            <option value="">Select</option>
                                            <?php
                                            foreach ($languages as $v) {
                                                ?><option value="<?php echo $v->id; ?>"><?php echo $v->name; ?></option><?php
                                            }
                                            ?>
                                        </select>
                                    </div> 
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="col-sm-3 control-label"> Title:</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="title" name="title" value="" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="col-sm-3 control-label">Stage:</label>
                                <div class="col-sm-9">
                                    <div class="stape-select">
                                        <select name="stage" id="stage" tabindex="1" class="form-control stape-select">
                                            <option value="">Select</option>
                                            <?php
                                            foreach ($stages as $v) {
                                                ?><option value="<?php echo $v->id; ?>"><?php echo $v->name; ?></option><?php
                                            }
                                            ?>
                                        </select>
                                    </div> 
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="col-sm-3 control-label"> Category:</label>
                                <div class="col-sm-9">
                                    <div class="stape-select">                               
                                        <select name="category" id="category" tabindex="1" class="form-control stape-select">
                                            <option value="">Select</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="col-sm-3 control-label"> Level:</label>
                                <div class="col-sm-9">
                                    <div class="stape-select">                               
                                        <select name="level_select" id="level_select" tabindex="1" class="form-control stape-select">
                                            <option value="1">Level 1</option>
                                            <option value="2">Level 2</option>
                                            <option value="3">Level 3</option>
                                            <option value="4">Level 4</option>
                                            <option value="5">Level 5</option>
                                            <option value="6">Level 6</option>
                                            <option value="7">Level 7</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="col-sm-3 control-label"> Tags:</label>
                                <div class="col-sm-9">
                                    <input type="text" id="tags" name="tags" class="form-control" id="">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="col-sm-3 control-label">Memo:</label>
                                <div class="col-sm-9">
                                    <textarea id="memo" name="memo" class="form-control" rows="4"></textarea>
                                </div>
                            </div>
                            <input type="hidden" id="temp_lesson_id" name="temp_lesson_id" />
                            <div class="form-group">
                                <div class="col-sm-offset-3 col-sm-10">                                        
                                    <a href="javascript:void(0)" id="create_skit_step2" class="skit-btn skit-btn-inact">Skit</a>
                                    <a href="javascript:void(0)" id="create_quiz_step2" class="quiz-btn">Quiz</a>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="step-right col-xs-5">
                        <img src="<?php echo Yii::app()->request->getBaseUrl(true); ?>/themes/frontend/assets/images/step-2.png" alt="">
                    </div>
                </div>
                <div class="create_skit step3">
                    <h2>
                        Create a skit <a href="javascript:void(0)" id="step3_done" class="pull-right done-btn">Done</a>
                    </h2>
                    <div>
                        <form class="form-horizontal" id="skit_form" method="post" role="form">
                            <ul id="tabs">
                                <li id='video_tab' class="active"><i class="video-icon"></i></li>
                                <li id='audio_tab'><i class="rec-icon"></i></li>
                                <li id='image_tab'><i class="image-icon"></i></li>
                            </ul>
                            <ul id="tab">
                                <li class="active">
                                    <div class="tab-cont-list">
                                        <div class="col-md-7" style='float: none; margin: 80px auto;'>
                                            <input type="file" id="video_choose" data-buttonBefore="true" name="video_choose" data-buttonText="Browse Video" class="filestyle" data-buttonName="btn-primary"/>
                                        </div>
                                        <div style="clear:both;"></div>
    <!--                                        <textarea class="" rows="4">&lt;iframe width="560" height="315" src="//www.youtube.com/embed/Cl1pZxRSwb4" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;
                                        </textarea>-->
    <!--                                        <textarea class="" rows="4">&lt;iframe width="560" height="315" src="//www.youtube.com/embed/Cl1pZxRSwb4" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;
                                        </textarea>-->
                                        <!--<a href="#" class="video-lang">En</a>-->
                                    </div>
                                </li>
                                <li>
                                    <div class="tab-cont-list">
                                        <div class="col-md-7" style='float: none; margin: 80px auto;'>
                                            <input type="file" id="audio_choose" data-buttonBefore="true" name="audio_choose" data-buttonText="Browse Audio" class="filestyle" data-buttonName="btn-primary"/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="tab-cont-list">
                                        <div class="col-md-4" style='float: none; margin: 80px auto;'>
                                            <img src='' id='skit_preview_image' />
                                            <input type="file" id="image_choose" data-buttonBefore="true" name="image_choose" data-buttonText="Browse Image" class="filestyle" data-buttonName="btn-primary"  data-input="false"/>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="">
                                <a href="javascript:void(0)" id="create_skit_step3" class="skit-btn">Skit</a>
                                <a href="javascript:void(0)" id="create_quiz_step3" class="quiz-btn">Quiz</a>                                    
                            </div>
                            <input type='hidden' name='video_file_name' class='nm_file_name skit_video_name' value='' />
                            <input type='hidden' name='audio_file_name' class='nm_file_name skit_audio_name' value='' />
                            <input type='hidden' name='image_file_name' class='nm_file_name skit_image_name' value='' />
                            <input type='hidden' id='skit_type' name='skit_type' value='V' />
                            <input type="hidden" name="lesson_id" />
                            <input type="hidden" name="temp_skit_id" />
                        </form>
                    </div>
                </div>
                <div class="create_quiz step4">
                    <h2>create a quiz <a href="javascript:void(0)" id="step4_done" class="pull-right done-btn">Done</a></h2>
                    <div>
                        <form class="form-horizontal" id="question_form" action="#" role="form" method="post" enctype="multipart/form-data">
                            <div class="quiz-list question_holder">
                                <a href="" class="rec-icon">
                                    <label class="file_container">
                                        <label class="file_name_holder" for="audio_1"></label>
                                        <input type="file" data-fileindex='1' id="audio_1" class="audio_file" name="question_audio" />
                                        <input type='hidden' name='audio_file_name_1' class='nm_file_name' value='' />
                                    </label>
                                    <span class='file_cross audio_delete_question'>X</span>
                                </a>
                                <a href="" class="image-icon">
                                    <label class="file_container">
                                        <label class="file_name_holder" for="image_1"></label>
                                        <input type="file" data-fileindex='1' id="image_1" class="image_file" name="question_image" />
                                        <input type='hidden' name='image_file_name_1' class='nm_file_name' value='' />
                                    </label>
                                    <span class='file_cross image_delete_question'>X</span>
                                </a>
                                <textarea name="question_text" id="question_text" placeholder="Question"></textarea>
                            </div>
                            <div class="quiz-ans">
                                <h3 class="col-sm-10">answer</h3>
                                <h3 class="col-sm-2">correct</h3>
                            </div>
                            <?php
                            $k = 1;
                            for ($i = 2; $i < 6; $i++) {
                                ?>
                                <div class="row answer_holder">
                                    <div class="col-sm-10">
                                        <div class="quiz-list">
                                            <a href="javascript:void(0)" class="rec-icon audio_holder">
                                                <label class="file_container">
                                                    <label class="file_name_holder" for="audio_<?php echo $i; ?>"></label>
                                                    <input type="file" data-fileindex='<?php echo $i; ?>' id="audio_<?php echo $i; ?>" class="audio_file" name="audio_<?php echo ($k - 1); ?>" />
                                                    <input type='hidden' name='audio_file_name_<?php echo $i; ?>' class='nm_file_name audio_name' value='' />
                                                </label>
                                                <span class='file_cross audio_delete_answer'>X</span>
                                            </a>
                                            <a href="javascript:void(0)" class="image-icon image_holder">
                                                <label class="file_container">
                                                    <label class="file_name_holder" for="image_<?php echo $i; ?>"></label>
                                                    <input type="file" data-fileindex='<?php echo $i; ?>' id="image_<?php echo $i; ?>" class="image_file" name="image_<?php echo ($k - 1); ?>" />
                                                    <input type='hidden' name='image_file_name_<?php echo $i; ?>' class='nm_file_name image_name' value='' />
                                                </label>
                                                <span class='file_cross image_delete_answer'>X</span>
                                            </a>
                                            <textarea name="answer_text[]" class="answer_text" placeholder="Answer <?php echo $k; ?>"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-sm-2">
                                        <div class="checkbox">
                                            <input type="checkbox" class="chkbox answer_chkbox" id="c<?php echo $i; ?>" name="right_answer_<?php echo ($k - 1); ?>" />
                                            <label for="c<?php echo $i; ?>"><span></span></label>
                                        </div>
                                    </div>
                                </div>
                                <?php
                                $k++;
                            }
                            ?>
                            <div class="">
                                <a href="javascript:void(0)" id="create_skit_step4" class="skit-btn skit-btn-inact">Skit</a>
                                <a href="javascript:void(0)" id="create_quiz_step4" class="quiz-btn quiz-btn-act">Quiz</a>                                    
                            </div>
                            <input type="hidden" name="lesson_id" />
                            <input type="hidden" name="temp_question_id" />
                        </form>
                    </div>
                </div>
                <div class="post_lession step5">
                    <h2>Post lesson</h2>

                    <div>
                        <div class="col-sm-11 text-center">
                            <a href="#" class="preview">Preview</a>
                        </div>
                        <div class="col-sm-1">
                            <a href="#" class="pull-right delete" id="delete_lesson">
                                <span class="glyphicon glyphicon-trash"></span>
                            </a>
                        </div>                            
                        <h3>Information </h3>
                        <div class="info-list">
                            <h2>Content</h2>
                            <ul id="lesson_assets">
                            </ul>
                            <!--<h2 class="info-bt">Settings</h2>-->
                            <h2 class="info-bt">Settings</h2>
                            <div class="checkbox">
                                <input type="checkbox" id="c1" name="cc">
                                <label for="c1"><span></span>Lorum Ipsum</label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="c2" name="cc">
                                <label for="c2"><span></span>Lorum Ipsum</label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="c3" name="cc">
                                <label for="c3"><span></span>Lorum Ipsum</label>
                            </div>
                            <a href="javascript:void(0)" class="step6-btn post" id="post_lesson">Post</a>
                            <a href="javascript:void(0)" class="step6-btn draft" id="save_as_draft">Draft</a>
                            <!--<a href="javascript:void(0)" class="step6-btn edit-first">Edit</a>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>