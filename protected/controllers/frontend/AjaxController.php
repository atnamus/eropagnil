<?php

class AjaxController extends FrontController {

    public $all_function;

    function __construct($id, $module = null) {
        parent::__construct($id, $module);
        $this->all_function = new AllFunction();
    }

    function actionAjaxdeletelesson() {
        $request = Yii::app()->request;
        if ($request->isAjaxRequest) {
            $lesson_id = trim(strip_tags($request->getPost("lesson_id")));
            Lesson::model()->updateByPk($lesson_id, array(
                'status' => 3
            ));

            echo json_encode(array("status" => "success"));
        }
    }

    function actionAjaxgetlessondata() {
        $request = Yii::app()->request;

        if ($request->isAjaxRequest) {

            $data_msg = array();

            $lesson_id = $request->getPost("lesson_id");

            $lesson_data = Lesson::model()->findByPk($lesson_id);

            $data_msg['lesson_data'] = array(
                "id" => $lesson_data->id,
                "language_id" => $lesson_data->language_id,
                "title" => $lesson_data->title,
                "user_id" => $lesson_data->user_id,
                "stage_id" => $lesson_data->stage_id,
                "category_id" => $lesson_data->category_id,
                "level" => $lesson_data->level,
                "memo" => $lesson_data->memo,
                "status" => $lesson_data->status
            );

            $lesson_assets = LessonQuestion::model()->findAllByAttributes(array("lesson_id" => $lesson_data->id, "status" => "1"));

            $all_lesson_assets = array();

            foreach ($lesson_assets as $key => $value) {
                $all_lesson_assets[] = array(
                    "id" => $value->id,
                    "lesson_id" => $value->lesson_id,
                    "image_name" => $value->image_name,
                    "audio_name" => $value->audio_name,
                    "question_text" => $value->question_text,
                    "status" => $value->status,
                    "type" => $value->type
                );
            }

            $data_msg['lesson_assets'] = $all_lesson_assets;

            $tags_tr = LessonTag::model()->findAllByAttributes(array("lesson_id" => $lesson_data->id));

            $lessontags = array();

            foreach ($tags_tr as $key => $val) {

                $tag_details = LessonTagMaster::model()->findByPk($val->lesson_tag_master_id);

                if (!empty($tag_details)) {
                    $lessontags[] = (object) array("id" => $tag_details->id, "name" => $tag_details->name);
                }
            }

            $data_msg['lesson_tags'] = $lessontags;

            echo json_encode($data_msg);
        }
    }

    function file_newname($path, $filename) {
        if ($pos = strrpos($filename, '.')) {
            $name = substr($filename, 0, $pos);
            $ext = substr($filename, $pos);
        } else {
            $name = $filename;
        }

        $newpath = $path . '/' . $filename;
        $newname = $filename;
        $counter = 0;
        while (file_exists($newpath)) {
            $newname = $name . '_' . $counter . $ext;
            $newpath = $path . '/' . $newname;
            $counter++;
        }

        return $newname;
    }

    function actionAjaxpostlesson() {
        $request = Yii::app()->request;
        if ($request->isAjaxRequest) {
            $lesson_id = trim(strip_tags($request->getPost("lesson_id")));
            Lesson::model()->updateByPk($lesson_id, array(
                'status' => 1
            ));

            echo json_encode(array("status" => "success"));
        }
    }

    function actionAjaxdraftlesson() {
        $request = Yii::app()->request;
        if ($request->isAjaxRequest) {
            $lesson_id = trim(strip_tags($request->getPost("lesson_id")));
            Lesson::model()->updateByPk($lesson_id, array(
                'status' => 0
            ));

            echo json_encode(array("status" => "success"));
        }
    }

