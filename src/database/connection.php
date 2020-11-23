<?php

$server = "localhost";
$user = "root";
$password = "My5Ql@2020";

try {
    $connection = new PDO("mysql:host=$server;dbname=task", $user, $password);
    $connection->exec('set names utf-8');
} catch (PDOException $e) {
    echo "Erro do PDO" . $e->getMessage();
} catch (Exception $e) {
    echo "Erro:" . $e->getMessage();
}