<?php

$databaseName = "3579585_tasks";
$server = "fdb30.awardspace.net	";
$user = "3579585_tasks";
$password = '3579585_taskspl4spl4s';

$server = "localhost";
$user = "root";
$databaseName = "tasks";
$password = '';

try {
    $connection = new PDO("mysql:host=$server;dbname=$databaseName", $user, $password);
    $connection->exec('set names utf-8');
} catch (PDOException $e) {
    echo "Erro do PDO" . $e->getMessage();
} catch (Exception $e) {
    echo "Erro:" . $e->getMessage();
}