    public function actionAjaxfetchcategory() {

        if (Yii::app()->request->isAjaxRequest) {

            $stage_id = Yii::app()->request->getParam("stage_id");
            $selected = Yii::app()->request->getParam("selected");

            $cr = new CDbCriteria();

            $cr->addCondition("stages_stages.lesson_stage_id=$stage_id");

            $lesson_cat = LessonCategory::model()->with("stages")->findAll($cr);
            $html = "";
            foreach ($lesson_cat as $key => $val) {
                if ($selected == $val->id) {
                    $html.="<option selected='selected' value='" . $val->id . "'>" . $val->name . "</option>";
                } else {
                    $html.="<option value='" . $val->id . "'>" . $val->name . "</option>";
                }
            }

            echo json_encode(array("data" => $html));
        }
    }

    function actionAjaxuploadskitvideo() {
        if (Yii::app()->request->isAjaxRequest) {

            $ds = DIRECTORY_SEPARATOR;  //1

            $storeFolder = '../uploads';   //2

            if (!empty($_FILES)) {

                $tempFile = $_FILES['file']['tmp_name']; //3

                $targetPath = Yii::app()->basePath . $ds . $storeFolder . $ds; //4

                $targetFile = $targetPath . $_FILES['file']['name']; //5
//                move_uploaded_file($tempFile, $targetFile);//6
            }
        }
    }

    function actionAjaxcreateupdatelesson() {
        if (Yii::app()->request->isAjaxRequest) {
            $status = "";
            $message = "";

            $language_id = trim(strip_tags(Yii::app()->request->getParam("language_id")));
            $title = trim(strip_tags(Yii::app()->request->getParam("title")));
            $stage = trim(strip_tags(Yii::app()->request->getParam("stage")));
            $category = trim(strip_tags(Yii::app()->request->getParam("category")));
            $level = trim(strip_tags(Yii::app()->request->getParam("level_select")));
            $tags = trim(strip_tags(Yii::app()->request->getParam("tags")));
            $memo = trim(strip_tags(Yii::app()->request->getParam("memo")));
            $temp_lesson_id = trim(strip_tags(Yii::app()->request->getParam("temp_lesson_id")));

            $level = $level == "" ? 0 : $level;

            if (empty($temp_lesson_id)) {
                $lesson = new Lesson();
                $lesson->create_at = date("Y-m-d H:i:s");
            } else {
                $lesson = Lesson::model()->findByPk($temp_lesson_id);
            }

            $lesson->user_id = Yii::app()->user->getState("user");
            $lesson->title = $title;
            $lesson->language_id = $language_id;
            $lesson->stage_id = $stage;
            $lesson->memo = $memo;
            $lesson->update_at = date("Y-m-d H:i:s");
            $lesson->category_id = $category;
            $lesson->level = $level;
            $lesson->status = "0";

            if (!$lesson->save()) {
                $message = $lesson->getErrors();
                $status = "error";
            } else {
                $status = "success";
                $temp_lesson_id = $lesson->id;
                $ntags = explode(",", $tags);

                if (count($ntags) == 0) {
                    self::addTags($temp_lesson_id, $tags);
                } else {
                    foreach ($ntags as $key => $val) {
                        self::addTags($temp_lesson_id, $val);
                    }
                }
            }

            echo json_encode(array("status" => $status, "message" => $message, "lesson_id" => $temp_lesson_id));
        }
    }

