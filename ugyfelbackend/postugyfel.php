<?php
    $nev = $_POST("nev");
    $szulev = $_POST("szulev");
    $irszam = $_POST("irszam");
    $orsz = $_POST("orsz");
    require_once "./database.php";
    $sql = "INSERT INTO `ugyfel`(`azon`, `nev`, `szulev`, `irszam`, `orsz`) VALUES (NULL,'?','?','?','?')";
    $stml = $connection->prepare($sql);
    $stml -> bind_Param("isiis", $azon, $nev, $szulev, $irszam, $orsz);
    if($stml->execute()){
        http_response_code(201);
        echo "Sikeresen hozzáadva";
    }else{
        http_response_code(404);
        echo 'Sikertelen hozzáadás';
    }