<?php
require 'db.php';
/**
 * @var mysqli $db
 */
if($_POST){
    $title =$_POST['title'];
    $content =$_POST['text'];
    $db->query("INSERT INTO posts(title, content) VALUES ('$title', '$content')");
}