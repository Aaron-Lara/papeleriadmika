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
        $message = "Correo o contraseña incorrecta";
      }
    } else {
      $query = $pdo->prepare("SELECT * FROM usuario WHERE usuarioEmial = :email");
      $query->bindParam(":email", $email);
      $query->execute();
      if ($query->rowCount() > 0) {
        $user = $query->fetch(PDO::FETCH_ASSOC);
        if (password_verify($password, $user['usuarioPw'])) {
          $_SESSION['user'] = $user;
          header("Location: admin/index.php");
          exit;
        } else {
          $message = "Correo o contraseña incorrecta";
        }
      } else {
        $message = "Correo o contraseña incorrecta";
      }
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
            <label for="email">Correo:</label>
            <input type="email" id="email" name="email" class="input-field">
            <u></u>
          </div>
          <div class="f_row last">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" class="input-field">
            <u></u>
          </div>
          <input type="submit" name="login" value="Iniciar" class="btnLogin">
          <input type="button" onclick="location.href='index.php';" value="Cancelar" class="btnCancelar" />
        </form>
      </div>
      <div class="box registerBox" style="overflow-y: auto;">
        <span class="reg_bg"></span>
        <h2>Registro</h2>
        <form action="register.php" method="post" class="form">
          <div class="f_row">
            <label for="name">Nombre:</label>
            <input type="text" name="name" id="name" class="input-field" required>
            <u><u>
          </div>
          <div class="f_row">
            <label for="apellidos">Apellido:</label>
            <input type="text" name="apellidos" id="apellidos" class="input-field" required>
            <u><u>
          </div>
          <div class="f_row">
            <label for="correo">Correo:</label>
            <input type="email" name="correo" id="correo" class="input-field" required>
            <u><u>
          </div>
          <div class="f_row">
            <label for="tel">Telefono:</label>
            <input type="tel" name="tel" id="tel" class="input-field" required>
            <u><u>
          </div>
          <div class="f_row">
            <label for="password1">Contraseña:</label>
            <input type="password" name="password1" id="password1" class="input-field" required>
            <u><u>
          </div>
          <div class="f_row">
            <label for="password2">Confirmar Contraseña:</label>
            <input type="password" name="password2" id="password2" class="input-field" required>
            <u><u>
          </div>
          <input type="submit" name="registro" value="Registro" class="btnLogin">
          <input type="button" onclick="location.href='login.php';" value="Cancelar" class="btnCancelar" />
        </form>
        <?php if (!empty($message)) { ?>
          <div class="alert alert-danger text-uppercase text-center"">
          <?php echo $message; ?>
      </div>
    <?php } ?>
    </div>
    <a href=" #" class="regTag icon-add">
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