<?php
session_start();
include 'global/serverconfiguration.php';
include 'global/dbconnection.php';

if (isset($_POST["login"])) {
  if (!empty($_POST['email']) && !empty($_POST['password'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = $pdo->prepare("SELECT * FROM clientes WHERE clienteEmail = :email");
    $query->bindParam(":email", $email);
    $query->execute();
    if ($query->rowCount() > 0) {
      $user = $query->fetch(PDO::FETCH_ASSOC);
      if (password_verify($password, $user['clientePw'])) {
        $_SESSION['user'] = $user;
        header("Location: index.php");
        exit;
      } else {
        $message = "Incorrect email or password";
      }
    } else {
      $message = "Incorrect email or password";
    }
  } else {
    $message = "You tried to submit an empty form";
  }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Iniciar Sesión</title>
  <link rel="stylesheet" href="./css/login.css">

</head>

<body>
  <!-- partial:index.partial.html -->
  <div class="container">
    <div class="formBox level-login">
      <div class="box boxShaddow"></div>
      <div class="box loginBox">
        <h2>Iniciar Sesión</h2>
        <form action="login.php" method="POST" class="form">
          <div class="f_row">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" class="input-field">
            <u></u>
          </div>
          <div class="f_row last">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" class="input-field">
            <u></u>
          </div>
          <input type="submit" name="login" value="Login">
        </form>
      </div>
      <div class="box registerBox" style="overflow-y: auto;">
        <span class="reg_bg"></span>
        <h2>Register</h2>
        <form action="register.php" method="post" class="form">
          <div class="f_row">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" class="input-field" required>
            <u><u>
          </div>
          <div class="f_row">
            <label for="apellidos">Last Name:</label>
            <input type="text" name="apellidos" id="apellidos" class="input-field" required>
            <u><u>
          </div>
          <div class="f_row">
            <label for="correo">Email:</label>
            <input type="email" name="correo" id="correo" class="input-field" required>
            <u><u>
          </div>
          <div class="f_row">
            <label for="tel">Phone Number:</label>
            <input type="tel" name="tel" id="tel" class="input-field" required>
            <u><u>
          </div>
          <div class="f_row">
            <label for="password1">Password:</label>
            <input type="password" name="password1" id="password1" class="input-field" required>
            <u><u>
          </div>
          <div class="f_row">
            <label for="password2">Confirm Password:</label>
            <input type="password" name="password2" id="password2" class="input-field" required>
            <u><u>
          </div>
          <input type="submit" name="registro" value="Submit">
        </form>
        <?php if (!empty($message)) { ?>
          <div class="message">
            <?php echo $message; ?>
          </div>
        <?php } ?>
      </div>
      <a href="#" class="regTag icon-add">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">
          <path d="M357,204H204v153h-51V204H0v-51h153V0h51v153h153V204z" />
        </svg>
      </a>
    </div>
  </div>
  <!-- partial -->
  <script src='//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
  <script src="js/script.js"></script>
  <script>
    const form = document.getElementById('register-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      // Your code to submit the form to the server
    });
  </script>

</body>

</html>