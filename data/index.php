<?php

require 'AltoRouter.php';

$router = new AltoRouter();
$router->setBasePath('/data');

$router->map('GET','/',  function() {
    echo 'Hallo World!';
} , 'plan2');
$router->map('GET','/[*:wc]/[*:id]',  function($wc,$id) {
    $res = $wc;
    $uuid = $id;
    $url = "https://sandbox.mainzed.org/squirrels/pubby/".$res."/".$uuid;
    header("HTTP/1.1 301 Moved Permanently"); header("Location: ".$url); exit;
} , 'wd');
$match = $router->match();

if( $match && is_callable( $match['target'] ) ) {
    call_user_func_array( $match['target'], $match['params'] );
} else {
    header( $_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
}
