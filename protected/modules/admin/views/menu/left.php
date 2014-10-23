<div class="page-sidebar-wrapper">
    <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
    <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
    <div class="page-sidebar navbar-collapse collapse">
        <!-- BEGIN SIDEBAR MENU -->
        <ul class="page-sidebar-menu" data-auto-scroll="true" data-slide-speed="200">
            <!-- DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element -->
            <li class="sidebar-toggler-wrapper">
                <!-- BEGIN SIDEBAR TOGGLER BUTTON -->
                <div class="sidebar-toggler">
                </div>
                <!-- END SIDEBAR TOGGLER BUTTON -->
            </li>
            <li class="divider"><br/></li>
            <li class="start active open">
                <a href="javascript:;">
                    <i class="icon-home"></i>
                    <span class="title">Dashboard</span>  
                    <span class="selected"></span>
                </a>
            </li>
            <li>
                <a href="<?php echo $this->createUrl('user/') ?>">
                    <i class="icon-users"></i>
                    <span class="title">Users</span>
<!--                    <span class="arrow "></span>-->
                </a>
                <!--                <ul class="sub-menu">
                                    <li>
                                        <a href="login.html">
                                            Login Form 1</a>
                                    </li>
                                    <li>
                                        <a href="login_soft.html">
                                            Login Form 2</a>
                                    </li>
                                </ul>-->
            </li>
            <li>
                <a href="<?php echo $this->createUrl('seo/') ?>">
                    <i class="fa fa-building-o"></i>
                    <span class="title">SEO</span>
                </a>
            </li>            
            <li>
                <a href="<?php echo $this->createUrl('lessonCategory/') ?>">
                    <i class="fa fa-code-fork"></i>
                    <span class="title">Lesson Category</span>
                </a>
            </li>
            <li>
                <a href="<?php echo $this->createUrl('lesson/') ?>">
                    <i class="fa fa-code-fork"></i>
                    <span class="title">Lesson</span>
                </a>
            </li>
            <li>
                <a href="<?php echo $this->createUrl('news/') ?>">
                    <i class="icon-bulb"></i>
                    <span class="title">Manage News</span>
                </a>
            </li>
            <li>
                <a href="<?php echo $this->createUrl('contactUs/') ?>">
                    <i class="icon-call-in"></i>
                    <span class="title">Contact Us</span>
                </a>
            </li>            

            <li>
                <a href="<?php echo $this->createUrl('cms/') ?>">
                    <i class="fa fa-file-word-o"></i>
                    <span class="title">Manage CMS</span>
                </a>
            </li>            
            <li>
                <a href="<?php echo $this->createUrl('newsletterSubscriber/') ?>">
                    <i class="fa fa-file-word-o"></i>
                    <span class="title">Newsletter Subscriber</span>
                </a>
            </li>            
            <li>
                <a href="<?php echo $this->createUrl('blogCategory/') ?>">
                    <i class="fa fa-file-word-o"></i>
                    <span class="title">Blog Category</span>
                </a>
            </li> 
            <li>
                <a href="javascript:;">
                    <i class="icon-users"></i>
                    <span class="title">Forum</span>
                    <span class="arrow "></span>
                </a>
                <ul class="sub-menu">
                    <li>
                        <a href="<?php echo $this->createUrl('forumCategory/') ?>">Category</a>
                    </li>
                    <li>
                        <a href="<?php echo $this->createUrl('forumName/') ?>">Forum Name</a>
                    </li>
                </ul>
            </li>
        </ul>
        <!-- END SIDEBAR MENU -->
    </div>
</div>