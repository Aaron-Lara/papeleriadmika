<?php
session_start();
include 'global/serverconfiguration.php';
include 'global/dbconnection.php';

if (isset($_POST["login"])) {
  if (!empty($_POST['email']) && !empty($_POST['password'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $query = $pdo->prepare("SELECT * FROM clientes WHERE clienteEmail = :email");
    $query->bindParam("email", $email);
    $query->execute();
    $result = $query->fetch(PDO::FETCH_ASSOC);
    $passBD = $result['clientePw'];
    if (!$result) {
      echo '<p class="error">La combinacion del usuario y la contraseña son invalidos</p>';
    } else {
      if ($result['clienteEmail'] == $email) {
        if (password_verify($password, $passBD)) {
          $_SESSION['session_username'] = $email;
          $_SESSION['session_idCliente'] = $result['id'];
          $_SESSION['session_lastname'] = $result['clienteApellido'];
          $_SESSION['session_nameCliente'] = $result['clienteNombre'];
          echo "<script>window.location= 'index.php';</script>";
        } else {
          $message = "contraseña incorrecta o invalida";
        }
      } else {
        $message = "Correo incorrecto o invalido";
      }
    }
  } else {
    $message = "Todos los campos son requeridos";
  }
}
// Check if form is submitted
if (isset($_POST["registro"])) {
  // Check if all fields are filled
  if (!empty($_POST['name']) && !empty($_POST['apellidos']) && !empty($_POST['correo']) && !empty($_POST['tel']) && !empty($_POST['password1']) && !empty($_POST['password2'])) {
    $Nombre = $_POST['name'];
    $Apellido = $_POST['apellidos'];
    $correo = $_POST['correo'];
    $telefono = $_POST['tel'];
    $password1 = $_POST['password1'];
    $password2 = $_POST['password2'];

    // Check if the two passwords match
    if ($password1 == $password2) {
      $password_hash = password_hash($password1, PASSWORD_BCRYPT);

      // Check if the email is already in use
      $query = $pdo->prepare("SELECT * FROM clientes WHERE clienteEmail = :email");
      $query->bindParam(":email", $correo);
      $query->execute();
      if ($query->rowCount() == 0) {
        // Insert the user's information into the database
        $query = $pdo->prepare("INSERT INTO clientes (clienteNombre, clienteApellido, clienteEmail, clientePw, clienteTel, fechaRegistro)
        VALUES(:nombre, :apellido, :correo, :password_hash, :numero, now());");
        $query->bindParam(":nombre", $Nombre);
        $query->bindParam(":apellido", $Apellido);
        $query->bindParam(":correo", $correo);
        $query->bindParam(":numero", $telefono);
        $query->bindParam(":password_hash", $password_hash);
        $result = $query->execute();

        // Check if the query was successful
        if ($result) {
          $message = "Account successfully created";
        } else {
          $message = "Error entering data, try again!";
        }
      } else {
        $message = "Email already registered";
      }
    } else {
      $message = "Passwords do not match... Try again";
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
        <form method="POST" class="form">
          <div class="f_row">
            <label>Correo</label>
            <input type="email" name="email" class="input-field" required>
            <u></u>
          </div>
          <div class="f_row last">
            <label>Contraseña</label>
            <input type="password" name="password" class="input-field" required>
            <u></u>
          </div>
          <button type="submit" name="login" class="btn"><span>Iniciar</span><u></u>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 415.582 415.582" xml:space="preserve">
              <path d="M411.47,96.426l-46.319-46.32c-5.482-5.482-14.371-5.482-19.853,0L152.348,243.058l-82.066-82.064
                c-5.48-5.482-14.37-5.482-19.851,0l-46.319,46.32c-5.482,5.481-5.482,14.37,0,19.852l138.311,138.31
                c2.741,2.742,6.334,4.112,9.926,4.112c3.593,0,7.186-1.37,9.926-4.112L411.47,116.277c2.633-2.632,4.111-6.203,4.111-9.925
                C415.582,102.628,414.103,99.059,411.47,96.426z" />
            </svg>
          </button>
          <div class="f_link">
            <a href="" class="resetTag">Forgot your password?</a>
          </div>
        </form>
      </div>
      <div class="box forgetbox">
        <a href="#" class="back icon-back">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 199.404 199.404" style="enable-background:new 0 0 199.404 199.404;" xml:space="preserve">
            <polygon points="199.404,81.529 74.742,81.529 127.987,28.285 99.701,0 0,99.702 99.701,199.404 127.987,171.119 74.742,117.876 
		199.404,117.876 " />
          </svg>
        </a>
        <h2>Reset Password</h2>
        <form class="form">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
          <div class="f_row last">
            <label>Email Id</label>
            <input type="text" class="input-field" required>
            <u></u>
          </div>
          <button class="btn"><span>Reset</span><u></u>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 415.582 415.582" xml:space="preserve">
              <path d="M411.47,96.426l-46.319-46.32c-5.482-5.482-14.371-5.482-19.853,0L152.348,243.058l-82.066-82.064
                c-5.48-5.482-14.37-5.482-19.851,0l-46.319,46.32c-5.482,5.481-5.482,14.37,0,19.852l138.311,138.31
                c2.741,2.742,6.334,4.112,9.926,4.112c3.593,0,7.186-1.37,9.926-4.112L411.47,116.277c2.633-2.632,4.111-6.203,4.111-9.925
                C415.582,102.628,414.103,99.059,411.47,96.426z" />
            </svg>
          </button>
        </form>
      </div>
      <<div class="box registerBox" style="overflow-y: auto;">
        <span class="reg_bg"></span>
        <h2>Register</h2>
        <form method="POST" class="form">
          <div class="f_row">
            <label>Name</label>
            <input type="text" name="name" class="input-field" required>
            <u></u>
          </div>
          <div class="f_row">
            <label>Last Name</label>
            <input type="text" name="apellidos" class="input-field" required>
            <u></u>
          </div>
          <div class="f_row">
            <label>Email</label>
            <input type="email" name="correo" class="input-field" required>
            <u></u>
          </div>
          <div class="f_row">
            <label>Password</label>
            <input type="password" name="password1" id="password1" class="input-field" required>
            <u></u>
          </div>
          <div class="f_row last">
            <label>Confirm Password</label>
            <input type="password" name="password2" id="password2" class="input-field" required>
            <u></u>
          </div>
          <div class="f_row">
            <label>Phone</label>
            <input type="tel" name="tel" class="input-field" required>
            <u></u>
          </div>
          <button type="submit" name="registro" class="btn">Sign Up</button>
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

</body>

</html>