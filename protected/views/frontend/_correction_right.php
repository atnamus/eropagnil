<?php
$user_details = User::model()->findByPk($user_id);
$profile_pic = $user_details->profile_image;
$profile_pic = ($profile_pic == "") ? $this->default_profile_pic : $profile_pic;
$total_corrections = Correction::model()->get_correction_counts($user_id);

$entries_written = $total_corrections['entries_written'];
$corrections_recieved = $total_corrections['corrections_recieved'];
$correction_made = $total_corrections['correction_made'];
?>
<input type="hidden" id="calendar_user_id" value="<?php echo $user_details->id; ?>" />
<div class="col-md-4">
    <div class="author_box">
        <div class="user_icon"><img src="<?php echo $this->profile_image_path; ?>/<?php echo $profile_pic; ?>" alt=""></div>
        <div class="author_info"><a href="<?php echo $this->createUrl("profile/" . $user_details->username); ?>" class="user_name"><?php echo $user_details->full_name; ?></a></div>
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
                            <p><a href="#"><?php echo $correction_made; ?></a></p>
                            <span>Corrections made</span>
                        </td>
                        <td class="">
                            <p><a href="#"><?php echo $corrections_recieved; ?></a></p>
                            <span>Corrections received</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <?php
            if ($user_id == $this->user_id) {
                ?>
                <table class="lpointtbl side-bar">
                    <tbody>
                        <tr>
                            <th>L points</th>
                            <td class="l_point">210</td>
                        </tr>
                    </tbody>
                </table>
                <?php
            }
            ?>
        </div>
    </div>
    <div class="calendar-section">
        <!--<img src="<?php // echo $this->image_path;  ?>/calendar.jpg" alt="">-->
        <div id="calendar_holder"></div>
    </div>
</div>
<?php
$this->loadCss(array("widget-calendar.css"));
$this->loadJs(array("jquery.nicescroll.min.js"));
Yii::app()->clientScript->registerScript("search", 'fetch_events();', CClientScript::POS_END);
?>
<div class="modal fade bs-example-modal-lg" id="largemoadal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title" id="modal_title">Large modal</h4>
            </div>
            <div class="modal-body" id="modal_body" style='height:500px;'>
                
            </div>
        </div>
    </div>
</div>