    function actionAjaxuploadfiles() {
//        ajax-upload-files
        $request = Yii::app()->request;

        if ($request->isAjaxRequest) {

            $file_type = trim(strip_tags($request->getPost("file_type")));

            // var_dump($_FILES);exit;

            $upload_path = "";

            $extension = "";

            if ($file_type == "V") {
                $upload_path = dirname(Yii::app()->basePath) . "/" . Yii::app()->params['lesson_video_path'];
                $extension = ".flv";
            } else if ($file_type == "A") {
                $upload_path = dirname(Yii::app()->basePath) . "/" . Yii::app()->params['lesson_audio_path'];
                $extension = ".mp3";
            } else if ($file_type == "I") {
                $upload_path = dirname(Yii::app()->basePath) . "/" . Yii::app()->params['lesson_image_path'];
                $name = $_FILES["upload_file"]["name"];
                $ext = end((explode(".", $name)));
                $extension = $ext;
                $image = isset($_FILES['upload_file']) ? $_FILES['upload_file'] : '';
                $image_name = "";
                if ($image != "") {
                    $img = Yii::app()->imagemod->load($_FILES['upload_file']);
                    if ($img->uploaded) {
                        $img->image_resize = true;
                        //$img->image_ratio_y = true;
                        $img->image_x = 300;
                        $img->image_y = 300;

                        $image_name = $this->file_newname($upload_path, $_FILES['upload_file']['name']);

                        $fileName = basename($image_name);
                        $fileNameNoExtension = preg_replace("/\.[^.]+$/", "", $fileName);

                        $image_body_name = $fileNameNoExtension;

                        $img->file_new_name_body = $image_body_name;

                        // $image_name.='.' . $img->file_src_name_ext;
                        // $image_name=$file_name = $this->file_newname($upload_path,$_FILES['upload_file']['name']);

                        $img->process(Yii::app()->params['lesson_image_path']);

                        if ($img->processed) {
                            $img->clean(); //delete original image
                        }
                    }
                    $file_name = $image_name;
                }
            }


            if ($file_type != "I") {
                // $file_name = $this->all_function->randstring(6) . $extension;
                $file_name = $this->file_newname($upload_path, $_FILES['upload_file']['name']);
                move_uploaded_file($_FILES['upload_file']['tmp_name'], $upload_path . "/" . $file_name);
            }

            echo json_encode(array("status" => "success", "file_name" => $file_name));
        }
    }

    function addTags($lessonid, $tagname) {

        $tagid = 0;

        $lesson_tag = LessonTagMaster::model()->findByAttributes(array("name" => $tagname));

        if (empty($lesson_tag)) {
            $lesson_tag = new LessonTagMaster();
            $lesson_tag->name = $tagname;
            if ($lesson_tag->save()) {
                $tagid = $lesson_tag->id;
            }
        } else {
            $tagid = $lesson_tag->id;
        }

        $prev_tagging = LessonTag::model()->findByAttributes(array("lesson_id" => $lessonid, "lesson_tag_master_id" => $tagid));

        if (empty($prev_tagging)) {
            $tag = new LessonTag();
            $tag->lesson_id = $lessonid;
            $tag->lesson_tag_master_id = $tagid;
            $tag->save();
        }
    }

    function actionAjaxcreateupdateskit() {
        $request = Yii::app()->request;
        if ($request->isAjaxRequest) {

            $status = "";
            $msg = "";

            $skit_type = trim(strip_tags($request->getPost("skit_type")));

            $image_name = "";
            $audio_name = "";
            $video_name = "";

            if ($skit_type == "V") {
                $video = isset($_FILES['video_choose']) ? $_FILES['video_choose'] : '';
                $audio = $this->all_function->randstring(6) . ".flv";
                // move_uploaded_file($_FILES['video_choose']['tmp_name'], dirname(Yii::app()->basePath) . Yii::app()->params['lesson_video_path'] . $audio);
                $video_name = $request->getPost("video_file_name");
            }

            if ($skit_type == "A") {
                $audio = isset($_FILES['audio_choose']) ? $_FILES['audio_choose'] : '';
                $audio = $this->all_function->randstring(6) . ".mp3";
                // move_uploaded_file($_FILES['audio_choose']['tmp_name'], dirname(Yii::app()->basePath) . Yii::app()->params['lesson_audio_path'] . $audio);
                $audio_name = $request->getPost("audio_file_name");
            }

            $image_name = "";
            if ($skit_type == "I") {
                $image_name = $request->getPost("image_file_name");
            }

            // $image = isset($_FILES['image_choose']) ? $_FILES['image_choose'] : '';
            // if ($image != "") {
            //     $img = Yii::app()->imagemod->load($_FILES['image_choose']);
            //     if ($img->uploaded) {
            //         $img->image_resize = true;
            //         //$img->image_ratio_y = true;
            //         $img->image_x = 600;
            //         $img->image_y = 600;
            //         $image_name = $this->all_function->randstring(6);
            //         $img->file_new_name_body = $image_name = trim($image_name, '.' . $img->file_src_name_ext);
            //         $image_name.='.' . $img->file_src_name_ext;
            //         $img->process(Yii::app()->params['lesson_image_path']);
            //         if ($img->processed) {
            //             $img->clean(); //delete original image
            //         }
            //     // }
            // }

            $lesson_id = trim(strip_tags($request->getPost("lesson_id")));
            $skit_temp_id = trim(strip_tags($request->getPost("temp_skit_id")));

            if ($skit_temp_id == "") {
                $skit_model = new LessonQuestion();
                $skit_model->lesson_id = $lesson_id;
                $skit_model->type = "S";
            } else {
                $skit_model = LessonQuestion::model()->findByPk($skit_temp_id);
            }

            $skit_model->image_name = $image_name;
            $skit_model->audio_name = $audio_name;
            $skit_model->video_name = $video_name;
            $skit_model->create_at = date("Y-m-d H:i:s");
            $skit_model->update_at = date("Y-m-d H:i:s");
            $skit_model->status = "1";

            if ($skit_model->validate()) {
                $skit_model->save();
                $skit_temp_id = $skit_model->id;
            } else {
                var_dump($skit_model->getErrors());
                exit;
            }

            echo json_encode(array("status" => "success", "skitid" => $skit_temp_id));
        }
    }

