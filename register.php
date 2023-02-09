<?php
session_start();
include 'global/serverconfiguration.php';
include 'global/dbconnection.php';

if (isset($_POST["registro"])) {
    if (!empty($_POST['name']) && !empty($_POST['apellidos']) && !empty($_POST['correo']) && !empty($_POST['tel']) && !empty($_POST['password1']) && !empty($_POST['password2'])) {
        $Nombre = $_POST['name'];
        $Apellido = $_POST['apellidos'];
        $correo = $_POST['correo'];
        $telefono = $_POST['tel'];
        $password1 = $_POST['password1'];
        $password2 = $_POST['password2'];
        //$password = $_POST['password'];

        if ($password1 == $password2) {


            $password_hash = password_hash($password1, PASSWORD_BCRYPT);
            $query = $pdo->prepare("SELECT * FROM clientes WHERE clienteEmail = :email");
            $query->bindParam(":email", $correo);
            $query->execute();

            if ($query->rowCount() > 0) {
                $message = "El correo ya se encuentra registrado";
            } else if ($query->rowCount() == 0) {
                $query = $pdo->prepare("INSERT INTO clientes (clienteNombre, clienteApellido, clienteEmail, clientePw, clienteTel, fechaRegistro)
            VALUES(:nombre, :apellido, :correo, :password_hash, :numero, now());");
                $query->bindParam(":nombre", $Nombre);
                $query->bindParam(":apellido", $Apellido);
                $query->bindParam(":correo", $correo);
                $query->bindParam(":numero", $telefono);
                $query->bindParam(":password_hash", $password_hash);
                $result = $query->execute();

                if ($result) {
                    $message = "Cuenta correctamente creada";
                } else {
                    $message = "Error al ingresar los datos, intenta de nuevo!";
                }
            }
        } else {
            $message = "Intentaste enviar el formulario vacio";
        }
    } else {
        $message = "Las contraseñas no coinciden... Intenta de nuevo";
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/login.css">
</head>

<body>
    <div class="container">
    <div class="formBox level-login">
      <div class="box boxShaddow"></div>
      <div class="box registerBox" style="overflow-y: auto;">
        <h2>Register</h2>
        <form method="POST" class="form">
          <div class="f_row">
            <label>Nombre</label>
            <input type="text" name="name" class="input-field" required>
            <u></u>
          </div>
          <div class="f_row">
            <label>Apellido</label>
            <input type="text" name="apellidos" class="input-field" required>
            <u></u>
          </div>
          <div class="f_row">
            <label>Email</label>
            <input type="email" name="correo" class="input-field" required>
            <u></u>
          </div>
          <div class="f_row">
            <label>Contraseña</label>
            <input type="password" name="password1" id="password1" class="input-field" required>
            <u></u>
          </div>
          <div class="f_row last">
            <label>Confirmar contraseña</label>
            <input type="password" name="password2" id="password2" class="input-field" required>
            <u></u>
          </div>
          <div class="f_row">
            <label>Telefono</label>
            <input type="tel" name="tel" class="input-field" required>
            <u></u>
          </div>
          <button type="submit" name="registro" class="btn">Registrarse</button>
        </form>
      </div>
      <a href="#" class="regTag icon-add">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">
          <path d="M357,204H204v153h-51V204H0v-51h153V0h51v153h153V204z" />
        </svg>

      </a>
    </div>
  </div>
</body>

</html>