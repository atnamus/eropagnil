<?php
foreach ($corrections as $key => $val) {
    $title = $val->title;
    if ($val->title == "") {
        $expl = explode("\n", $val->intro_text);
        if (count($expl) > 0) {
            $title = $expl[0];
        } else {
            $title = $val->intro_text;
        }
    }
    ?>
    <div class="achiv-list user_correction_row">
        <div class="row">
            <div class="col-sm-2">
                <div class="author-les">
                    <div class="author-img">
                        <a href='<?php echo $this->createurl("profile/".$val['user']->username); ?>'><img src="<?php echo $this->profile_image_path . '/' . (($val['user']->profile_image != "") ? $val['user']->profile_image : $this->default_profile_pic); ?>" alt=""></a>
                    </div>
                    <h3><a href='<?php echo $this->createurl("profile/".$val['user']->username); ?>'><?php echo $val['user']->full_name; ?></a></h3>
                </div>
            </div>
            <div class="col-sm-10">
                <span class="ent-auth"><a href='<?php echo $this->createurl("profile/".$val['user']->username); ?>'><?php echo $val['user']->full_name; ?></a></span>
                <h3><a href="<?php echo $this->createUrl("correction-details/" . $val->display_id); ?>" class=""><?php echo $title."-".$val->id; ?></a></h3>
                <p><?php echo $val->intro_text; ?></p>
                <div class="row">
                    <div class="col-md-6 corct-pdate"><?php echo date("M d, Y H:i", strtotime($val->create_at)); ?></div>
                    <div class="col-md-6 text-right">
                        <ul class="journal_status pull-right">
                            <li class="corrections_num active-bt"><?php echo $val->total_corrections; ?></li>
                            <li class="studying"><?php echo $val['language']->name; ?></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php
}?>