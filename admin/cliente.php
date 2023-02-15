<?php
session_start();

if (!isset($_SESSION['user']) || $_SESSION['user']['usuarioEmial'] != 'pdmika@outlook.com') {
  header("Location: ../login.php");
  exit;
}

if (isset($_GET['logout'])) {
  session_destroy();
  header("Location: login.php");
  exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<?php
include '../global/serverconfiguration.php';
include '../global/dbconnection.php';
?>
<?php
$txtID = (isset($_POST['txtID'])) ? $_POST['txtID'] : "";
$txtnombre = (isset($_POST['txtnombre'])) ? $_POST['txtnombre'] : "";
$txtapellido = (isset($_POST['txtapellido'])) ? $_POST['txtapellido'] : "";
$txtcorreo = (isset($_POST['txtcorreo'])) ? $_POST['txtcorreo'] : "";
$txtcontraseña = (isset($_POST['txtcontraseña'])) ? $_POST['txtcontraseña'] : "";
$txtnumero = (isset($_POST['txtnumero'])) ? $_POST['txtnumero'] : "";
$txtfecha = date("Y-m-d H:i:s");
$action = (isset($_POST['action'])) ? $_POST['action'] : "";
switch ($action) {
  case 'Añadir':
    $hash = password_hash($txtcontraseña, PASSWORD_DEFAULT);
    $InsertQuery = $pdo->prepare("INSERT INTO clientes (clienteNombre, clienteApellido, clienteEmail, clientePw, clienteTel, fechaRegistro)  
    VALUES (:Clientename, :ClienteLastname, :Clienteemail, :Clientepass, :Clientetel, :Registrofecha)");
    $InsertQuery->bindParam(':Clientename', $txtnombre);
    $InsertQuery->bindParam(':ClienteLastname', $txtapellido);
    $InsertQuery->bindParam(':Clienteemail', $txtcorreo);
    $InsertQuery->bindParam(':Clientepass', $hash);
    $InsertQuery->bindParam(':Clientetel', $txtnumero);
    $InsertQuery->bindParam(':Registrofecha', $txtfecha);
    $InsertQuery->execute();
    break;
  case 'Modificar':
    $hash = password_hash($txtcontraseña, PASSWORD_DEFAULT);
    $ModifyQuery = $pdo->prepare("UPDATE clientes SET clienteNombre = :Clientename, clienteApellido = :ClienteLastname, 
    clienteEmail = :Clienteemail, clientePw = :Clientepass, clienteTel = :Clientetel, fechaRegistro = :Registrofecha   WHERE id=:id");
    $ModifyQuery->bindParam(':id', $txtID);
    $ModifyQuery->bindParam(':Clientename', $txtnombre);
    $ModifyQuery->bindParam(':ClienteLastname', $txtapellido);
    $ModifyQuery->bindParam(':Clienteemail', $txtcorreo);
    $ModifyQuery->bindParam(':Clientetel', $txtnumero);
    $ModifyQuery->bindParam(':Clientepass', $hash);
    $ModifyQuery->bindParam(':Registrofecha', $txtfecha);
    $ModifyQuery->execute();
    break;
  case 'Eliminar':
    $DeleteQuery = $pdo->prepare("DELETE FROM clientes  WHERE id=:id");
    $DeleteQuery->bindParam(':id', $txtID);
    $DeleteQuery->execute();
    break;
  case 'Seleccionar':
    $SelectQuery = $pdo->prepare("SELECT * FROM clientes WHERE id=:id");
    $SelectQuery->bindParam(':id', $txtID);
    $SelectQuery->execute();
    $AClient = $SelectQuery->fetch(PDO::FETCH_LAZY);
    $txtnombre = $AClient['clienteNombre'];
    $txtapellido = $AClient['clienteApellido'];
    $txtcorreo = $AClient['clienteEmail'];
    $txtnumero = $AClient['clienteTel'];
    $txtfecha = $AClient['fechaRegistro'];
    $hash = $AClient['clientePw'];
    break;
  case 'Cancelar':
    header('Location: cliente.php');
    break;
  default:
    break;
}
?>
<script src="https://kit.fontawesome.com/7218e15624.js" crossorigin="anonymous"></script>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Papeleria D Mika</title>

  <link rel="stylesheet" href="assets/css/main/app.css" />
  <link rel="stylesheet" href="assets/css/main/app-dark.css" />
  <link rel="shortcut icon" href="assets/images/logo/favicon.svg" type="image/x-icon" />
  <link rel="shortcut icon" href="assets/images/logo/favicon.png" type="image/png" />
  <link rel="stylesheet" href="assets/extensions/@fortawesome/fontawesome-free/css/all.min.css" />

  <link rel="stylesheet" href="assets/css/shared/iconly.css" />
</head>

<body>
  <div id="app">
    <div id="sidebar" class="active">
      <div class="sidebar-wrapper active">
        <div class="sidebar-header position-relative">
          <div class="d-flex justify-content-between align-items-center">
            <div class="logo">
              <a href="index.php"><img src="../img/logo.jpg" alt="Logo" srcset="" /></a>
            </div>
            <div class="theme-toggle d-flex gap-2 align-items-center mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--system-uicons" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 21 21">
                <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4c0 2.219 1.781 4 4 4zM4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2" opacity=".3"></path>
                  <g transform="translate(-210 -1)">
                    <path d="M220.5 2.5v2m6.5.5l-1.5 1.5"></path>
                    <circle cx="220.5" cy="11.5" r="4"></circle>
                    <path d="m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2"></path>
                  </g>
                </g>
              </svg>
              <div class="form-check form-switch fs-6">
                <input class="form-check-input me-0" type="checkbox" id="toggle-dark" />
                <label class="form-check-label"></label>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path fill="currentColor" d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31Z"></path>
              </svg>
            </div>
            <div class="sidebar-toggler x">
              <a href="#" class="sidebar-hide d-xl-none d-block"><i class="bi bi-x bi-middle"></i></a>
            </div>
          </div>
        </div>
        <div class="sidebar-menu">
          <ul class="menu">
            <li class="sidebar-title">Menu</li>
            <li class="sidebar-item">
              <a href="index.php" class="sidebar-link">
                <i class="bi bi-grid-fill"></i>
                <span>INTERFAZ</span>
              </a>
            </li>
            <li class="sidebar-item">
              <a href="producto.php" class="sidebar-link">
                <i class="bi bi-cart-plus-fill"></i>
                <span>PRODUCTOS</span>
              </a>
            </li>
            <li class="sidebar-item active">
              <a href="cliente.php" class="sidebar-link">
                <i class="bi bi-people-fill"></i>
                <span>CLIENTES</span>
              </a>
            </li>
            <li class="sidebar-item">
              <a href="usuario.php" class="sidebar-link">
                <i class="bi bi-person-circle"></i>
                <span>USUARIOS</span>
              </a>
            </li>
            <li class="sidebar-item">
              <a href="tipoUsuario.php" class="sidebar-link">
                <i class="bi bi-person-badge-fill"></i>
                <span>TIPO DE USUARIO</span>
              </a>
            </li>
            <li class="sidebar-item">
              <a href="categorias.php" class="sidebar-link">
                <i class="bi bi-tags-fill"></i>
                <span>CATEGORIAS</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="main">
      <header class="mb-3">
        <a href="#" class="burger-btn d-block d-xl-none">
          <i class="bi bi-justify fs-3"></i>
        </a>
      </header>

      <div class="page-heading">
        <h3>CLIENTES</h3>
      </div>
      <div class="page-content">
        <section class="row">
          <div class="col-12 col-lg-12">
            <div class="row">
              <div class="col-12 col-lg-12 col-md-12">
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title">Registrar cliente</h4>
                  </div>
                  <div class="card-content">
                    <div class="card-body">
                      <form action="cliente.php" method="POST" class="form form-vertical">
                        <div class="form-body">
                          <div class="row">
                            <div class="col-12">
                              <div class="form-group has-icon-left">
                                <div class="position-relative">
                                  <input type="hidden" name="txtID" id="txtID" value="<?php echo $txtID; ?>" class="form-control" />
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-group has-icon-left">
                                <label for="first-name-icon">Nombre</label>
                                <div class="position-relative">
                                  <input type="text" name="txtnombre" id="txtnombre" value="<?php echo $txtnombre; ?>" class="form-control" />
                                  <div class="form-control-icon">
                                    <i class="fa-solid fa-keyboard"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-group has-icon-left">
                                <label>Apellidos</label>
                                <div class="position-relative">
                                  <input type="text" name="txtapellido" id="txtapellido" value="<?php echo $txtapellido; ?>" class="form-control" />
                                  <div class="form-control-icon">
                                    <i class="fa-solid fa-keyboard"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-group has-icon-left">
                                <label>Email</label>
                                <div class="position-relative">
                                  <input type="email" name="txtcorreo" id="txtcorreo" value="<?php echo $txtcorreo; ?>" class="form-control" />
                                  <div class="form-control-icon">
                                    <i class="fa-solid fa-envelope"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-group has-icon-left">
                                <label>Contraseña</label>
                                <div class="position-relative">
                                  <input type="password" name="txtcontraseña" id="txtcontraseña" value="<?php echo $txtcontraseña; ?>" class="form-control" />
                                  <div class="form-control-icon">
                                    <i class="fa-solid fa-lock"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-group has-icon-left">
                                <label>Confirmar Contraseña</label>
                                <div class="position-relative">
                                  <input type="password" name="txtcontraseña" id="txtcontraseña" value="<?php echo $txtcontraseña; ?>" class="form-control" />
                                  <div class="form-control-icon">
                                    <i class="fa-solid fa-key"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-group has-icon-left">
                                <label>Numero</label>
                                <div class="position-relative">
                                  <input type="tel" name="txtnumero" id="txtnumero" value="<?php echo $txtnumero; ?>" class="form-control" />
                                  <div class="form-control-icon">
                                    <i class="fa-solid fa-phone"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-12 d-flex justify-content-end">
                              <input type="submit" name="action" value="Añadir" class="btn btn-success me-1 mb-1">
                              </input>
                              <input type="submit" name="action" value="Modificar" class="btn btn-primary me-1 mb-1">
                              </input>
                              <input type="submit" name="action" value="Cancelar" class="btn btn-danger me-1 mb-1">
                              </input>
                            </div>
                          </div>
                        </div>
                      </form>
                      <?php
                      $ClientQuery = $pdo->prepare("SELECT * FROM clientes");
                      $ClientQuery->execute();
                      $ListClient = $ClientQuery->fetchAll(PDO::FETCH_ASSOC);
                      ?>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="col-12 col-lg-12 col-md-12">
        <div class="card">
          <div class="card-content">
            <div class="card-body">
              <div class="form-body">
                <div class="row">
                  <div class="table-responsive">
                    <table class="table table-bordered mb-0">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>NOMBRE</th>
                          <th>APELLIDOS</th>
                          <th>EMAIL</th>
                          <th>CONTRASEÑA</th>
                          <th>TELEFONO</th>
                          <th>FECHA</th>
                          <th>AJUSTES</th>
                        </tr>
                      </thead>
                      <tbody>
                        <?php foreach ($ListClient as $clientes) { ?>
                          <tr>
                            <td><?php echo $clientes['id'] ?></td>
                            <td><?php echo $clientes['clienteNombre'] ?></td>
                            <td><?php echo $clientes['clienteApellido'] ?></td>
                            <td><?php echo $clientes['clienteEmail'] ?></td>
                            <td><?php echo $clientes['clientePw'] ?></td>
                            <td><?php echo $clientes['clienteTel'] ?></td>
                            <td><?php echo $clientes['fechaRegistro'] ?></td>
                            <td>
                              <form method="POST">
                                <input type="hidden" name="txtID" value="<?php echo $clientes['id'] ?>">
                                <input type="submit" name="action" value="Seleccionar" class="btn btn-warning btn-sm"></input>
                                <input type="submit" name="action" value="Eliminar" class="btn btn-danger btn-sm"></input>
                              </form>
                            </td>
                          </tr>
                        <?php } ?>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div class="footer clearfix mb-0 text-muted">
          <div class="float-start">
            <p class="footer-text m-0 col-lg-12 col-md-12">
              Copyright &copy;
              <script>
                document.write(new Date().getFullYear());
              </script>
              Papelería D Mika | Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
  <script src="assets/js/bootstrap.js"></script>
  <script src="assets/js/app.js"></script>

  <!-- Need: Apexcharts -->
  <script src="assets/extensions/apexcharts/apexcharts.min.js"></script>
  <script src="assets/js/pages/dashboard.js"></script>
</body>

</html>