<?php
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    $keresUgyfel = explode('/', $_SERVER['QUERY_STRING']);
    if($keresUgyfel[0] === "ugyfelkarban"){
        require_once 'ugyfelbackend/index.php';
    }
    else if($keresUgyfel[0] === "befiz"){
        require_once 'befizbackend/index.php';
    }
    else{
        http_response_code(405);
        echo"Nincs ilyen API";
    }