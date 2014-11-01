<div class="learner_public_profile">
    <div class="container">
        <div class="learn_pp">
            <div class="row">
                <div class="col-md-8">
                    <div class="opt-add-post">
                        <ol class="breadcrumb">
                            <li><a href="#"><i class="glyphicon glyphicon-home"></i></a></li>
                            <li class="active">POST </li>
                        </ol>
                        <h4>Post a new entry</h4>
                        <form action="" id="correction_form" class="">
                            <div class="form-group">
                                <label for="">Help me with my <em>(*)</em>
                                    <i class="glyphicon glyphicon-question-sign post-tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="(*)Help native speakers find your journal entry easily by selecting the language you would like to be corrected."></i>
                                </label>
                                <select name="language_id" id="language_id" class="form-control small">
                                    <?php
                                    foreach ($languages as $v) {
                                        ?><option value="<?php echo $v->id; ?>"><?php echo $v->name; ?></option><?php
                                    }
                                    ?>
                                </select>                                                       
                            </div>
                            <div class="form-group">
                                <label for="">Title(Optional)</label>
                                <input type="text" class="form-control" id="title" name=title placeholder="">
                            </div>
                            <div class="form-group">
                                <label for="">Text <em>(*)</em> The first line will be shown as the title if title is blank</label>
                                <textarea class="form-control" name="intro_text" id="intro_text" rows="5"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="">Native language version (Optional) 
                                    <i class="glyphicon glyphicon-question-sign post-tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add a native language version of this post to help correctors understand what you are trying to say."></i>
                                </label>
                                <textarea name="native_text" id="native_text" class="form-control" rows="5"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="">Access settings <em>(*)</em> 
                                    <i class="glyphicon glyphicon-question-sign post-tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="'Public' means even non-Lang-8 members can see this post."></i>
                                </label>
                                <select name="visible_to" id="visible_to" class="form-control small">
                                    <option value="0"> Public </option>
                                    <option value="1"> Share with all users </option>
                                    <option value="2"> Share with My Friends only </option>
                                    <option value="3"> Private - Just Me </option>
                                    <option value="4"> Assign to a friend </option>
                                </select>
                            </div>
                            <div class="form-group">
                                <!-- <label class="checkbox-inline">
                                  <input type="checkbox" id="inlineCheckbox1" value="option1"> 1
                                </label>
                                <label class="checkbox-inline">
                                  <input type="checkbox" id="inlineCheckbox2" value="option2"> 2
                                </label> -->
                                <div class="checkbox-inline">
                                    <input type="checkbox" id="fb" name="cc">
                                    <label for="fb"><span></span><img src="<?php echo $this->image_path; ?>/facbk-icon.png" alt=""></label>
                                </div>
                                <div class="checkbox-inline">
                                    <input type="checkbox" id="tw" name="cc">
                                    <label for="tw"><span></span><img src="<?php echo $this->image_path; ?>/twit-icon.png" alt=""></label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="">Tags 
                                    <i class="glyphicon glyphicon-question-sign post-tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Help people discover your post! Tag keywords that relate to your entry."></i>
                                </label>
                                <input type="text" class="form-control small" name="tags" id="tags" placeholder="">
                                <div class="gray-text">space separated</div>
                            </div>
                            <div class="form-group">
                                <span class="prem-acc">You can get more corrections and upload pictures with a Premium Account.</span>
                            </div>
                            <div class="form-group">
                                <a href="javascript:void(0)" id="publish_correction" class="post-btn publish-btn">Publish</a>
                                <!--<a href="javascript:void(0)" id="preview_correction" class="post-btn preview-btn">Preview</a>-->
                            </div>
                        </form>
                    </div>
                </div>
                <?php
                $this->renderPartial("/_correction_right", array(
                    "user_id" => $this->user_id
                ));
                ?>
            </div>                
        </div>
    </div>
</div>
<?php
$this->loadJs(array("custom/correction.js"));
?>