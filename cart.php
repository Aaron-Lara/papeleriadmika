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
          <li>Carrito</li>
        </ul>
      </div>
    </div>
  </div>
  <h3 class="tittle-w3l">Carrito</h3>
  <!--================End Home Banner Area =================-->
  <!--================Cart Area =================-->
  <?php if (!empty($_SESSION['CARRITO'])) { ?>
    <section class="cart_area">
      <div class="container">
        <div class="cart_inner">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Producto</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Total</th>
                  <th scope="col">Ajustes</th>
                </tr>
              </thead>
              <tbody>
                <?php $total = 0; ?>
                <?php foreach ($_SESSION['CARRITO'] as $indice => $producto) { ?>
                  <tr>
                    <td>
                      <div class="media">
                        <div class="d-flex">
                          <img src="<?php echo 'admin/assets/images/' . $producto['IMAGEN'] ?>" alt="..." width="70" />
                        </div>
                        <div class="media-body">
                          <?php echo $producto['NOMBRE'] ?>
                        </div>
                      </div>
                    </td>
                    <td class="price-pr">
                      <p id="price">$ <?php echo $producto['PRECIO'] ?></p>
                    </td>
                    <td>
                      <div class="product_count" id="<?php echo $indice; ?>">
                        <input type="number" name="qty" id="quantity" maxlength="12" value="<?php echo $producto['CANTIDAD'] ?>" title="Quantity:" class="input-text qty" />
                      </div>
                    </td>
                    <td class="total-pr">
                      <p id="total">$ <?php echo number_format(intval($producto['PRECIO']) * intval($producto['CANTIDAD']), 2); ?></p>
                    </td>
                    <td>
                      <form action="" method="post">
                        <input type="hidden" name="id" id="id" value="<?php echo openssl_encrypt($producto['ID'], COD, KEY); ?>">
                        <button type="submit" class="btndanger btn-danger" name="Accion" value="Eliminar">Eliminar</button>
                      </form>
                    </td>
                  </tr>
                  <tr>
                    <?php
                    $total = $total + (floatval($producto['PRECIO']) * intval($producto['CANTIDAD'])); ?>
                  <?php } ?>
                  </tr>
                  <tr class="out_button_area">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
              </tbody>
            </table>
            <div class="col-lg-12 col-sm-12" style="border:2px solid; box-shadow: 0px 0px 15px 0px #d6d6d6;">
              <div class="card border-0 rounded-0 p-lg-4 bg-light">
                <div class="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h3 class="text-uppercase mb-4">Total del carrito</h3>
                    <h5 id="precioTotal">$<?php echo number_format($total, 2); ?></h5>
                  </div>
                  <?php
                  if (isset($_SESSION["user"])) {
                    echo '<form action="checkout.php" method="post">
            <input type="hidden" name="help" id="help" value="" />
            <div class="bg-light px-4 py-3">
              <a class="main_btn me-3" href="category.php"><i class="fas fa-long-arrow-alt-left me-2"></i> Continuar buscando</a>
              <button class="main_btn" type="submit" name="Accion" value="proceder" href="checkout.php">Proceder al pedido <i class="fas fa-long-arrow-alt-right ms-2"></i></button>
            </div>
          </form>
        ';
                  } else {
                    echo '<form action="login.php" method="post">
          <div class="bg-light px-4 py-3">
            <a class="main_btn me-3" href="category.php"><i class="fas fa-long-arrow-alt-left me-2"></i> Continuar buscando</a>
            <button class="main_btn" type="submit" name="Accion" value="proceder" href="checkout.php">Proceder al pedido <i class="fas fa-long-arrow-alt-right ms-2"></i></button>
          </div>
        </form>';
                  }
                  ?>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    <?php } else { ?>
      <div class="alert alert-success text-uppercase text-center">
        No hay productos en el carrito
      </div>

    <?php } ?>
    </section>
    <!--================End Cart Area =================-->

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
    <script>
      const quantities = document.querySelectorAll("#quantity");
      const prices = document.querySelectorAll("#total");

      document.addEventListener("DOMContentLoaded", () => {
        quantities.forEach(quantity => {
          quantity.value = 1;
          actualizarValue();
        });
      });

      quantities.forEach(quantity => {
        quantity.addEventListener("change", () => {
          //Poner precios dinamicos
          const price = quantity.parentElement.parentElement.parentElement.querySelector("#price");
          const total = quantity.parentElement.parentElement.parentElement.querySelector("#total");
          const id = quantity.parentElement.id;
          total.textContent = "$ " + (quantity.value) * (price.textContent.replace("$ ", "").replace(".00", "")) + ".00";

          //Intento de actualizar
          actualizarValue();
          actualizarTotal();
        })
      });

      function actualizarTotal() {
        let total = 0;
        const precioTotal = document.querySelector("#precioTotal");
        prices.forEach(price => {
          total += parseInt(price.textContent.replace("$ ", ""));
        });
        precioTotal.textContent = "$" + total + ".00";
      }

      function actualizarValue() {
        const help = document.querySelector("#help");
        help.value = "";
        document.querySelectorAll("#quantity").forEach(element => {
          const id = element.parentElement.id;
          help.value += id + "-" + element.value + "/";
        });
      }
    </script>

</body>

</html>