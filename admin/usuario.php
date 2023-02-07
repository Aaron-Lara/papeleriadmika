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
$txttipoID = (isset($_POST['txttipoID'])) ? $_POST['txttipoID'] : "";
$action = (isset($_POST['action'])) ? $_POST['action'] : "";

switch ($action) {
  case 'Añadir':
    $hash = password_hash($txtcontraseña, PASSWORD_DEFAULT);
    $InsertQuery = $pdo->prepare("INSERT INTO usuario (usuarioNombre, usuarioApellido, usuarioEmial, usuarioPw, tipoID)  
    VALUES (:Usuarioname, :Usuariolastname, :Usuarioemail, :Usuariopass, :tipoid)");
    $InsertQuery->bindParam(':Usuarioname', $txtnombre);
    $InsertQuery->bindParam(':Usuariolastname', $txtapellido);
    $InsertQuery->bindParam(':Usuarioemail', $txtcorreo);
    $InsertQuery->bindParam(':Usuariopass', $hash);
    $InsertQuery->bindParam(':tipoid', $txttipoID);
    $InsertQuery->execute();
    break;
  case 'Modificar':
    $hash = password_hash($txtcontraseña, PASSWORD_DEFAULT);
    $ModifyQuery = $pdo->prepare("UPDATE usuario SET usuarioNombre = :Usuarioname, usuarioApellido = :UsuarioLastname, 
    usuarioEmial = :Usuarioemail, usuarioPw = :Usuariopass, tipoID = :tipoid  WHERE id=:id");
    $ModifyQuery->bindParam(':id', $txtID);
    $ModifyQuery->bindParam(':Usuarioname', $txtnombre);
    $ModifyQuery->bindParam(':UsuarioLastname', $txtapellido);
    $ModifyQuery->bindParam(':Usuarioemail', $txtcorreo);
    $ModifyQuery->bindParam(':Usuariopass', $hash);
    $ModifyQuery->bindParam(':tipoid', $txttipoID);
    $ModifyQuery->execute();
    break;
  case 'Eliminar':
    $DeleteQuery = $pdo->prepare("DELETE FROM usuario  WHERE id=:id");
    $DeleteQuery->bindParam(':id', $txtID);
    $DeleteQuery->execute();
    break;
  case 'Seleccionar':
    $SelectQuery = $pdo->prepare("SELECT * FROM usuario WHERE id=:id");
    $SelectQuery->bindParam(':id', $txtID);
    $SelectQuery->execute();
    $AUsuario = $SelectQuery->fetch(PDO::FETCH_LAZY);
    $txtnombre = $AUsuario['usuarioNombre'];
    $txtapellido = $AUsuario['usuarioApellido'];
    $txtcorreo = $AUsuario['usuarioEmial'];
    $txtcontraseña = $AUsuario['usuarioPw'];
    $txttipoID = $AUsuario['tipoID'];
    break;
  case 'Cancelar':
    header('location: usuario.php');
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
              <a href="index.php"><img src="assets/images/logo/logo.svg" alt="Logo" srcset="" /></a>
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
                <span>Interfaz</span>
              </a>
            </li>

            <li class="sidebar-item has-sub">
              <a href="#" class="sidebar-link">
                <i class="bi bi-stack"></i>
                <span>Formularios</span>
              </a>
              <ul class="submenu">
                <li class="submenu-item">
                  <a href="producto.php">Producto</a>
                </li>
                <li class="submenu-item">
                  <a href="cliente.php">Cliente</a>
                </li>
                <li class="submenu-item">
                  <a href="categorias.php">Categoria</a>
                </li>
                <li class="submenu-item active">
                  <a href="usuario.php">Usuario</a>
                </li>
                <li class="submenu-item">
                  <a href="tipoUsuario.php">Tipo de usuario</a>
                </li>
              </ul>
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
        <h3>USUARIOS</h3>
      </div>
      <div class="page-content">
        <section class="row">
          <div class="col-12 col-lg-12">
            <div class="row">
              <div class="col-12 col-lg-12 col-md-12">
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title">Registrar usuario</h4>
                  </div>
                  <div class="card-content">
                    <div class="card-body">
                      <form action="usuario.php" method="POST" class="form form-vertical">
                        <div class="form-body">
                          <div class="row">
                            <div class="col-12">
                              <div class="form-group has-icon-left">
                                <div class="position-relative">
                                  <input type="hidden" name="txtID" id="txtID" value="<?php echo $txtID; ?>" class="form-control" placeholder="Input with icon left" />
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-group has-icon-left">
                                <label for="first-name-icon">Nombre</label>
                                <div class="position-relative">
                                  <input type="text" name="txtnombre" id="txtnombre" value="<?php echo $txtnombre; ?>" class="form-control" placeholder="Nombre" />
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
                                  <input type="text" name="txtapellido" id="txtapellido" value="<?php echo $txtapellido; ?>" class="form-control" placeholder="Apellidos" />
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
                                  <input type="email" name="txtcorreo" id="txtcorreo" value="<?php echo $txtcorreo; ?>" class="form-control" placeholder="Email" />
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
                                  <input type="password" name="txtcontraseña" id="txtcontraseña" value="<?php echo $txtcontraseña; ?>" class="form-control" placeholder="Contraseña" />
                                  <div class="form-control-icon">
                                    <i class="fa-solid fa-lock"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-group has-icon-left">
                                <label>Tipo de usuario</label>
                                <?php echo $txttipoID; ?>
                                <select class="form-control" name="txttipoID" id="txttipoID">
                                  <option value="00">->Selecciona<-</option>
                                      <?php
                                      $SelectTypeUser = $pdo->prepare("SELECT * FROM tipousuario;");
                                      $SelectTypeUser->execute();

                                      if (!empty($txttipoID)) {
                                        $ListtipoUsuario = $SelectTypeUser->fetchAll();
                                        foreach ($ListtipoUsuario as $tipoUsuario) {
                                          $Selected = ($txttipoID == $tipoUsuario['id']) ? 'selected' : null;
                                          echo '<option value="' . $tipoUsuario['id'] . '"' . $Selected . '>' . $tipoUsuario['usuarioTipo'];
                                          '</option>';
                                        }
                                      } else {
                                        $ListtipoUsuario = $SelectTypeUser->fetchAll();
                                        foreach ($ListtipoUsuario as $tipoUsuario) {
                                          echo '<option value="' . $tipoUsuario['id'] . '">' . $tipoUsuario['usuarioTipo'] . '</option>';
                                        }
                                      }
                                      ?>
                                </select>
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
                      $UsuarioQuery = $pdo->prepare("SELECT * FROM usuario");
                      $UsuarioQuery->execute();
                      $ListUsuario = $UsuarioQuery->fetchAll(PDO::FETCH_ASSOC);
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
                            <th>TIPO</th>
                            <th>AJUSTES</th>
                          </tr>
                        </thead>
                        <tbody>
                          <?php foreach ($ListUsuario as $usuarios) { ?>
                            <tr>
                              <td><?php echo $usuarios['id'] ?></td>
                              <td><?php echo $usuarios['usuarioNombre'] ?></td>
                              <td><?php echo $usuarios['usuarioApellido'] ?></td>
                              <td><?php echo $usuarios['usuarioEmial'] ?></td>
                              <td><?php echo $usuarios['usuarioPw'] ?></td>
                              <td><?php
                                  $tipoUsuarioQuery = $pdo->prepare("SELECT usuarioTipo FROM tipousuario WHERE id=?");
                                  $tipoUsuarioQuery->execute([$usuarios['tipoID']]);
                                  $ListtipoUsuario = $tipoUsuarioQuery->fetch(PDO::FETCH_ASSOC);
                                  $tipoUsuario = $ListtipoUsuario['usuarioTipo'];
                                  echo $tipoUsuario
                                  ?></td>
                              <td>
                                <form method="POST">
                                  <input type="hidden" name="txtID" value="<?php echo $usuarios['id'] ?>">
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