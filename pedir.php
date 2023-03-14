<?php
// Start session if it has not already been started
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// Include necessary files
include 'global/serverconfiguration.php';
include 'global/dbconnection.php';
include 'carrito.php';

if($_POST){
$aux = explode("/",$_POST["help"]);
array_pop($aux);
$IDCliente=$_SESSION['user'];
foreach($_SESSION['CARRITO'] as $indice=>$producto){
$cantidad = explode("-", $aux[$indice]);
$_SESSION["CARRITO"][$indice]["CANTIDAD"] = $cantidad[1];
}

$total=0;
$IDusuario=$_SESSION['user'];
foreach($_SESSION['CARRITO'] as $indice=>$producto){
$total=$total+($producto['PRECIO']*$producto['CANTIDAD']);
}
$CreateOrderQuery=$pdo->prepare("INSERT INTO pedido (pedidoFecha, pagoTotal, estadoID, clienteID)
VALUES (:IDcliente, NOW(), :Total, 1);");
$CreateOrderQuery->bindParam(":IDcliente", $IDCliente);
$CreateOrderQuery->bindParam(":Total", $total);
$CreateOrderQuery->execute();

$idPedido=$pdo->lastInsertId();
foreach($_SESSION['CARRITO'] as $indice=>$producto){
$InsertProductsQuery=$pdo->prepare("INSERT INTO pedidodetalles (productoQTY, precioxunidad, productoID, pedidoID)
VALUES (:CANTIDAD, :PRECIOUNITARIO, :IDPRODUCTO, :IDPEDIDO);");
$InsertProductsQuery->bindParam(":CANTIDAD",$producto['CANTIDAD']);
$InsertProductsQuery->bindParam(":PRECIOUNITARIO",$producto['PRECIO']);
$InsertProductsQuery->bindParam(":IDPRODUCTO",$producto['ID']);
$InsertProductsQuery->bindParam(":IDPEDIDO",$idPedido);
$InsertProductsQuery->execute();
$Unidades = $producto['CANTIDAD'];
$ID = $producto['ID'];
$ProductoQuery = $pdo->prepare("SELECT productoQTY FROM productos WHERE id= '$ID';");
$ProductoQuery->execute();
$ListProducto = $ProductoQuery->fetch(PDO::FETCH_ASSOC);
$unidadesexisten = $ListProducto['productoQTY'];
$existencia = $unidadesexisten - $Unidades;
$ModifyQuery = $pdo->prepare("UPDATE productos SET productoQTY=:QTYproductos WHERE id='$ID'; ");
$ModifyQuery->bindParam(':QTYproductos', $existencia);
$ModifyQuery->execute();


}
unset($_SESSION['CARRITO']);//once we finish inserting the order into the database then we can erase the information from carrito var session
//after this code is done we direct our client to confirmation, because this page just contais the logic, no HTML code here
//all this code is executed in a matter seconds
//so once the order is done on the backend we have to redirect to our client to the actual orders so he can make sure his order was placed correctly
header("Location: checkout.php");
//write a new codittion in case $CreateOrderQuery->execute() throws an error and
//another page in case $InsertProductsQuery->execute() throws another error
//in both cases redirect your client to another website/or cart page so he tries again
}?>