    function actionAjaxcreateupdatequiz() {
        $request = Yii::app()->request;
        if ($request->isAjaxRequest) {

            $status = "";
            $msg = "";

            // $question_audio = isset($_FILES['question_audio']) ? $_FILES['question_audio'] : '';
            $question_audio_name = $request->getPost("audio_file_name_1");

            $right_answers = $request->getPost("right_answer");

            $question_image_name = $request->getPost("image_file_name_1");

            $lesson_id = trim(strip_tags($request->getPost("lesson_id")));
            $question_text = trim(strip_tags($request->getPost("question_text")));
            $question_temp_id = trim(strip_tags($request->getPost("temp_question_id")));

            if ($question_temp_id == "") {
                $question_model = new LessonQuestion();
                $question_model->lesson_id = $lesson_id;
                $question_model->type = "Q";
            } else {
                $question_model = LessonQuestion::model()->findByPk($question_temp_id);
            }

            $question_model->image_name = $question_image_name;
            $question_model->audio_name = $question_audio_name;
            $question_model->question_text = $question_text;
            $question_model->create_at = date("Y-m-d H:i:s");
            $question_model->update_at = date("Y-m-d H:i:s");
            $question_model->status = "1";

            if ($question_model->validate()) {
                $question_model->save();
                $question_temp_id = $question_model->id;
            }

            $answer_texts = $request->getPost("answer_text");

            // $quiz_answer_db=LessonQuestionAnswer::model()->findByAttributes(array("question_id"=>$question_temp_id));

            LessonQuestionAnswer::model()->deleteAllByAttributes(array(
                'question_id' => $question_temp_id,
            ));

            // if(!empty($quiz_answer_db)){
            //     $quiz_answer_db->delete();
            // }

            foreach ($answer_texts as $key => $val) {
                $is_answer = "0";

                if ($request->getPost("right_answer_" . $key)) {
                    $is_answer = "1";
                }

                $image = $request->getPost("image_file_name_" . ($key + 2));

                $audio = $request->getPost("audio_file_name_" . ($key + 2));

                $answer_text = $val;

                if ($audio != "" || $image != "" || $answer_text != "") {

                    $answer_model = new LessonQuestionAnswer();

                    $answer_model->answer_text = $answer_text;
                    $answer_model->audio_name = $audio;
                    $answer_model->image_name = $image;
                    $answer_model->is_answer = $is_answer;
                    $answer_model->question_id = $question_temp_id;
                    $answer_model->create_at = date("Y-m-d H:i:s");
                    $answer_model->update_at = date("Y-m-d H:i:s");
                    $answer_model->status = "1";

                    if ($answer_model->validate()) {
                        $answer_model->save();
                    } else {
                        echo "<pre>";
                        print_r($answer_model->getErrors());
                        echo "</pre>";
                        exit;
                    }
                }
            }

            echo json_encode(array("status" => "success", "quizid" => $question_temp_id));
        }
    }

