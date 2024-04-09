<?php
switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
        require_once 'backendbefiz/getugyfel.php';
        break;
    case 'POST':
        require_once 'backendbefiz/postugyfel.php';
        break;    
}