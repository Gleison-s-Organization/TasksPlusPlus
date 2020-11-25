<?php

$server = "localhost";
$user = "root";
// $password = "My5Ql@2020";
$password = '';

try {
    $connection = new PDO("mysql:host=$server;dbname=tasks", $user, $password);
    $connection->exec('set names utf-8');
} catch (PDOException $e) {
    echo "Erro do PDO" . $e->getMessage();
} catch (Exception $e) {
    echo "Erro:" . $e->getMessage();
}
