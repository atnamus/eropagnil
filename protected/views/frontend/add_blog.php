<?php
$assetFolder = Yii::app()->assetManager->publish(dirname(Yii::app()->basePath) . DIRECTORY_SEPARATOR . 'themes' . DIRECTORY_SEPARATOR . 'frontend' . DIRECTORY_SEPARATOR . 'assets');
Yii::app()->clientScript->registerScriptFile($assetFolder . '/js/jquery.hotkeys.js', CClientScript::POS_END);
Yii::app()->clientScript->registerScriptFile($assetFolder . '/js/bootstrap-wysiwyg.js', CClientScript::POS_END);
Yii::app()->clientScript->registerScriptFile($assetFolder . '/js/add_blog.js', CClientScript::POS_END);
Yii::app()->clientScript->registerScriptFile($assetFolder . '/js/add_blog_field.js', CClientScript::POS_END);
Yii::app()->clientScript->registerCssFile($assetFolder . '/css/index.css');
?>
<link href="http://netdna.bootstrapcdn.com/font-awesome/3.0.2/css/font-awesome.css" rel="stylesheet"> 


<div class="blog">
    <div class="container">
        <div class="col-lg-12 pull-right">
            <a href="#" class="add-post-btn pull-right"> Add New Post</a>
        </div>
        <div class="add-post">
            <form name="form1" action="" method="post" id="commentform" class="form-horizontal" enctype="multipart/form-data" onsubmit="loadval();">              
                <div class="form-group">
                    <label for="postTitle" class="">Post Title</label>
                    <input type="text" class="form-control" id="postTitle" placeholder="Post Title" name="title">
                </div>
                <div class="form-group">
                    <label for="exampleInputFile" class="">File input</label>
                    <input type="file" id="exampleInputFile" name="image">      
                    <span style="color:red;">      
                        <?php
                        if (isset($error)) {
                            echo $error;
                        }
                        ?></span>
                </div>
                <div class="form-group">
                    <label for="postTitle" class="">Post Decsription</label>

                    <div id="alerts"></div>
                    <div class="btn-toolbar" data-role="editor-toolbar" data-target="#editor">               
                      
                        <div class="btn-group">
                            <a class="btn" data-edit="bold" title="Bold (Ctrl/Cmd+B)"><i class="icon-bold"></i></a>
                            <a class="btn" data-edit="italic" title="Italic (Ctrl/Cmd+I)"><i class="icon-italic"></i></a>
                            <a class="btn" data-edit="strikethrough" title="Strikethrough"><i class="icon-strikethrough"></i></a>
                            <a class="btn" data-edit="underline" title="Underline (Ctrl/Cmd+U)"><i class="icon-underline"></i></a>
                        </div>
                        <div class="btn-group">
                            <a class="btn" data-edit="insertunorderedlist" title="Bullet list"><i class="icon-list-ul"></i></a>
                            <a class="btn" data-edit="insertorderedlist" title="Number list"><i class="icon-list-ol"></i></a>
                            <a class="btn" data-edit="outdent" title="Reduce indent (Shift+Tab)"><i class="icon-indent-left"></i></a>
                            <a class="btn" data-edit="indent" title="Indent (Tab)"><i class="icon-indent-right"></i></a>
                        </div>
                        <div class="btn-group">
                            <a class="btn" data-edit="justifyleft" title="Align Left (Ctrl/Cmd+L)"><i class="icon-align-left"></i></a>
                            <a class="btn" data-edit="justifycenter" title="Center (Ctrl/Cmd+E)"><i class="icon-align-center"></i></a>
                            <a class="btn" data-edit="justifyright" title="Align Right (Ctrl/Cmd+R)"><i class="icon-align-right"></i></a>
                            <a class="btn" data-edit="justifyfull" title="Justify (Ctrl/Cmd+J)"><i class="icon-align-justify"></i></a>
                        </div>
                        <div class="btn-group">
                            <a class="btn dropdown-toggle" data-toggle="dropdown" title="Hyperlink"><i class="icon-link"></i></a>
                            <div class="dropdown-menu input-append">
                                <input class="span2" placeholder="URL" type="text" data-edit="createLink"/>
                                <button class="btn" type="button">Add</button>
                            </div>
                            <a class="btn" data-edit="unlink" title="Remove Hyperlink"><i class="icon-cut"></i></a>

                        </div>

                        <div class="btn-group">
                            <a class="btn" title="Insert picture (or just drag & drop)" id="pictureBtn"><i class="icon-picture"></i></a>
                            <input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" />
                        </div>
                        <div class="btn-group">
                            <a class="btn" data-edit="undo" title="Undo (Ctrl/Cmd+Z)"><i class="icon-undo"></i></a>
                            <a class="btn" data-edit="redo" title="Redo (Ctrl/Cmd+Y)"><i class="icon-repeat"></i></a>
                        </div>
                        <input type="text" data-edit="inserttext" id="voiceBtn" x-webkit-speech="">
                    </div>
                    <div id="editor"> Go ahead&hellip;</div>                       
                    <textarea id='htextarea' style="width:100%;display:none;" rows="7" name="blog" placeholder="Go ahead..."></textarea>  

                </div>
                <div class="col-lg-12 pull-right">
                    <button name="button" class="add-post-btn pull-right"> Save Post</button>
                </div>
            </form>
        </div>
    </div>
</div>
 