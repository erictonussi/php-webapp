<!doctype html>
<html class="no-js" lang="">
  <?php include('./inc/head.php'); ?>
  <body>
    <!--[if lt IE 10]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    
    <?php include('./pages/' . ( @$_GET['page'] ?: 'login') . '.php'); ?>
    
    <?php include('./inc/footer.php'); ?>
    
  </body>
</html>