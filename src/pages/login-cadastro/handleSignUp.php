<?php
session_start();
include_once '../../database/connection.php';
include_once '../../database/utils.php';

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

try {
    $smt = $connection->prepare("
    SELECT email
    FROM user 
    WHERE email = :email");
    $smt->execute([':email' => $email]);
    $user = $smt->fetch();

    if (!$user) {
        $insertQuery = $connection->prepare("
        INSERT INTO User VALUES
        (NULL,:name,:email,:password,1)");
        $insertQuery->execute([
            ':name' => $name,
            ':email' => $email,
            ':password' => $password,
        ]);
        redirectURL("../cadastro-concluido/index.html");
    } else {
        phpAlert("Email já cadastrado", "./login-cadastro.html");
    }
} catch (Exception $ex) {
    throw $ex;
}
