<div class="learner_public_profile">
    <div class="container">
        <div class="learn_pp">
            <div class="row">
                <div class="col-md-12">
                    <div class="output-lesson">
                        <ul id="opt-tabs">
                            <li class=""><i class="correct-icon"></i>Correct</li>
                            <li class="active-bt"><i class="ltEnt-icon"></i>Latest Entries</li>
                            <li class=""><i class="popEnt-icon"></i>Popular Entries</li>                                    
                        </ul>
                        <ul id="opt-tab">
                            <li class="">
                                <div class="tab-cont-list" style='min-height:400px;'>
                                    <div class="row">
                                        <div class="col-md-9">
                                            <h2>Latest journal entries that are awaiting your correction</h2>
                                        </div>                                
                                        <div class="col-md-3">
                                            <ul class="pagination">
                                                <li class="active-bt"><a href="#">«</a></li>
                                                <li class="active"><a href="#">1</a></li>
                                                <li class=""><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">4</a></li>
                                                <li><a href="#">5</a></li>
                                                <li><a href="#">»</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="checkbox">
                                        <input type="checkbox" id="c1" name="cc">
                                        <label for="c1"><span></span>Show only uncorrected journals</label>
                                    </div>
                                    <div class="row">
                                        <div class="corct-list">
                                            <div class="col-md-1"><img src="images/ch-less03.jpg" alt=""></div>
                                            <div class="col-md-10">
                                                <span>intellegat </span>
                                                <h3>Nominavi reprehendunt at iusut sea numquam </h3>
                                                <p>An nostrud consulatu signiferumque eum, ocurreret imperdiet qui et. Pro veritus gloriatur ne, summo placerat definiebas sea te.</p>
                                                <div class="row">
                                                    <div class="col-md-6 corct-pdate">Sep 1, 2014 05:53</div>
                                                    <div class="col-md-6 text-right">
                                                        <ul class="journal_status floated_on_right">
                                                            <li class="comment_num active-bt">26</li>
                                                            <li class="corrections_num">3</li>
                                                            <li class="studying">English</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <button type="button" class="btn btn-default btn-xs">View other posts from this user »</button>
                                            </div>
                                            <div class="clear"></div>
                                        </div>                                  
                                    </div> 
                                </div>
                            </li>
                            <li class="active-bt">
                                <div class="tab-cont-list" style='min-height:400px;'>
                                    <div class="row">
                                        <div class="col-md-9">
                                            <h2>Latest Journal Entries</h2>
                                        </div>                                
                                        <div class="col-md-3">
                                            <!-- <ul class="pagination">
                                              <li class="active-bt"><a href="#">«</a></li>
                                              <li class="active"><a href="#">1</a></li>
                                              <li class=""><a href="#">2</a></li>
                                              <li><a href="#">3</a></li>
                                              <li><a href="#">4</a></li>
                                              <li><a href="#">5</a></li>
                                              <li><a href="#">»</a></li>
                                            </ul> -->
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <?php
                                    foreach ($latest_entries as $key => $val) {
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
                                        <div class="row">
                                            <div class="corct-list">
                                                <div class="col-md-1">
                                                    <img src="<?php echo $this->profile_image_path . '/' . (($val['user']->profile_image != "") ? $val['user']->profile_image : $this->default_profile_pic); ?>" alt="">
                                                </div>
                                                <div class="col-md-10">
                                                    <span><a href="<?php echo $this->createUrl("profile/".$val['user']->username); ?>"><?php echo $val['user']->full_name; ?></a></span>
                                                    <h3><a href='<?php echo $this->createUrl("correction-details/" . $val->display_id); ?>'><?php echo $title; ?></a></h3>
                                                    <p><?php echo $val->intro_text; ?></p>
                                                    <div class="row">
                                                        <div class="col-md-6 corct-pdate"><?php echo date("M d, Y h:i", strtotime($val->create_at)); ?></div>
                                                        <div class="col-md-6 text-right">
                                                            <ul class="journal_status floated_on_right">
                                                                <li class="comment_num active-bt"><?php echo $val->total_comments; ?></li>
                                                                <li class="corrections_num"><?php echo $val->total_corrections; ?></li>
                                                                <li class="studying"><?php echo $val['language']->name; ?></li>
                                                            </ul>
                                                        </div>
                                                    </div>                                      
                                                </div>
                                                <div class="clear"></div>
                                            </div>                                  
                                        </div>
                                        <?php
                                    }
                                    ?>
                                </div>
                            </li>
                            <li class="">
                                <div class="tab-cont-list">
                                    <div class="row">
                                        <div class="col-sm-9">
                                            <h2 class="pop-entry-sub">Popular Entries</h2>
                                            <ul class="nav nav-pills">
                                                <li class="active-btn active-bt">
                                                    <a href="#"> <i class="glyphicon glyphicon-star"></i>Popular Entries </a>
                                                </li>
                                                <li class=""><a href="#"><i class="glyphicon glyphicon-ok"></i>Popular corrections</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-sm-3">
                                            <ul class="nav nav-tabs nav-stacked">
                                                <li class="active-bt">
                                                    <a href="#">Cantonese</a>
                                                </li>
                                                <li class="active">
                                                    <a href="#">English</a>
                                                </li>
                                            </ul>
                                            <!-- <div class="btn-group-vertical btn-group-lg">
                                              <button type="button" class="btn btn-default">Cantonese</button>
                                              <button type="button" class="btn btn-default">English</button>
                                            </div> -->
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <!-- Nav tabs -->
                                            <ul class="nav nav-tabs" role="tablist">
                                                <li class="active active-bt"><a href="#views" role="tab" data-toggle="tab">Views</a></li>
                                                <li class=""><a href="#comnt" role="tab" data-toggle="tab">Comments  </a></li>
                                                <li class=""><a href="#cortion" role="tab" data-toggle="tab">Corrections</a></li>
                                            </ul>
                                            <!-- Tab panes -->
                                            <div class="tab-content">
                                                <div class="tab-pane fade active in" id="views">
                                                    <p class="spaced description">These journals got a lot of comments recently. ('Public' entries only.)</p>
                                                    <div class="row">
                                                        <div class="corct-list">
                                                            <div class="col-md-1"><img src="images/ch-less03.jpg" alt=""></div>
                                                            <div class="col-md-11">
                                                                <span>intellegat</span>
                                                                <h3>Originally. 
                                                                    <button type="button" id="nativLang" class="btn btn-default btn-sm nativLang" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">With native lang </button>
                                                                </h3>
                                                                <p>An nostrud consulatu signiferumque eum, ocurreret imperdiet qui et. Pro veritus gloriatur ne, summo placerat definiebas sea te.</p>
                                                                <div class="row">
                                                                    <div class="col-md-6 corct-pdate">Sep 1, 2014 05:53</div>
                                                                    <div class="col-md-6 text-right">
                                                                        <ul class="journal_status floated_on_right">
                                                                            <li class="comment_num active-bt">26</li>
                                                                            <li class="corrections_num active">3</li>
                                                                            <li class="studying">English</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>                                      
                                                            </div>
                                                            <div class="clear"></div>
                                                        </div>                                  
                                                    </div>
                                                    <div class="row">
                                                        <div class="corct-list">
                                                            <div class="col-md-1"><img src="images/ch-less03.jpg" alt=""></div>
                                                            <div class="col-md-11">
                                                                <span>intellegat</span>
                                                                <h3>Originally. 
                                                                    <button type="button" id="" class="btn btn-default btn-sm nativLang" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">With native lang </button>
                                                                </h3>
                                                                <p>An nostrud consulatu signiferumque eum, ocurreret imperdiet qui et. Pro veritus gloriatur ne, summo placerat definiebas sea te.</p>
                                                                <div class="row">
                                                                    <div class="col-md-6 corct-pdate">Sep 1, 2014 05:53</div>
                                                                    <div class="col-md-6 text-right">
                                                                        <ul class="journal_status floated_on_right">
                                                                            <li class="comment_num active-bt">26</li>
                                                                            <li class="corrections_num active">3</li>
                                                                            <li class="studying">English</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>                                      
                                                            </div>
                                                            <div class="clear"></div>
                                                        </div>                                  
                                                    </div>
                                                    <div class="row">
                                                        <div class="corct-list">
                                                            <div class="col-md-1"><img src="images/ch-less03.jpg" alt=""></div>
                                                            <div class="col-md-11">
                                                                <span>intellegat</span>
                                                                <h3>Originally. 
                                                                    <button type="button" id="" class="btn btn-default btn-sm nativLang" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">With native lang </button>
                                                                </h3>
                                                                <p>An nostrud consulatu signiferumque eum, ocurreret imperdiet qui et. Pro veritus gloriatur ne, summo placerat definiebas sea te.</p>
                                                                <div class="row">
                                                                    <div class="col-md-6 corct-pdate">Sep 1, 2014 05:53</div>
                                                                    <div class="col-md-6 text-right">
                                                                        <ul class="journal_status floated_on_right">
                                                                            <li class="comment_num active-bt">26</li>
                                                                            <li class="corrections_num active">3</li>
                                                                            <li class="studying">English</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>                                      
                                                            </div>
                                                            <div class="clear"></div>
                                                        </div>                                  
                                                    </div>

                                                </div>
                                                <div class="tab-pane fade" id="comnt">
                                                    <p class="spaced description">These journals got a lot of comments recently. ('Public' entries only.)</p>
                                                    <div class="row">
                                                        <div class="corct-list">
                                                            <div class="col-md-1"><img src="images/ch-less03.jpg" alt=""></div>
                                                            <div class="col-md-11">
                                                                <span>intellegat</span>
                                                                <h3>Originally. 
                                                                    <button type="button" id="" class="btn btn-default btn-sm nativLang" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">With native lang </button>
                                                                </h3>
                                                                <p>An nostrud consulatu signiferumque eum, ocurreret imperdiet qui et. Pro veritus gloriatur ne, summo placerat definiebas sea te.</p>
                                                                <div class="row">
                                                                    <div class="col-md-6 corct-pdate">Sep 1, 2014 05:53</div>
                                                                    <div class="col-md-6 text-right">
                                                                        <ul class="journal_status floated_on_right">
                                                                            <li class="comment_num active-bt">26</li>
                                                                            <li class="corrections_num active">3</li>
                                                                            <li class="studying">English</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>                                      
                                                            </div>
                                                            <div class="clear"></div>
                                                        </div>                                  
                                                    </div>
                                                    <div class="row">
                                                        <div class="corct-list">
                                                            <div class="col-md-1"><img src="images/ch-less03.jpg" alt=""></div>
                                                            <div class="col-md-11">
                                                                <span>intellegat</span>
                                                                <h3>Originally. 
                                                                    <button type="button" id="" class="btn btn-default btn-sm nativLang" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">With native lang </button>
                                                                </h3>
                                                                <p>An nostrud consulatu signiferumque eum, ocurreret imperdiet qui et. Pro veritus gloriatur ne, summo placerat definiebas sea te.</p>
                                                                <div class="row">
                                                                    <div class="col-md-6 corct-pdate">Sep 1, 2014 05:53</div>
                                                                    <div class="col-md-6 text-right">
                                                                        <ul class="journal_status floated_on_right">
                                                                            <li class="comment_num active-bt">26</li>
                                                                            <li class="corrections_num active">3</li>
                                                                            <li class="studying">English</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>                                      
                                                            </div>
                                                            <div class="clear"></div>
                                                        </div>                                  
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="cortion">
                                                    <p class="spaced description">These journals got a lot of comments recently. ('Public' entries only.)</p>
                                                    <div class="row">
                                                        <div class="corct-list">
                                                            <div class="col-md-1"><img src="images/ch-less03.jpg" alt=""></div>
                                                            <div class="col-md-11">
                                                                <span>intellegat</span>
                                                                <h3>Originally. 
                                                                    <button type="button" id="" class="btn btn-default btn-sm nativLang" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">With native lang </button>
                                                                </h3>
                                                                <p>An nostrud consulatu signiferumque eum, ocurreret imperdiet qui et. Pro veritus gloriatur ne, summo placerat definiebas sea te.</p>
                                                                <div class="row">
                                                                    <div class="col-md-6 corct-pdate">Sep 1, 2014 05:53</div>
                                                                    <div class="col-md-6 text-right">
                                                                        <ul class="journal_status floated_on_right">
                                                                            <li class="comment_num active-bt">26</li>
                                                                            <li class="corrections_num active">3</li>
                                                                            <li class="studying">English</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>                                      
                                                            </div>
                                                            <div class="clear"></div>
                                                        </div>                                  
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                              
                            </li>
                            <div class="clear"></div>                            
                        </ul>
                    </div>
                </div>
            </div>                
        </div>
    </div>
</div>
<?php
$this->loadJs(array("custom/correction.js"));
?>
<script type="text/javascript">
    $(document).ready(function() {
        $("ul#opt-tabs li").click(function(e) {
            if (!$(this).hasClass("active-bt")) {
                var tabNum = $(this).index();
                var nthChild = tabNum + 1;
                $("ul#opt-tabs li.active-bt").removeClass("active-bt");
                $(this).addClass("active-bt");
                $("ul#opt-tab li.active-bt").removeClass("active-bt");
                $("ul#opt-tab li:nth-child(" + nthChild + ")").addClass("active-bt");
            }
        });

        $('.nativLang').popover('hide')

    });
</script>