<?php
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

    $keresUgyfel = explode("/", $_SERVER["QUERY_STRING"]);
    if($keresUgyfel[0] == "ugyfelkarban"){
        require_once "ugyfelbackend/index.php";
    }else{
        http_response_code(404);
        echo"Nincs ilyen API";
    }