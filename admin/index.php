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
<script src="https://kit.fontawesome.com/7218e15624.js" crossorigin="anonymous"></script>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Papeleria D Mika</title>

  <link rel="stylesheet" href="assets/css/main/app.css" />
  <link rel="stylesheet" href="assets/css/main/app-dark.css" />
  <link rel="shortcut icon" href="assets/images/logo/favicon.svg" type="image/x-icon" />
  <link rel="shortcut icon" href="assets/images/logo/favicon.png" type="image/png" />

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
            <li class="sidebar-item active">
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
            <li class="sidebar-item">
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
        <h3>INTERFAZ DE ADMINISTRADOR</h3>
      </div>
      <div class="page-content">
        <section class="row">
          <div class="col-12 col-lg-12">
            <div class="row">
              <div id="producto-div" class="col-8 col-lg-4 col-md-8">
                <div class="card">
                  <div class="card-body px-4 py-4-5">
                    <div class="row">
                      <div class="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start"></div>
                      <div style="text-align: center">
                        <i class="bi bi-cart-plus-fill fa-5x" style="margin: 10px"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="cliente-div" class="col-8 col-lg-4 col-md-8">
                <div class="card">
                  <div class="card-body px-4 py-4-5">
                    <div class="row">
                      <div class="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start"></div>
                      <div style="text-align: center">
                        <i class="bi bi-people-fill fa-5x" style="margin: 10px"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="user-div" class="col-8 col-lg-4 col-md-8">
                <div class="card">
                  <div class="card-body px-4 py-4-5">
                    <div class="row">
                      <div class="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start"></div>
                      <div style="text-align: center">
                        <i class="bi bi-person-circle fa-5x" style="margin: 10px"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tipo-div" class="col-8 col-lg-4 col-md-8">
                <div class="card">
                  <div class="card-body px-4 py-4-5">
                    <div class="row">
                      <div class="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start"></div>
                      <div style="text-align: center">
                        <i class="bi bi-person-badge-fill fa-5x" style="margin: 10px"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="categoria-div" class="col-8 col-lg-4 col-md-8">
                <div class="card">
                  <div class="card-body px-4 py-4-5">
                    <div class="row">
                      <div class="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start"></div>
                      <div style="text-align: center">
                        <i class="bi bi-tags-fill fa-5x" style="margin: 10px"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="logout-div" class="col-8 col-lg-4 col-md-8">
                <div class="card">
                  <div class="card-body px-4 py-4-5">
                    <div class="row">
                      <div class="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start"></div>
                      <div style="color:red; text-align: center">
                        <i class="bi bi-box-arrow-right fa-5x" style="margin: 10px"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div class="footer clearfix mb-0 text-muted">
          <div class="float-start">
            <p class="footer-text m-0 col-lg-12 col-md-12">
              Copyright &copy;
              <script>
                document.write(new Date().getFullYear());
              </script>
              Papeler??a D Mika | Todos los derechos reservados
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
  <script>
    document.getElementById("user-div").addEventListener("click", function() {
      window.location.href = "usuario.php";
    });
    document.getElementById("producto-div").addEventListener("click", function() {
      window.location.href = "producto.php";
    });
    document.getElementById("cliente-div").addEventListener("click", function() {
      window.location.href = "cliente.php";
    });
    document.getElementById("categoria-div").addEventListener("click", function() {
      window.location.href = "categorias.php";
    });
    document.getElementById("tipo-div").addEventListener("click", function() {
      window.location.href = "tipoUsuario.php";
    });
    document.getElementById("logout-div").addEventListener("click", function() {
      <?php if (isset($_SESSION['user'])) { ?>
        window.location.href = "logout.php";
      <?php } else { ?>
        window.location.href = "../login.php";
      <?php } ?>
    });
  </script>
</body>

</html>