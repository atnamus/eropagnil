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
                    <h4>Edit entry</h4>
                    <form action="" id="update_form" class="">
                        <input type='hidden' name='display_id' value='<?php echo $display_id; ?>' />
                      <div class="form-group">
                        <label for="">Help me with my <em>(*)</em>
                            <i class="glyphicon glyphicon-question-sign post-tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="(*)Help native speakers find your journal entry easily by selecting the language you would like to be corrected."></i>
                        </label>
                        <select name="language_id" id="language_id" class="form-control small">
                        <?php
                        foreach ($languages as $v) {
                            ?><option <?php if($correction->language_id==$v->id){ echo "selected='selected'"; } ?> value="<?php echo $v->id; ?>"><?php echo $v->name; ?></option><?php
                        }
                        ?>
                        </select>                                                       
                      </div>
                      <div class="form-group">
                        <label for="">Title(Optional)</label>
                        <input type="text" value="<?php echo $correction->title; ?>" class="form-control" id="title" name=title placeholder="">
                      </div>
                      <div class="form-group">
                        <label for="">Text <em>(*)</em> The first line will be shown as the title if title is blank</label>
                        <textarea class="form-control" name="intro_text" id="intro_text" rows="5"><?php echo $correction->intro_text; ?></textarea>
                      </div>
                      <div class="form-group">
                        <label for="">Native language version (Optional) 
                          <i class="glyphicon glyphicon-question-sign post-tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add a native language version of this post to help correctors understand what you are trying to say."></i>
                        </label>
                        <textarea name="native_text" id="native_text" class="form-control" rows="5"><?php echo $correction->native_text; ?></textarea>
                      </div>
                      <div class="form-group">
                        <label for="">Access settings <em>(*)</em> 
                          <i class="glyphicon glyphicon-question-sign post-tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="'Public' means even non-Lang-8 members can see this post."></i>
                        </label>
                        <select name="visible_to" id="visible_to" class="form-control small">
                          <option <?php if($correction->visible_to==0){ echo "selected='selected'"; } ?> value="0"> Public </option>
                          <option <?php if($correction->visible_to==1){ echo "selected='selected'"; } ?> value="1"> Share with all Lang-8 users </option>
                          <option <?php if($correction->visible_to==2){ echo "selected='selected'"; } ?> value="2"> Share with My Friends only </option>
                          <option <?php if($correction->visible_to==3){ echo "selected='selected'"; } ?> value="3"> Private - Just Me </option>
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
                        <input type="text" class="form-control small" name="tags" id="tags" value="<?php echo $tags; ?>" placeholder="">
                        <div class="gray-text">space separated</div>
                      </div>
                      <div class="form-group">
                        <span class="prem-acc">You can get more corrections and upload pictures with a Premium Account.</span>
                      </div>
                      <div class="form-group">
                        <a href="javascript:void(0)" id="save_correction" class="post-btn publish-btn">Update</a>
                        <!--<a href="javascript:void(0)" id="preview_correction" class="post-btn preview-btn">Preview</a>-->
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