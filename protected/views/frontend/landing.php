<?php
$this->pageTitle = Yii::app()->name;
?>
<style>
    /* Elegant Aero */
    .elegant-aero {
        margin-left:auto;
        margin-right:auto;

        max-width: 500px;
        background: #D2E9FF;
        padding: 20px 20px 20px 20px;
        font: 12px Arial, Helvetica, sans-serif;
        color: #666;
    }

    .elegant-aero h2 {
        font: 18px "Trebuchet MS", Arial, Helvetica, sans-serif;
        padding: 10px 10px 10px 20px;
        display: block;
        background: #C0E1FF;
        border-bottom: 1px solid #B8DDFF;
        margin: -20px -20px 15px;
    }
    .elegant-aero h2>span {
        display: block;
        font-size: 11px;
    }

    .elegant-aero label>span {
        float: left;
        margin-top: 10px;
        color: #5E5E5E;
    }
    .elegant-aero label {
        display: block;
        margin: 0px 0px 5px;
    }
    .elegant-aero label>span {
        float: left;
        width: 20%;
        text-align: right;
        padding-right: 15px;
        margin-top: 10px;
        font-weight: bold;
    }
    .elegant-aero input[type="text"], .elegant-aero input[type="email"], .elegant-aero textarea, .elegant-aero select {
        color: #888;
        width: 70%;
        padding: 0px 0px 0px 5px;
        border: 1px solid #C5E2FF;
        background: #FBFBFB;
        outline: 0;
        -webkit-box-shadow:inset 0px 1px 6px #ECF3F5;
        box-shadow: inset 0px 1px 6px #ECF3F5;
        font: 200 12px/25px Arial, Helvetica, sans-serif;
        height: 30px;
        line-height:15px;
        margin: 2px 6px 16px 0px;
    }
    .elegant-aero textarea{
        height:100px;
        padding: 5px 0px 0px 5px;
        width: 70%;
    }
    .elegant-aero select {
        background: #fbfbfb url('down-arrow.png') no-repeat right;
        background: #fbfbfb url('down-arrow.png') no-repeat right;
        appearance:none;
        -webkit-appearance:none; 
        -moz-appearance: none;
        text-indent: 0.01px;
        text-overflow: '';
        width: 70%;
    }
    .elegant-aero .button{
        padding: 10px 30px 10px 30px;
        background: #66C1E4;
        border: none;
        color: #FFF;
        cursor: pointer;
        box-shadow: 1px 1px 1px #4C6E91;
        -webkit-box-shadow: 1px 1px 1px #4C6E91;
        -moz-box-shadow: 1px 1px 1px #4C6E91;
        text-shadow: 1px 1px 1px #5079A3;

    }
    .elegant-aero .button:hover{
        background: #3EB1DD;
    }

    .elegant-aero .errorMessage{
        color:#F00;
        float:right;
    }

    .errorSummary ul li{
        color:#F00;
        list-style-type: none;
        border-left:solid 2px #000;
        padding:4px;
        margin:2px;
    }
</style>
<h1 style="font-family:Times New Roman">
    Landing Page
</h1>
<div>
    <?php
    $form = $this->beginWidget('CActiveForm', array(
        'id' => 'contactform',
        'htmlOptions' => array('class' => 'elegant-aero'),
        'enableAjaxValidation' => true,
        'clientOptions' => array('validateOnSubmit' => true, 'validateOnType' => true)
            ));
    ?>
    <h2>Find out if your business could benefit from Contracard ?.</h2>
    <p class="note">Fields with <span class="required">*</span> are required.</p>
    <?php echo $form->errorSummary($model); ?>
    <p>
        <label>
            <span><?php echo $model->getAttributeLabel('name'); ?></span>
            <?php echo $form->textField($model, 'name'); ?>
            <?php echo $form->error($model, 'name'); ?>
        </label>

        <label>
            <span><?php echo $model->getAttributeLabel('business'); ?></span>
            <?php echo $form->textField($model, 'business'); ?>
            <?php echo $form->error($model, 'business'); ?>
        </label>

        <label>
            <span><?php echo $model->getAttributeLabel('email'); ?></span>
            <?php echo $form->textField($model, 'email'); ?>
            <?php echo $form->error($model, 'email'); ?>
        </label>

        <label>
            <span><?php echo $model->getAttributeLabel('mobile'); ?></span>
            <?php echo $form->textField($model, 'mobile'); ?>
            <?php echo $form->error($model, 'mobile'); ?>
        </label>

        <label>
            <span><?php echo $model->getAttributeLabel('message'); ?></span>
            <?php echo $form->textArea($model, 'message'); ?>
            <?php echo $form->error($model, 'message'); ?>
        </label>

        <label>
            <span>&nbsp;</span>
            <?php echo CHtml::submitButton('Submit', array("class" => "button", "value" => "Submit")); ?>
        </label>

    </p>

    <?php $this->endWidget(); ?>
</div>