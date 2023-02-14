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
            <div class="row w-100 mr-0">
              <div class="col-lg-7 pr-0">
                <ul class="nav navbar-nav center_nav pull-right">
                  <li class="nav-item">
                    <a class="nav-link" href="index.php">Inicio</a>
                  </li>
                  <li class="nav-item active">
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
                      echo "Bienvenido, " . $user['clienteNombre'] . "!";
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
          <li>Tienda</li>
        </ul>
      </div>
    </div>
  </div>
  <!--================End Home Banner Area =================-->
  <!--================Category Product Area =================-->
  <section class="cat_product_area section_gap">
    <div class="container">
      <div class="row flex-row-reverse">
        <div class="col-lg-9">

          <div class="latest_product_inner">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="single-product">
                  <div class="product-img">
                    <img class="card-img" src="img/product/inspired-product/i1.jpg" alt="" />
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
                      <h4>Latest men’s sneaker</h4>
                    </a>
                    <div class="mt-3">
                      <span class="mr-4">$25.00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-6">
                <div class="single-product">
                  <div class="product-img">
                    <img class="card-img" src="img/product/inspired-product/i2.jpg" alt="" />
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
                      <h4>Latest men’s sneaker</h4>
                    </a>
                    <div class="mt-3">
                      <span class="mr-4">$25.00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-6">
                <div class="single-product">
                  <div class="product-img">
                    <img class="card-img" src="img/product/inspired-product/i3.jpg" alt="" />
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
                      <h4>Latest men’s sneaker</h4>
                    </a>
                    <div class="mt-3">
                      <span class="mr-4">$25.00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-6">
                <div class="single-product">
                  <div class="product-img">
                    <img class="card-img" src="img/product/inspired-product/i4.jpg" alt="" />
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
                      <h4>Latest men’s sneaker</h4>
                    </a>
                    <div class="mt-3">
                      <span class="mr-4">$25.00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-6">
                <div class="single-product">
                  <div class="product-img">
                    <img class="card-img" src="img/product/inspired-product/i5.jpg" alt="" />
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
                      <h4>Latest men’s sneaker</h4>
                    </a>
                    <div class="mt-3">
                      <span class="mr-4">$25.00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-6">
                <div class="single-product">
                  <div class="product-img">
                    <img class="card-img" src="img/product/inspired-product/i6.jpg" alt="" />
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
                      <h4>Latest men’s sneaker</h4>
                    </a>
                    <div class="mt-3">
                      <span class="mr-4">$25.00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-6">
                <div class="single-product">
                  <div class="product-img">
                    <img class="card-img" src="img/product/inspired-product/i7.jpg" alt="" />
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
                      <h4>Latest men’s sneaker</h4>
                    </a>
                    <div class="mt-3">
                      <span class="mr-4">$25.00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-6">
                <div class="single-product">
                  <div class="product-img">
                    <img class="card-img" src="img/product/inspired-product/i8.jpg" alt="" />
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
                      <h4>Latest men’s sneaker</h4>
                    </a>
                    <div class="mt-3">
                      <span class="mr-4">$25.00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-6">
                <div class="single-product">
                  <div class="product-img">
                    <img class="card-img" src="img/product/inspired-product/i2.jpg" alt="" />
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="left_sidebar_area">
            <aside class="left_widgets p_filter_widgets">
              <div class="l_w_title">
                <h3>Categorias</h3>
              </div>
              <div class="widgets_inner">
                <ul class="list">
                  <li>
                    <a href="#">Cuadernos y Libretas</a>
                  </li>
                  <li>
                    <a href="#">Manualidades</a>
                  </li>
                  <li>
                    <a href="#">Artículos para Dibujo</a>
                  </li>
                  <li>
                    <a href="#">Artículos de Oficina</a>
                  </li>
                </ul>
              </div>
            </aside>

            <aside class="left_widgets p_filter_widgets">
              <div class="l_w_title">
                <h3>Filtro de color</h3>
              </div>
              <div class="widgets_inner">
                <ul class="list">
                  <li>
                    <a href="#">Negro</a>
                  </li>
                  <li>
                    <a href="#">Azul</a>
                  </li>
                  <li class="active">
                    <a href="#">Rojo</a>
                  </li>
                  <li>
                    <a href="#">Amarillo</a>
                  </li>
                  <li>
                    <a href="#">Verde</a>
                  </li>
                </ul>
              </div>
            </aside>

            <aside class="left_widgets p_filter_widgets">
              <div class="l_w_title">
                <h3>Filtrar precio</h3>
              </div>
              <div class="widgets_inner">
                <div class="range_item">
                  <div id="slider-range"></div>
                  <div class="">
                    <label for="amount">Price : </label>
                    <input type="text" id="amount" readonly />
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--================End Category Product Area =================-->

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
  <script src="js/jquery.ajaxchimp.min.js"></script>
  <script src="js/mail-script.js"></script>
  <script src="vendors/jquery-ui/jquery-ui.js"></script>
  <script src="vendors/counter-up/jquery.waypoints.min.js"></script>
  <script src="vendors/counter-up/jquery.counterup.js"></script>
  <script src="js/theme.js"></script>
</body>

</html>