    private function mediaHandler($file, $width, $height) {

        $sitePath = str_replace('/', '\\', $_SERVER['DOCUMENT_ROOT']);
        $basePath = $sitePath . "mySite\\";
        $ffmpegPath = $basePath . "";
        $videoPath = $basePath . "media\\videos\\";
        $thumbsPath = $videoPath . "thumbs\\";
        $frameRate = 29;
        $bitRate = 22050;
        $size = $width . 'x' . $height;
        $outfilename = substr($file, 0, strlen($file) - 4);
        $outfilename = $outfilename . '.flv';
        $thumbname = $outfilename . '.jpg';

        //convert the video to flv
        $ffmpegcmd1 = $ffmpegPath . "ffmpeg.exe -y -i \"" . $videoPath . $file . "\" -s " . $size . " -ar " . $bitRate . " -r " . $frameRate . " \"" . $videoPath . $outfilename . "\"";
        $ret = shell_exec($ffmpegcmd1);

        // get the image of file
        $ffmpegcmd2 = $ffmpegPath . "ffmpeg.exe -y -ss 00:00:05 -vframes 1 -i \"" . $videoPath . $file . "\" -s " . $size . " -f image2  \"" . $thumbsPath . $thumbname . "\"";
        $ret = shell_exec($ffmpegcmd2);
    }

    function actionAjaxfetchtags() {
        if (Yii::app()->request->isAjaxRequest) {

            $query = Yii::app()->request->getParam("q");

            $criteria = new CDbCriteria();

            $criteria->addSearchCondition('name', $query);

            $tags = LessonTagMaster::model()->findAll($criteria);

            $arr = array();

            $arr[] = (object) array("id" => "TMP" . (int) rand(1, 100), "name" => $query);

            foreach ($tags as $key => $val) {
                if ($query != $val->name) {
                    $arr[] = (object) array("id" => $val->id, "name" => $val->name);
                }
            }

            $json_response = json_encode($arr);

            if (isset($_GET["callback"])) {
                $json_response = $_GET["callback"] . "(" . $json_response . ")";
            }

            echo $json_response;
        }
    }

    function actionAjaxgetskitdata() {
        $request = Yii::app()->request;
        if ($request->isAjaxRequest) {
            $data_msg = array();

            $skit_id = $request->getPost("skit_id");

            $skit_model = LessonQuestion::model()->findByPk($skit_id);

            if (!empty($skit_model)) {

                $skit_type = "";

                if ($skit_model->video_name != "") {
                    $skit_type = "V";
                } else if ($skit_model->audio_name != "") {
                    $skit_type = "A";
                } else if ($skit_model->image_name != "") {
                    $skit_type = "I";
                }

                $skit_data = array(
                    "id" => $skit_model->id,
                    "lesson_id" => $skit_model->lesson_id,
                    "video_name" => $skit_model->video_name,
                    "audio_name" => $skit_model->audio_name,
                    "image_name" => $skit_model->image_name,
                    "status" => $skit_model->status,
                    "skit_type" => $skit_type
                );

                $data_msg['skit_data'] = $skit_data;
            } else {
                $data_msg['status'] = "error";
                $data_msg['message'] = "Invalid request";
            }

            echo json_encode($data_msg);
        }
    }

