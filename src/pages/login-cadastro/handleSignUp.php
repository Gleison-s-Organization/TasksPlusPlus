<?php
session_start();
include_once '../../database/connection.php';

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

// echo "Nome: {$name} E-mail: {$email} Senha: {$password}";

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
            ':email' => $email,
            ':password' => $password,
        ]);
        echo "Usuário criado com sucesso!";
    } else {
        echo "<h1>Email já cadastrado</h1>";
        echo "<a href='./login-cadastro.html'>Voltar</a>";
    }
} catch (\Throwable $th) {
    throw $th;
}
