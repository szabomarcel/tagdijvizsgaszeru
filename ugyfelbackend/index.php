<?php
switch ($_SERVER['REQUEST_METHOD']){
    case 'GET':
        require_once 'ugyfelbackend/getugyfel.php';
        break;
    case 'POST':
        require_once 'ugyfelbackend/postugyfel.php';
        break;
    case 'DELETE':
        require_once 'ugyfelbackend/deleteugyfel.php';
        break;
    case 'UPGRATE':
        require_once 'ugyfelbackend/putugyfel.php';
        break;
}