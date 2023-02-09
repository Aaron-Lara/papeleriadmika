<?php
session_start();
include 'global/serverconfiguration.php';
include 'global/dbconnection.php';
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
          header("Location: index.php");
          exit;
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