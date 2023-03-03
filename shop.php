<?php
session_start();
if (isset($_GET['logout'])) {
  session_destroy();
  header("Location: login.php");
}
include 'global/serverconfiguration.php';
include 'global/dbconnection.php';
include 'carrito.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
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
                    <a href="shop.php" class="nav-link">Tienda</a>
                    <!-- <ul class="dropdown-menu">
                      <li class="nav-item">
                        <a class="nav-link" href="shop.php">Categorias</a>
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
          <li>Tienda</li>
        </ul>
      </div>
    </div>
  </div>
  <!--================End Home Banner Area =================-->
  <!--================Category Product Area =================-->
  <section class="cat_product_area section_gap">
    <div class="container">
      <div class="row justify-content-center">
        <nav class=" navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="col-lg-12">
              <div class="left_sidebar_area">
                <form action="" method="post" class="categoriaid">
                  <h3 style="text-align: center;">Categorias</h3>
                  <ul class="navbar-nav mr-auto d-flex">
                    <li>
                      <button type="submit" name="filter" value="" class="btn1">Todos</button>
                    </li>
                    <li>
                      <button type="submit" name="filter" value="Cuadernos y Libretas" class="btn1">Cuadernos y Libretas</button>
                    </li>
                    <li>
                      <button type="submit" name="filter" value="Manualidades" class="btn1">Manualidades</button>
                    </li>
                    <li>
                      <button type="submit" name="filter" value="Artículos para Dibujo" class="btn1">Artículos para Dibujo</button>
                    </li>
                    <li>
                      <button type="submit" name="filter" value="Artículos de Oficina" class="btn1">Artículos de Oficina</button>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </nav>  
        <div class="col-lg-12">
          <?php
          // Check if filter is set, otherwise set it to an empty string
          $filter = isset($_POST['filter']) ? $_POST['filter'] : '';

          // Prepare default query to select all products
          // Prepare default query to select all products
          $query = "SELECT * FROM productos";

          // If a filter is selected, adjust the query accordingly
          switch ($filter) {
            case 'Cuadernos y Libretas':
              $query = "SELECT * FROM productos WHERE categoriaID = 1";
              break;
            case 'Manualidades':
              $query = "SELECT * FROM productos WHERE categoriaID = 2";
              break;
            case 'Artículos para Dibujo':
              $query = "SELECT * FROM productos WHERE categoriaID = 3";
              break;
            case 'Artículos de Oficina':
              $query = "SELECT * FROM productos WHERE categoriaID = 4";
              break;
            default:
              break;
          }
          $ProductoQuery = $pdo->prepare($query);
          $ProductoQuery->execute();
          $ListProducto = $ProductoQuery->fetchAll(PDO::FETCH_ASSOC);
          ?>
          <?php if (isset($mensaje) && $mensaje != "") { ?>
            <div class="alert alert-success text-uppercase text-center">
              <?php echo $mensaje; ?>
              <br>
              <a href="cart.php" class="badge badge-success">VER CARRITO</a>
            </div>
          <?php } ?>
          <div class="row">
            <div class="latest_product_inner">
              <div class="row">
                <?php foreach ($ListProducto as $producto) : ?>
                  <div class="col-lg-4 col-md-6">
                    <div class="single-product">
                      <div class="product-img">
                        <img class="card-img" src="<?php echo 'admin/assets/images/' . $producto['productoImg']; ?>" alt="...">
                        <div class="p_icon">
                          <?php if ($producto['productoQTY'] > 0) : ?>
                            <form action="" method="POST" class="exclude">
                              <input type="hidden" name="id" value="<?php echo openssl_encrypt($producto['id'], COD, KEY); ?>">
                              <input type="hidden" name="nombre" value="<?php echo openssl_encrypt($producto['productoNombre'], COD, KEY); ?>">
                              <input type="hidden" name="precio" value="<?php echo openssl_encrypt($producto['productoPrecio'], COD, KEY); ?>">
                              <input type="hidden" name="imagen" value="<?php echo openssl_encrypt($producto['productoImg'], COD, KEY); ?>">
                              <input type="hidden" name="cantidad" value="<?php echo openssl_encrypt(1, COD, KEY); ?>">
                              <button type="submit" name="Accion" value="Agregar" class="btn btn-success">
                                <i class="ti-shopping-cart fa-1x"></i>
                              </button>
                              <button type="button" class="btn btn-info" data-toggle="modal" data-target="#productInfoModal<?php echo $producto['id']; ?>">
                                <i class="fa-solid fa-circle-info fa-1x"></i>
                              </button>
                            </form>
                          <?php else : ?>
                            <button type="button" class="btnCancelar" disabled>
                              Agotado
                            </button>
                            <button type="button" class="btn btn-info" data-toggle="modal" data-target="#productInfoModal<?php echo $producto['id']; ?>">
                              <i class="fa-solid fa-circle-info fa-1x"></i>
                            </button>
                          <?php endif; ?>
                        </div>
                      </div>
                      <div class="product-btm text-center">
                        <h4 class="reset-anchor">
                          <?php echo $producto['productoNombre']; ?>
                        </h4>
                        <span>$
                          <?php echo $producto['productoPrecio']; ?>
                        </span>
                        <div>
                          <h4 class="reset-anchor"> UNIDADES</h4> <br>
                          <div class="d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-boxes-stacked fa-2x mr-2"></i>
                            <div class="mr-2">
                              <?php if ($producto['productoQTY'] <= 0) : ?>
                                <span class="badge badge-danger">Agotado</span>
                              <?php else : ?>
                                <span class="badge badge-success">
                                  <?php echo $producto['productoQTY']; ?>
                                </span>
                              <?php endif; ?>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Modal -->
                  <div class="modal fade" id="productInfoModal<?php echo $producto['id']; ?>" tabindex="-1" role="dialog" aria-labelledby="productInfoModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <div class="modal-header bg-success">
                          <h5 class="modal-title" id="productInfoModalLabel"><?php echo $producto['productoNombre']; ?></h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div class="row">
                            <div class="col-6">
                              <img class="img-fluid" src="<?php echo 'admin/assets/images/' . $producto['productoImg']; ?>" alt="...">
                            </div>
                            <div class="col-6">
                              <p><?php echo $producto['productoDetalles']; ?></p>
                              <p>Precio: $<?php echo $producto['productoPrecio']; ?></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                <?php endforeach; ?>
              </div>
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
              <a href="shop.php" class="text-white"><i class="fa-solid fa-circle-arrow-right"></i> Categorias</a>
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