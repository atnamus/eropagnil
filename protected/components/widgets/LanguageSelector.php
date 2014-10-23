<?php
class LanguageSelector extends CWidget
{
    public function run()
    {
        $currentLang = Yii::app()->language;
//        $languages = Yii::app()->params->languages;
        
        $langs=  Languages::model()->findAll();
        $languages=array();
        
        foreach($langs as $lng)
        {
            $languages[$lng->code]=$lng->name;
        }
        
        $this->render('languageSelector', array('currentLang' => $currentLang, 'languages'=>$languages));
    }
}
?>