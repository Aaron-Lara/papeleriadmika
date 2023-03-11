<?php
session_start();
if (isset($_GET['logout'])) {
  session_destroy();
  header("Location: login.php");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <link rel="icon" href="img/favicon.png" type="image/png" />
  <script src="https://kit.fontawesome.com/7218e15624.js" crossorigin="anonymous"></script>
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
  <link rel="stylesheet" href="css/style2.css">
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
            <div class="row w-100">
              <div class="col-lg-7 pr-0">
                <ul class="nav navbar-nav center_nav pull-right">
                  <li class="nav-item active">
                    <a class="nav-link" href="index.php">Inicio</a>
                  </li>
                  <li class="nav-item">
                    <a href="shop.php" class="nav-link">Tienda</a>
                  </li>
                  <li class="nav-item">
                    <a href="blog.php" class="nav-link">Sobre nosotros</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contact.php">Contacto</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-5 pr-0">
                <ul class="nav navbar-nav navbar-right right_nav pull-right">
                  <?php
                  if (isset($_SESSION['user'])) {
                    $user = $_SESSION['user'];
                    echo '<div class="dropdown">';
                    echo '<a href="#" class="icons dropdown-toggle" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
                    echo '<i class="ti-user" aria-hidden="true"></i>';
                    echo '</a>';
                    echo '<div class="dropdown-menu" aria-labelledby="userDropdown">';
                    if (isset($user['profilePicture'])) {
                      echo '<img src="' . $user['profilePicture'] . '" alt="Profile Picture" class="dropdown-item">';
                    }
                    if (isset($user['clienteNombre'])) {
                      echo '<p class="dropdown-item"><strong>Nombre:</strong> ' . $user['clienteNombre'] . '</p>';
                    } elseif (isset($user['usuarioNombre'])) {
                      echo '<p class="dropdown-item"><strong>Nombre:</strong> ' . $user['usuarioNombre'] . '</p>';
                    }
                    if (isset($user['clienteEmail'])) {
                      echo '<p class="dropdown-item"><strong>Email:</strong> ' . $user['clienteEmail'] . '</p>';
                    } elseif (isset($user['usuarioEmail'])) {
                      echo '<p class="dropdown-item"><strong>Email:</strong> ' . $user['usuarioEmial'] . '</p>';
                    }
                    // Add more profile information as needed
                    echo '<a href="index.php?logout=1" class="dropdown-item"><i class="ti-power-off" aria-hidden="true"></i> Logout</a>';
                    echo '</div>';
                    echo '</div>';
                  } else {
                    echo '<a href="login.php" class="icons">';
                    echo '<i class="ti-user" aria-hidden="true"></i>';
                    echo '</a>';
                  }
                  ?>
                  <li class="nav-item">
                    <div class="d-flex">
                      <a href="cart.php" class="icons">
                        <i class="ti-shopping-cart"></i>
                      </a>
                    </div>
                  </li>
                  <li class="nav-item">
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
  <section class="home_banner_area mb-40">
    <div class="banner_inner d-flex align-items-center">
      <div class="container">
        <div class="banner_content row">
          <div class="col-lg-12">
            <p class="sub text-uppercase"><strong>La papelería que estabas buscando</strong> </p>
            <h3><span>GRAN</span> FUENTE <br />DE MATERIAL <span><BR>EDUCATIVO</span></h3>
            <a class="main_btn mt-40" href="#">Comprar ahora</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--================End Home Banner Area =================-->

  <!-- Start feature Area -->
  <section class="feature-area section_gap_bottom_custom">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <div class="single-feature">
            <a href="#" class="title">
              <i class="flaticon-money"></i>
              <h3>Reembolso garantizado</h3>
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="single-feature">
            <a href="#" class="title">
              <i class="flaticon-truck"></i>
              <h3>Entrega gratuita</h3>
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="single-feature">
            <a href="#" class="title">
              <i class="flaticon-support"></i>
              <h3>Siempre apoyando</h3>
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="single-feature">
            <a href="#" class="title">
              <i class="flaticon-blockchain"></i>
              <h3>Pago seguro</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End feature Area -->

  <!--================ Feature Product Area =================-->
  <section class="feature_product_area section_gap_bottom_custom">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="main_title">
            <h2><span>Productos Destacados</span></h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="single-product">
            <div class="product-img">
              <img class="img-fluid w-100" src="img/lapiz.jpg" alt="" />
              <div class="p_icon">
                <a href="#">
                  <i class="ti-eye"></i>
                </a>
                <a href="#">
                  <i class="ti-heart"></i>
                </a>
                <a href="#">
                  <i class="ti-shopping-cart"></i>
                </a>
              </div>
            </div>
            <div class="product-btm">
              <a href="#" class="d-block">
                <h4>LAPIZ</h4>
              </a>
              <div class="mt-3">
                <span class="mr-4">$25.00</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="single-product">
            <div class="product-img">
              <img class="img-fluid w-100" src="img/cuaderno.webp" alt="" />
              <div class="p_icon">
                <a href="#">
                  <i class="ti-eye"></i>
                </a>
                <a href="#">
                  <i class="ti-heart"></i>
                </a>
                <a href="#">
                  <i class="ti-shopping-cart"></i>
                </a>
              </div>
            </div>
            <div class="product-btm">
              <a href="#" class="d-block">
                <h4>Cuaderno</h4>
              </a>
              <div class="mt-3">
                <span class="mr-4">$25.00</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="single-product">
            <div class="product-img">
              <img class="img-fluid w-100" src="img/sacapuntas.jpg" alt="" />
              <div class="p_icon">
                <a href="#">
                  <i class="ti-eye"></i>
                </a>
                <a href="#">
                  <i class="ti-heart"></i>
                </a>
                <a href="#">
                  <i class="ti-shopping-cart"></i>
                </a>
              </div>
            </div>
            <div class="product-btm">
              <a href="#" class="d-block">
                <h4>Sacapuntas</h4>
              </a>
              <div class="mt-3">
                <span class="mr-4">$25.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--================ End Feature Product Area =================-->

  <!--================ Offer Area =================-->

  <!--================ End Offer Area =================-->

  <!--================ New Product Area =================-->
  <section class="feature_product_area section_gap_bottom_custom">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="main_title">
            <h2><span>Productos nuevos</span></h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="single-product">
            <div class="product-img">
              <img class="img-fluid w-100" src="img/Cartulina-bristol-blanca.jpeg" alt="" />
              <div class="p_icon">
                <a href="#">
                  <i class="ti-eye"></i>
                </a>
                <a href="#">
                  <i class="ti-heart"></i>
                </a>
                <a href="#">
                  <i class="ti-shopping-cart"></i>
                </a>
              </div>
            </div>
            <div class="product-btm">
              <a href="#" class="d-block">
                <h4>CARTULINA</h4>
              </a>
              <div class="mt-3">
                <span class="mr-4">$25.00</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="single-product">
            <div class="product-img">
              <img class="img-fluid w-100" src="img/tijeras.jpg" alt="" />
              <div class="p_icon">
                <a href="#">
                  <i class="ti-eye"></i>
                </a>
                <a href="#">
                  <i class="ti-heart"></i>
                </a>
                <a href="#">
                  <i class="ti-shopping-cart"></i>
                </a>
              </div>
            </div>
            <div class="product-btm">
              <a href="#" class="d-block">
                <h4>TIJERAS</h4>
              </a>
              <div class="mt-3">
                <span class="mr-4">$25.00</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="single-product">
            <div class="product-img">
              <img class="img-fluid w-100" src="img/pegamento.webp" alt="" />
              <div class="p_icon">
                <a href="#">
                  <i class="ti-eye"></i>
                </a>
                <a href="#">
                  <i class="ti-heart"></i>
                </a>
                <a href="#">
                  <i class="ti-shopping-cart"></i>
                </a>
              </div>
            </div>
            <div class="product-btm">
              <a href="#" class="d-block">
                <h4>PEGAMENTO</h4>
              </a>
              <div class="mt-3">
                <span class="mr-4">$25.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--================ start footer Area  =================-->
  <?php
  include_once 'footer.php';
  ?>
