<?php
switch ($_SERVER["REQUEST_METHOD"]){
    case "GET":
        require_once "getugyfel.php";
        break;
    case "POST":
        require_once "postugyfel.php";
        break;
    case "DELETE":
        require_once "deleteugyfel.php";
        break;
    case "UPGRATE":
        require_once "putugyfel.php";
        break;
}