    function actionAjaxgetquizdata() {
        $request = Yii::app()->request;
        if ($request->isAjaxRequest) {
            $data_msg = array();
            $quiz_id = $request->getPost("quiz_id");

            $quiz_data = LessonQuestion::model()->with("lessonQuestionAnswers")->findByPk($quiz_id);

            if (!empty($quiz_data)) {
                $data_msg['status'] = "success";
                $data_msg['message'] = "Data found";
                $question_details = array(
                    "id" => $quiz_data->id,
                    "image" => $quiz_data->image_name,
                    "audio" => $quiz_data->audio_name,
                    "question_text" => $quiz_data->question_text,
                    "lesson_id" => $quiz_data->lesson_id,
                    "status" => $quiz_data->status,
                );

                $data_msg['question_details'] = $question_details;

                $answers = array();

                foreach ($quiz_data->lessonQuestionAnswers as $key => $val) {
                    $answers[] = array(
                        "id" => $val->id,
                        "question_id" => $val->question_id,
                        "image" => $val->image_name,
                        "audio" => $val->audio_name,
                        "answer" => $val->answer_text,
                        "is_answer" => $val->is_answer,
                        "status" => $val->status,
                    );
                }

                $data_msg['answers'] = $answers;
            } else {
                $data_msg['status'] = "error";
                $data_msg['message'] = "Invalid request";
            }

            echo json_encode($data_msg);
        }
    }

    function actionAjaxcreatecorrection() {
        $request = Yii::app()->request;
        if ($request->isAjaxRequest) {
            $data_msg = array();

            $status = "";
            $message = "";

            $correction_model = new Correction("correction_post");

            $display_id = $this->all_function->randstring(6);

            $correction_model->user_id = $this->user_id;
            $correction_model->display_id = $display_id;
            $correction_model->language_id = strip_tags($request->getPost("language_id"));
            $correction_model->title = strip_tags($request->getPost("title"));
            $correction_model->intro_text = strip_tags($request->getPost("intro_text"));
            $correction_model->native_text = strip_tags($request->getPost("native_text"));
            $correction_model->visible_to = strip_tags($request->getPost("visible_to"));
            $correction_model->status = "1";
            $correction_model->create_at = date("Y-m-d H:i:s");
            $correction_model->update_at = date("Y-m-d H:i:s");

            if ($correction_model->validate()) {
                $status = "success";
                $correction_model->save();
                $data_msg['correction_id'] = $display_id;

                $correction_id = $correction_model->id;

                $tags = strip_tags($request->getPost("tags"));

                $ntags = explode(" ", $tags);

                if (count($ntags) == 0) {
                    self::addCorrectionTags($correction_id, $tags);
                } else {
                    foreach ($ntags as $key => $val) {
                        self::addCorrectionTags($correction_id, $val);
                    }
                }

                $message = "Correction Posted Successfully";
            } else {
                $status = "error";
                $errors = $correction_model->getErrors();

                $i = 0;
                foreach ($errors as $key => $val) {
                    if ($i == 0) {
                        $message = $val[0];
                    }
                    $i++;
                }
            }

            $data_msg['status'] = $status;
            $data_msg['message'] = $message;

            echo json_encode($data_msg);
        }
    }

    function actionAjaxupdatecorrection() {
        $request = Yii::app()->request;
        if ($request->isAjaxRequest) {
            $data_msg = array();

            $status = "";
            $message = "";

            $display_id = strip_tags($request->getPost("display_id"));

            $correction_model = Correction::model()->findByAttributes(array("display_id" => $display_id));

            $correction_model->language_id = strip_tags($request->getPost("language_id"));
            $correction_model->title = strip_tags($request->getPost("title"));
            $correction_model->intro_text = strip_tags($request->getPost("intro_text"));
            $correction_model->native_text = strip_tags($request->getPost("native_text"));
            $correction_model->visible_to = strip_tags($request->getPost("visible_to"));
            $correction_model->update_at = date("Y-m-d H:i:s");

            if ($correction_model->validate()) {
                $status = "success";
                $correction_model->save();
                $data_msg['correction_id'] = $display_id;

                $correction_id = $correction_model->id;

                $tags = strip_tags($request->getPost("tags"));

                CorrectionTags::model()->deleteAllByAttributes(array("correction_id" => $correction_id));

                $ntags = explode(" ", $tags);

                if (count($ntags) == 0) {
                    self::addCorrectionTags($correction_id, $tags);
                } else {
                    foreach ($ntags as $key => $val) {
                        self::addCorrectionTags($correction_id, $val);
                    }
                }

                Yii::app()->user->setFlash("success_msg", "Correction Updated Successfully");

                $message = "Correction Updated Successfully";
            } else {
                $status = "error";
                $errors = $correction_model->getErrors();

                $i = 0;
                foreach ($errors as $key => $val) {
                    if ($i == 0) {
                        $message = $val[0];
                    }
                    $i++;
                }
            }

            $data_msg['status'] = $status;
            $data_msg['message'] = $message;

            echo json_encode($data_msg);
        }
    }

