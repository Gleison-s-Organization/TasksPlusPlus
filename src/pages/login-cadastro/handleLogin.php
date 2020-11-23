<?php
session_start();
include_once '../../database/connection.php';

$email = $_POST['email'];
$password = $_POST['password'];

// echo "E-mail: {$email} Senha: {$password}";

try {
    $smt = $connection->prepare("
    SELECT email
    FROM user 
    WHERE email = :email");
    $smt->execute([':email' => $email]);
    $user = $smt->fetch();
    
    if (!$user) {
        echo "Email disponível";
    }
    else{
        echo "Email já cadastrado";
    }


} catch (\Throwable $th) {
        //throw $th;
}
