<?php
ob_start();
ini_set("display_errors", 1);
ini_set("display_startups__errors", 1);
error_reporting(E_ALL);
include 'skydash/global/ServerConfiguration.php';
include 'skydash/global/DbConnection.php';
include 'carrito.php';

if($_POST){
     $aux = explode("/",$_POST["help"]);
    array_pop($aux);
    $IDCliente=$_SESSION['session_idcliente'];
    foreach($_SESSION['CARRITO'] as $indice=>$producto){
       $cantidad = explode("-", $aux[$indice]);
        $_SESSION["CARRITO"][$indice]["CANTIDAD"] = $cantidad[1];
    }

    $total=0;
    $IDusuario=$_SESSION['session_idusuario'];
    foreach($_SESSION['CARRITO'] as $indice=>$producto){
        $total=$total+($producto['PRECIO']*$producto['CANTIDAD']);
    }
   $CreateOrderQuery=$pdo->prepare("INSERT INTO pedido (idcliente, fecha_pedido, total_pago, id_estado)
    VALUES (:IDcliente, NOW(), :Total, 1);");
    $CreateOrderQuery->bindParam(":IDcliente", $IDCliente);
    $CreateOrderQuery->bindParam(":Total", $total);
    $CreateOrderQuery->execute();
    
    $idPedido=$pdo->lastInsertId();
    foreach($_SESSION['CARRITO'] as $indice=>$producto){
        $InsertProductsQuery=$pdo->prepare("INSERT INTO papele71_pape.detallespedido (idproducto, cantidad_producto, id_pedido, precioxunidad)
        VALUES (:IDPRODUCTO, :CANTIDAD, :IDPEDIDO, :PRECIOUNITARIO);");
        $InsertProductsQuery->bindParam(":IDPRODUCTO",$producto['ID']);
        $InsertProductsQuery->bindParam(":CANTIDAD",$producto['CANTIDAD']);
        $InsertProductsQuery->bindParam(":IDPEDIDO",$idPedido);
        $InsertProductsQuery->bindParam(":PRECIOUNITARIO",$producto['PRECIO']);
        $InsertProductsQuery->execute();
        $Unidades = $producto['CANTIDAD'];
        $ID = $producto['ID'];
        $ProductoQuery = $pdo->prepare("SELECT unidadesproducto FROM productos WHERE idproducto= '$ID';");
        $ProductoQuery->execute();
        $ListProducto = $ProductoQuery->fetch(PDO::FETCH_ASSOC);
        $unidadesexisten = $ListProducto['unidadesproducto'];
        $existencia = $unidadesexisten - $Unidades;
        $ModifyQuery = $pdo->prepare("UPDATE productos SET unidadesproducto=:unidadesproducto WHERE idproducto='$ID'; ");
        $ModifyQuery->bindParam(':unidadesproducto', $existencia);
        $ModifyQuery->execute();
        
    
    }
    unset($_SESSION['CARRITO']);//once we finish inserting the order into the database then we can erase the information from carrito var session
    //after this code is done we direct our client to confirmation, because this page just contais the logic, no HTML code here 
    //all this code is executed in a matter seconds 
    //so once the order is done  on the backend we have  to redirect to our client to the actual orders so he can make sure his order was placed correctly 
    header("Location: checkout.php");
    //write a new codittion in case $CreateOrderQuery->execute() throws an error  and
    //another page in case $InsertProductsQuery->execute() throws another error 
    //in both cases redirect your client  to another website/or cart page so he tries again 
}?>