    function addCorrectionTags($correctionid, $tagname) {

        $tagid = 0;

        $correction_tag = CorrectionTagMaster::model()->findByAttributes(array("name" => $tagname));

        if (empty($correction_tag)) {
            $correction_tag = new CorrectionTagMaster();
            $correction_tag->name = $tagname;
            if ($correction_tag->save()) {
                $tagid = $correction_tag->id;
            }
        } else {
            $tagid = $correction_tag->id;
        }

        $prev_tagging = CorrectionTags::model()->findByAttributes(array("correction_id" => $correctionid, "tag_id" => $tagid));

        if (empty($prev_tagging)) {
            $tag = new CorrectionTags();
            $tag->correction_id = $correctionid;
            $tag->tag_id = $tagid;
            $tag->save();
        }
    }

    function actionAjaxlikecorrection() {
        $request = Yii::app()->request;
        if ($request->isAjaxRequest) {
            $data_msg = array();

            $correction_id = $request->getPost("correctionid");

            $i_liked = 0;

            $criteria = new CDbCriteria();

            $criteria->select = "count(*) as `TotalLikes`";

            $criteria->addCondition("t.user_id='" . $this->user_id . "'");

            $criteria->addCondition("t.correction_id='" . $correction_id . "'");

            $my_likes = CorrectionLike::model()->find($criteria);

            if ($my_likes->TotalLikes == 1) {
                $i_liked = 1;
            }

            if ($i_liked == 0) {
                $cor_like = new CorrectionLike();
                $cor_like->user_id = $this->user_id;
                $cor_like->correction_id = $correction_id;
                $cor_like->create_at = date("Y-m-d H:i:s");
                $cor_like->save();
                $i_liked = 1;
            }

            $criteria = new CDbCriteria();

            $criteria->select = "count(*) as `TotalLikes`";

            $criteria->addCondition("t.user_id!='" . $this->user_id . "'");

            $criteria->addCondition("t.correction_id='" . $correction_id . "'");

            $likes = CorrectionLike::model()->find($criteria);

            $other_likes = $likes->TotalLikes;

            $html = "";

            if ($i_liked == "1" && $other_likes == "0") {
                $html = "You liked this entry";
            } else if ($i_liked == "0" && $other_likes > "0") {
                $html = $other_likes . " people likes this entry";
            } else if ($i_liked == "1" && $other_likes > "0") {
                $html = "You and " . $other_likes . " people likes this entry";
            }

            $data_msg['status'] = "success";

            $data_msg['html'] = $html;

            echo json_encode($data_msg);
        }
    }

