<?php
$sql = '';
if(count($keresUgyfel) > 1){
    if(is_int(intval($keresUgyfel[1]))){ 
        $sql = 'DELETE FROM `ugyfel` WHERE `azon`' . $keresUgyfel;
    }else{
        http_response_code(404);
        echo 'Nem, létező ügyfél';
    }
}
require_once './database.php';
if($result = $connection->query($sql)){
    http_response_code(201);
    echo 'Sikeres lett törölve';
}else{
    http_response_code(404);
    echo 'Nem lett sikeresen törölve';
}