<footer class="footer" role="contentinfo">
    <div class="container">
        <ul class="footer-nav">
            <li><a href="<?php echo $this->createUrl("home/Aboutus"); ?>">About Us</a></li>
            <li><a href="<?php echo Yii::app()->createUrl("blog/"); ?>">Blog</a></li>
            <li><a href="<?php echo Yii::app()->createUrl("forum/"); ?>">Forum</a></li>
            <li><a href="<?php echo $this->createUrl("home/Terms"); ?>">Terms</a></li>
            <li><a href="<?php echo $this->createUrl("home/Privacy"); ?>">Privacy</a></li>
            <li><a href="#">Display Language</a></li>
            <?php if (Yii::app()->user->isGuest) { ?>
                <li><a href="<?php echo $this->createUrl('', ['user_type' => 'learner']); ?>">Learner/Guide</a></li>
                <li><a href="<?php echo $this->createUrl('', ['user_type' => 'parent']); ?>">Parent</a></li>
                <li><a href="<?php echo $this->createUrl('', ['user_type' => 'school']); ?>">School</a></li>
                <li><a href="<?php echo $this->createUrl('', ['user_type' => 'company']); ?>">Company</a></li>
                <li><a href="<?php echo $this->createUrl('', ['user_type' => 'business_guide']); ?>">Business Guide</a></li>
            <?php } ?>
        </ul>
        <p class="copy-right">© 2014  our company</p>
    </div>
</footer>