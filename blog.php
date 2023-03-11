<?php
session_start();
if (isset($_GET['logout'])) {
  session_destroy();
  header("Location: login.php");
}
?>
<?php
include_once 'header.php';
?>
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
<?php
include_once 'footer.php';
?>