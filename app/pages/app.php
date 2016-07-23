<?php 
$module = @$_GET['module'] ?: 'home';
?>
<?php include("./pages/app/$module.php"); ?>