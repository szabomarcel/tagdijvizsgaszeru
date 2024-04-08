<?php
$sql = '';
if(count($keresUgyfel) > 1){
    if(is_int(intval($keresUgyfel[1]))){
        $sql = 'SELECT * FROM ugyfel WHERE azon=' .$keresUgyfel[1];
    }else{
        http_response_code(404);
        return json_encode(array("massage" => 'Nem létező ügyfél'));
    }
}else{
    $sql = 'SELECT * FROM ugyfel WHERE 1';
}
require_once './database.php';
$result = $connection->query($sql);
if($result -> num_rows > 0){
    $ugyfelkarbantartas = array();
    while($row = $result->fetch_assoc()){
        $ugyfelkarbantartas = $row;
    }
    http_response_code(200);
    echo json_encode($ugyfelkarbantartas);
}else{
    http_response_code(404);
    echo 'Nem létező ügyfél karbantartás.';
}