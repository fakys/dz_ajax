<?php
$user = 'root';
$pass = '';
$dsn = "mysql:host=localhost;dbname=dz;charset=utf8";

$db = new PDO($dsn, $user, $pass);