    public function actionAjaxloadcorrections() {
        if (Yii::app()->request->isAjaxRequest) {

            $data_msg = array();

            $user_id = $this->user_id;

            $criteria = new CDbCriteria();

            $criteria->addCondition("t.user_id='$user_id'");
            $criteria->addCondition("t.status!='3'");
            $criteria->order = 't.create_at DESC';

            $corrections = Correction::model()->with("user", "language")->findAll($criteria);

            $my_corrections = "";

            $visitor_str = '';

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
                $my_corrections.='<div class="achiv-list">
                        <div class="row">
                            <div class="col-sm-2">
                                <div class="author-les">
                                    <div class="author-img">
                                        <a href="javascript:void(0)"><img src="' . $this->profile_image_path . '/' . (($val['user']->profile_image != "") ? $val['user']->profile_image : $this->default_profile_pic) . '" alt=""></a>
                                    </div>
                                    <h3>' . $val['user']->full_name . '</h3>
                                </div>                                    
                            </div>
                            <div class="col-sm-10">
                                <span class="ent-auth">' . $val['user']->full_name . '</span>
                                <h3><a href="' . $this->createUrl("correction-details/" . $val->display_id) . '" class="">' . $title . '</a></h3>
                                <p>' . $val->intro_text . '</p>
                                <div class="row">
                                    <div class="col-md-6 corct-pdate">' . date("M d, Y H:i", strtotime($val->create_at)) . '</div>
                                    <div class="col-md-6 text-right">
                                        <ul class="journal_status pull-right">
                                            <li class="corrections_num active-bt">' . $val->total_corrections . '</li>
                                            <li class="studying">' . $val['language']->name . '</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>';

                $v_criteria = new CDbCriteria();

                $v_criteria->addCondition("t.correction_id='" . ($val->id) . "'");

                $v_criteria->addCondition("correction.status!='3'");

                $visitors = CorrectionVisit::model()->with("user", "correction")->findAll($v_criteria);

                foreach ($visitors as $keys => $vals) {
                    $c_title = $vals['correction']->title;

                    if ($c_title == "") {
                        $expl = explode("\n", $vals['correction']->intro_text);
                        if (count($expl) > 0) {
                            $title = $expl[0];
                        } else {
                            $title = $vals['correction']->intro_text;
                        }
                    }

                    $visitor_str.='<div class="achiv-list">
                                            <div class="row">
                                                <div class="col-sm-2">
                                                    <div class="author-les">
                                                        <div class="author-img">
                                                            <a href=""><img src="' . $this->profile_image_path . '/' . (($vals['user']->profile_image != "") ? $vals['user']->profile_image : $this->default_profile_pic) . '" alt=""></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-10">
                                                    <span class="ent-auth">' . $vals['user']->full_name . '</span>
                                                    <h3><a href="' . $this->createUrl("correction-details/" . $val->display_id) . '" class="">' . $c_title . '</a></h3>
                                                    <div class="row">
                                                        <div class="col-md-6 corct-pdate">Visited on ' . date("M d, Y H:i", strtotime($vals->create_at)) . '</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>';
                }
            }

            $data_msg['entries_written'] = $my_corrections;

            $data_msg['correction_visitors'] = $visitor_str;


            echo json_encode($data_msg);
        }
    }

    public function actionAjaxpostcorrectioncomment() {
        $request = Yii::app()->request;
        if ($request->isAjaxRequest) {
            $data_msg = array();

            $comment = new CorrectionComments();

            $correction_id = strip_tags($request->getPost("correction_id"));

            $comment->user_id = $this->user_id;
            $comment->comment_text = strip_tags($request->getPost("comment_box"));
            $comment->correction_id = $correction_id;
            $comment->create_at = date("Y-m-d H:i:s");
            $comment->status = "1";
            if ($comment->validate()) {
                
                $comment->save();

                $comment_id = $comment->id;

                echo "<pre>";
                echo print_r($comment);
                echo "</pre>";
                exit;

                $main_lines = $request->getPost("main_line");
                $corrected_line = $request->getPost("corrected_line");
                $line_perfect = $request->getPost("line_perfect");
                $correction_comment = $request->getPost("correction_comment");

                foreach ($main_lines as $key => $val) {
                    $user_correction = new UserCorrection();
                    $user_correction->id = NULL;
                    $user_correction->setIsNewRecord(true);
                    $user_correction->comment_id = $comment_id;
                    $user_correction->main_line = $val;
                    $user_correction->corrected_line = $corrected_line[$key];
                    $user_correction->correction_id = $corrected_line;
                    $user_correction->correction_type = $line_perfect[$key];
                    $user_correction->user_id = $this->user_id;
                    $user_correction->comment = $correction_comment[$key];
                    $user_correction->create_at = date("Y-m-d H:i:s");
                    $user_correction->status = "1";
                    $user_correction->save();
                }
            }

            echo json_encode($data_msg);
        }
    }

    /**
     * Performs the AJAX validation.
     * @param UserMaster $model the model to be validated
     */
    protected function performAjaxValidation($model) {
        if (isset($_POST['ajax']) && $_POST['ajax'] === 'user-master-form') {
            echo CActiveForm::validate($model);
            Yii::app()->end();
        }
    }

}
