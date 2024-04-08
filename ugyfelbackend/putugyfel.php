<?php
$putadat = fopen("php://input", "r");
$raw_adat = '';
while($chunk = fread($putadat, 1024))
    $raw_adat .= $chunk;
fclose($putadat);
$adatJSON = json_decode($raw_adat);
$azon = $_POST("Azon");
$nev = $_POST("Név");
$szulev = $_POST("szulev");
$irszam = $_POST("irszam");
$orsz = $_POST("orsz");
require_once "./database.php";
$sql = "UPDATE `ugyfel` SET `nev`='?',`szulev`='?',`irszam`='?',`orsz`='?' WHERE `azon`='?'";
$stml = $connection->prepare($sql);
$stml -> bind_Param("siisi", $nev, $szulev, $irszam, $orsz, $azon);
if($stml->execute()){
    http_response_code(201);
    echo "Sikeresen lett modósítva";
}else{
    http_response_code(404);
    echo 'Sikertelen lett a modósítás';
}