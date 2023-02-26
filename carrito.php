<?php
// Start session if it has not already been started
if (session_status() == PHP_SESSION_NONE) {
  session_start();
}

// Include necessary files
include 'global/serverconfiguration.php';
include 'global/dbconnection.php';
?>
<?php
$ID = '';
$mensaje = '';
$NOMBRE = '';
$PRECIO = '';
$IMAGEN = '';
$CANTIDAD = '';

if (isset($_POST['Accion'])) {

  switch ($_POST['Accion']) {
    case 'Agregar':
      // Decrypt and check the ID
      if (isset($_POST['id']) && is_numeric(openssl_decrypt($_POST['id'], COD, KEY))) {
        $ID = openssl_decrypt($_POST['id'], COD, KEY);
        $mensaje = "Ok ID correcto" . $ID . "<br>";

      } else {
        $mensaje = "Upss... ID incorrecto" . "<br>";
      }

      // Decrypt and check the name
      if (isset($_POST['nombre']) && is_string(openssl_decrypt($_POST['nombre'], COD, KEY))) {
        $NOMBRE = openssl_decrypt($_POST['nombre'], COD, KEY);
        $mensaje = "Ok Nombre correcto" . $NOMBRE . "<br>";
      } else {
        $mensaje = "Upss... Nombre incorrecto" . "<br>";
      }

      // Decrypt and check the price
      if (isset($_POST['precio']) && is_numeric(openssl_decrypt($_POST['precio'], COD, KEY))) {
        $PRECIO = openssl_decrypt($_POST['precio'], COD, KEY);
        $mensaje = "Ok Precio correcto" . $PRECIO . "<br>";
      } else {
        $mensaje = "Upss... Precio incorrecto" . "<br>";
      }

      // Decrypt and check the image
      if (isset($_POST['imagen']) && is_string(openssl_decrypt($_POST['imagen'], COD, KEY))) {
        $IMAGEN = openssl_decrypt($_POST['imagen'], COD, KEY);
        $mensaje = "Ok Imagen correcto" . $IMAGEN . "<br>";
      } else {
        $mensaje = "Upss... Imagen incorrecto" . "<br>";
      }

      // Decrypt and check the quantity
      if (isset($_POST['cantidad']) && is_numeric(openssl_decrypt($_POST['cantidad'], COD, KEY))) {
        $CANTIDAD = openssl_decrypt($_POST['cantidad'], COD, KEY);
        $mensaje = "Ok Cantidad correcta" . $CANTIDAD . "<br>";
      } else {
        $mensaje = "Upss... Cantidad incorrecta" . "<br>";
      }

      if (!isset($_SESSION['CARRITO'])) {
        $producto = array(
          'ID' => $ID,
          'NOMBRE' => $NOMBRE,
          'PRECIO' => $PRECIO,
          'IMAGEN' => $IMAGEN,
          'CANTIDAD' => $CANTIDAD
        );
        $_SESSION['CARRITO'][0] = $producto;
        $mensaje = "Producto agregado al carrito";
      } else {
        $idProductos = array_column($_SESSION['CARRITO'], "ID");
        if (in_array($ID, $idProductos)) {
    
          $mensaje = "El producto ya se agregó anteriormente";
        } else {
          $NumeroProductos = count($_SESSION['CARRITO']);
          $producto = array(
            'ID' => $ID,
            'NOMBRE' => $NOMBRE,
            'PRECIO' => $PRECIO,
            'IMAGEN' => $IMAGEN,
            'CANTIDAD' => $CANTIDAD
          );
          $_SESSION['CARRITO'][$NumeroProductos] = $producto;
          $mensaje = "Producto agregado al carrito";
        }
      }
      break;
    case 'Eliminar':
      if (is_numeric(openssl_decrypt($_POST['id'], COD, KEY))) {
        $ID = openssl_decrypt($_POST['id'], COD, KEY);
        foreach ($_SESSION['CARRITO'] as $indice => $producto) {
          if ($producto['ID'] == $ID) {
            unset($_SESSION['CARRITO'][$indice]);
            echo "<script>alert('Elemento Borrado'...);</script>";
          }
        }
      } else {
        $mensaje = "Upss... ID incorrecto" . $ID . "<br>";
      }
      break;

    default:
      # code...
      break;
  }
}

