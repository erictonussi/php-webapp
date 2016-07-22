<?php 
$page = @$_GET['page'] ?: 'login';
?>
<!doctype html>
<html class="no-js" lang="">
  <?php include('./inc/head.php'); ?>
  <body class="<?=$page?>">
    <!--[if lt IE 10]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    
    <div class="main-content">
      <?php include("./pages/$page.php"); ?>
    </div>
    
    <?php include('./inc/footer.php'); ?>
    
  </body>
</html>