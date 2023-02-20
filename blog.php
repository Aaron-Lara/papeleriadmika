<?php
session_start();
if (isset($_GET['logout'])) {
  session_destroy();
  header("Location: login.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<!------ Include the above in your HEAD tag ---------->
<script src="https://kit.fontawesome.com/7218e15624.js" crossorigin="anonymous"></script>


<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <link rel="icon" href="img/favicon.png" type="image/png" />
  <title>Papelería D Mika</title>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="css/bootstrap.css" />
  <link rel="stylesheet" href="vendors/linericon/style.css" />
  <link rel="stylesheet" href="css/font-awesome.min.css" />
  <link rel="stylesheet" href="css/themify-icons.css" />
  <link rel="stylesheet" href="css/flaticon.css" />
  <link rel="stylesheet" href="vendors/owl-carousel/owl.carousel.min.css" />
  <link rel="stylesheet" href="vendors/lightbox/simpleLightbox.css" />
  <link rel="stylesheet" href="vendors/nice-select/css/nice-select.css" />
  <link rel="stylesheet" href="vendors/animate-css/animate.css" />
  <link rel="stylesheet" href="vendors/jquery-ui/jquery-ui.css" />
  <!-- main css -->
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/style2.css" />
  <link rel="stylesheet" href="css/achievement-1.css" />
  <link rel="stylesheet" href="css/responsive.css" />
</head>

<body>
  <!--================Header Menu Area =================-->
  <header class="header_area">
    <div class="main_menu">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light w-100">
          <!-- Brand and toggle get grouped for better mobile display -->
          <a class="navbar-brand logo_h" href="index.php">
            <img src="img/logo.jpg" alt="" />
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse offset w-100" id="navbarSupportedContent">
            <div class="row w-100 mr-0">
              <div class="col-lg-7 pr-0">
                <ul class="nav navbar-nav center_nav pull-right">
                  <li class="nav-item">
                    <a class="nav-link" href="index.php">Inicio</a>
                  </li>
                  <li class="nav-item">
                    <a href="category.php" class="nav-link">Tienda</a>
                    <!-- <ul class="dropdown-menu">
                      <li class="nav-item">
                        <a class="nav-link" href="category.php">Categorias</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="single-product.php">Detalles de producto</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="checkout.php">Pagar</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="cart.php">Carrito</a>
                      </li>
                    </ul> -->
                  </li>
                  <li class="nav-item active">
                    <a href="blog.php" class="nav-link">Sobre nosotros</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contact.php">Contacto</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-5 pr-0">
                <ul class="nav navbar-nav navbar-right right_nav pull-right">
                  <li class="nav-item">
                    <a href="cart.php" class="icons">
                      <i class="ti-shopping-cart"></i>
                    </a>
                  <li>
                  </li>
                  </li>
                  <li class="nav-item">
                    <?php
                    if (isset($_SESSION['user'])) {
                      $user = $_SESSION['user'];
                      if (isset($user['clienteNombre'])) {
                        echo "Bienvenido, " . $user['clienteNombre'] . "!";
                      } elseif (isset($user['usuarioNombre'])) {
                        echo "Bienvenido, " . $user['usuarioNombre'] . "!";
                      }
                      echo '<a href="index.php?logout=1" class="icons">';
                      echo '<i class="ti-power-off" aria-hidden="true"></i>';
                      echo '</a>';
                    } else {
                      echo '<a href="login.php" class="icons">';
                      echo '<i class="ti-user" aria-hidden="true"></i>';
                      echo '</a>';
                    }
                    ?>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
  <!--================Header Menu Area =================-->

  <!--================Home Banner Area =================-->
  <section class="banner_area">
    <div class="banner_inner d-flex align-items-center">
      <div class="container">
        <div class="banner_content d-md-flex justify-content-between align-items-center">
        </div>
      </div>
    </div>
  </section>
  <div class="services-breadcrumb">
    <div class="agile_inner_breadcrumb">
      <div class="container">
        <ul class="w3_short">
          <li>
            <a href="index.php">Inicio</a>
            <i>|</i>
          </li>
          <li>Sobre nosotros</li>
        </ul>
      </div>
    </div>
  </div>
  <h3 class="tittle-w3l">Bienvenido a mi papelería!</h3>

  <!--================End Home Banner Area =================-->

  <!--================Blog Area =================-->


  <div class="aboutus-section">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="aboutus">
            <h2 class="aboutus-title">Nosotros</h2>
            <p class="aboutus-text">Papelería D Mika es una empresa jovial que inicia sus operaciones en 2015.</p>
            <p class="aboutus-text">Este proyecto nace al querer cumplir un gran sueño, el cual es ser una papelería útil, llena de productos tradicionales,
              innovadores y vanguardistas en el ramo papelero, y así ser un apoyo para el segmento de estudiantes, profesionistas y personas creativas,
              en donde siempre estamos enfocados a ofrecer una buena actitud y un excelente servicio a nuestros clientes.</p>
          </div>
        </div>
        <div class="col-md-5 col-sm-6 col-xs-12">
          <div class="feature">
            <div class="feature-box">
              <div class="clearfix">
                <div class="iconset">
                  <span class="fa-solid fa-clipboard icon"></span>
                </div>
                <div class="feature-content">
                  <h4>Misión</h4>
                  <p>Ser la papelería con mayor reconocimiento por nuestros clientes al ofrecer servicios y
                    productos innovadores y vanguardistas del sector promoviendo siempre un excelente servicio y así asegurar la estabilidad de la empresa a largo plazo.</p>
                </div>
              </div>
            </div>
            <div class="feature-box">
              <div class="clearfix">
                <div class="iconset">
                  <span class="fa-solid fa-star icon"></span>
                </div>
                <div class="feature-content">
                  <h4>Visión</h4>
                  <p>Mantener mejora continua para satisfacer las necesidades de nuestros clientes a través de nuestro excelente servicio y calidad de nuestros productos.</p>
                </div>
              </div>
            </div>
            <div class="feature-box">
              <div class="clearfix">
                <div class="iconset">
                  <span class="fa-solid fa-heart icon">
                </div>
                <div class="feature-content">
                  <h4>Nuestros clientes</h4>
                  <p>Porque soy una persona con experiencia, de confianza y centrada en sus objetivos, tengo el privilegio de trabajar con una gran cantidad de clientes fantásticos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="aboutus-banner">
            <img src="img/blog/about.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--================Blog Area =================-->
  <section class="bg-light py-5 py-xl-6">
    <div class="container mb-5 mb-md-6">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
          <h2 class="mb-4 display-5">Valores</h2>
          <p class="text-secondary mb-4 mb-md-5">Buscamos dar a conocer nuestros valores y atención personalizada, al crear un vínculo cliente- vendedor para así ser reconocidos.</p>
          <hr class="w-50 mx-auto mb-0 text-secondary">
        </div>
      </div>
    </div>

    <div class="container overflow-hidden">
      <div class="row gy-5 gy-md-6 gy-lg-0">
        <div class="col-6 col-lg-3">
          <div class="text-center">
            <div class="d-flex align-items-center justify-content-center bg-primary rounded-circle w-100px h-100px mb-3 mx-auto">
              <i class="fa-solid fa-face-smile icon1"></i>
            </div>
            <h5 class="display-6 fw-bold m-1">Honestidad</h5>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="text-center">
            <div class="d-flex align-items-center justify-content-center bg-primary rounded-circle w-100px h-100px mb-3 mx-auto">
              <i class="fa-solid fa-shield-halved icon1"></i>
            </div>
            <h5 class="display-6 fw-bold m-1">Respeto</h5>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="text-center">
            <div class="d-flex align-items-center justify-content-center bg-primary rounded-circle w-100px h-100px mb-3 mx-auto">
              <i class="fa-solid fa-medal icon1"></i>
            </div>
            <h5 class="display-6 fw-bold m-1">Calidad</h5>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="text-center">
            <div class="d-flex align-items-center justify-content-center bg-primary rounded-circle w-100px h-100px mb-3 mx-auto">
              <i class="fa-solid fa-thumbs-up icon1"></i>
            </div>
            <h5 class="display-6 fw-bold m-1">Efectividad</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--================ start footer Area  =================-->
  <footer class="bg-primary text-center text-lg-start text-white">
    <!-- Grid container -->
    <div class="container p-4">
      <!--Grid row-->
      <div class="row my-4">
        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4"><strong>Sobre nosotros</strong></h5>
          <div class="shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style="width: 150px; height: 150px;">
            <p>Este proyecto nace al querer cumplir un gran sueño, el cual es ser una papelería útil</p>
            <p></p>
          </div>
          <div class="mt-4">
            <!-- Facebook -->
            <a type="button" class="btn btn-floating btn-success btn-lg"><i class="fab fa-facebook-f"></i></a>
            <!-- Twitter -->
            <a type="button" class="btn btn-floating btn-success btn-lg"><i class="fab fa-twitter"></i></a>
            <!-- Google + -->
            <a type="button" class="btn btn-floating btn-success btn-lg"><i class="fab fa-google-plus-g"></i></a>
            <!-- Linkedin -->
          </div>
        </div>
        <!--Grid column-->
        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4"><strong>Acceso Rápido</strong></h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="index.php" class="text-white"><i class="fa-solid fa-circle-arrow-right"></i> Inicio</a>
            </li>
            <li class="mb-2">
              <a href="category.php" class="text-white"><i class="fa-solid fa-circle-arrow-right"></i> Categorias</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->
        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4"><strong>Información</strong></h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="blog.php" class="text-white"><i class="fa-solid fa-circle-arrow-right"></i> Sobre nosotros</a>
            </li>
            <li class="mb-2">
              <a href="contact.php" class="text-white"><i class="fa-solid fa-circle-arrow-right"></i> Contacto</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->
        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4"><strong>Mantente en contacto</strong>
          </h5>
          <ul class="list-unstyled">
            <li>
              <p><i class="fas fa-map-marker-alt pe-2"></i> Calle Toluca #507 Col. Morelos</p>
            </li>
            <li>
              <p><i class="fas fa-phone pe-2"></i> + 01 234 567 89</p>
            </li>
            <li>
              <p><i class="fas fa-envelope pe-2 mb-0"></i> contact@example.com</p>
            </li>
          </ul>
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </div>
    <!-- Grid container -->
    <!-- Copyright -->
    <div class=" p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      <p class="footer-text m-0 col-lg-12 col-md-12"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
        Copyright &copy;<script>
          document.write(new Date().getFullYear());
        </script> Papelería D Mika | Todos los derechos reservados
        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
      </p>
    </div>
    <!-- Copyright -->
  </footer>
  <!--================ End footer Area  =================-->
  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="js/jquery-3.2.1.min.js"></script>
  <script src="js/popper.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/stellar.js"></script>
  <script src="vendors/lightbox/simpleLightbox.min.js"></script>
  <script src="vendors/nice-select/js/jquery.nice-select.min.js"></script>
  <script src="vendors/isotope/imagesloaded.pkgd.min.js"></script>
  <script src="vendors/isotope/isotope-min.js"></script>
  <script src="vendors/owl-carousel/owl.carousel.min.js"></script>
  <script src="vendors/jquery-ui/jquery-ui.js"></script>
  <script src="js/jquery.ajaxchimp.min.js"></script>
  <script src="js/mail-script.js"></script>
  <script src="vendors/jquery-ui/jquery-ui.js"></script>
  <script src="js/theme.js"></script>
</body>

</html>