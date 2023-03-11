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