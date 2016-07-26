<?php
  $page = 'login';
?>
<?php include 'header.php' ?>

  <section class="login-content">
    <form class="login-form" method="post" action="./">
      <img src="./assets/images/logo.png" class="logo">
      <h4 class="-upper -dashed">login</h4>
        <div class="form-group">
          <input type="email" class="form-control" name="email" placeholder="Email">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" name="password" placeholder="Password">
        </div>
      <button type="submit" class="btn btn-primary btn-block btn-entrar">ENTRAR</button>
    </form>
  </section>

<?php include 'footer.php' ?>