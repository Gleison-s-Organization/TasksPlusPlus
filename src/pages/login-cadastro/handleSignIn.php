<?php
session_start();
include_once '../../database/connection.php';
include_once '../../database/utils.php';

$email = $_POST['email'];
$password = $_POST['password'];

print($email);
print($password);

try {
    $hasEmailQuery = $connection->prepare("
    SELECT email
    FROM user 
    WHERE email = :email");
    $hasEmailQuery->execute([':email' => $email]);
    $userEmail = $hasEmailQuery->fetch();

    $hasPasswordQuery = $connection->prepare("
    SELECT password
    FROM user 
    WHERE email = :email and password = :password");
    $hasPasswordQuery->execute([
        ':email' => $email,
        ':password' => $password
    ]);
    $userPassword = $hasPasswordQuery->fetch();

    if (!$userEmail || !$userPassword) {
        unset($_SESSION['email']);
        unset($_SESSION['password']);
        echo "<h1>Email ou senha incorretos</h1>";
        echo "<a href='./login-cadastro.html'>Voltar</a>";
    } else {
        $_SESSION['email'] = $email;
        $_SESSION['password'] = $password;
        redirectURL('../home/home.php');
    }
} catch (\Throwable $th) {
    throw $th;
}
