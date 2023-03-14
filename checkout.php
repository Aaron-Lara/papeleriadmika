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
            <div class="row w-100">
              <div class="col-lg-7 pr-0">
                <ul class="nav navbar-nav center_nav pull-right">
                  <li class="nav-item">
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
          <li>Pagar</li>
        </ul>
      </div>
    </div>
  </div>
  <h3 class="tittle-w3l">Pago</h3>

  <!--================End Home Banner Area =================-->

  <!--================Checkout Area =================-->

  <?php
  $QueryPedidos = $pdo->prepare("SELECT id, pedidoFecha, pagoTotal, clienteID FROM pedidos
    Where clienteID = :id ORDER BY pedidoFecha DESC");
  $QueryPedidos->bindParam(':id', $_SESSION['user']);
  $QueryPedidos->execute();
  $PedidosLista = $QueryPedidos->fetchAll(PDO::FETCH_ASSOC);
  ?>
  <section class="checkout_area section_gap">
    <?php
    foreach ($PedidosLista as $cadpedido) {
    ?>
      <div class="container">
        <div class="billing_details">
          <div class="row">
            <div class="col-lg-6">
              <div class="order_box">
                <h2>INFORMACIÓN DE TU PEDIDO</h2>
                <ul class="list list_2">
                  <li>
                    <p>Número de Pedido</p><span>:
                      <?php echo intval($cadpedido['id']); ?>
                    </span>
                  </li>
                </ul>
                <ul class="list list_2">
                  <li>
                    <p>Fecha del Pedido</p><span>:
                      <?php echo $cadpedido['pedidoFecha']; ?>
                    </span>
                  </li>
                  <li>
                    <p>Total</p><span>:
                      <?php
                      $total = $cadpedido['pagoTotal'];
                      if (is_array($total)) {
                        $total = $total[0]; // assuming the total is stored in the first element of the array
                      }
                      echo $total;
                      ?>
                    </span>
                  </li>
                </ul>
              </div>
              <div class="">
                <span>Gracias por ordenar. Tu pedido ha sido recibido.</span>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="order_box">
                <h2>TU ORDEN</h2>
                <table class="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col" colspan="2">Producto</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <?php
                  $PedidosQuery = $pdo->prepare("SELECT id, pedidoFecha, clienteNombre, productoNombre,
                    productoQTY, productoPrecio, pagoTotal 
                      FROM pedidodetalles INNER JOIN pedidos USING (id) INNER JOIN productos USING 
                      (id) INNER JOIN cliente USING (id)
                      WHERE id = :id AND id = :id  ORDER BY pedidoFecha DESC;");
                  $PedidosQuery->bindParam(':id', $_SESSION['user']);
                  $PedidosQuery->bindParam(':id', $cadpedido['id']);
                  $PedidosQuery->execute();
                  $ListadoPedido = $PedidosQuery->fetchAll(PDO::FETCH_ASSOC);
                  foreach ($ListadoPedido as $dpedido) {
                  ?>
                    <tbody>
                      <tr>
                        <th colspan="2"><span>
                            <?php echo $dpedido['productoNombre']; ?>
                          </span></th>
                        <th>
                          <?php echo $dpedido['productoQTY']; ?>
                        </th>
                        <th> <span>$
                            <?php echo $dpedido['productoPrecio']; ?>
                          </span></th>
                      </tr>
                    </tbody>
                  <?php } ?>
                  <tfoot>
                    <tr>
                      <th scope="col" colspan="3"></th>
                      <th scope="col">Total :
                        <?php echo $cadpedido['pagoTotal']; ?>
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    <?php } ?>
  </section>
  <!--================End Checkout Area =================-->

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