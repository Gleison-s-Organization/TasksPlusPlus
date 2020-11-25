<?php

include_once('./connection.php');
$subject = $_POST['subject'];

try {
    $smt = $connection->prepare(
        "INSERT INTO subject (subject) 
         VALUES (:subject)"
    );
    $smt->execute([
        ':subject' => $subject,
    ]);
    echo "Dado incluído com sucesso.";
    $connection = null;
} catch (PDOException $e) {
    echo "Erro ao gravar" . $e->getMessage();
} catch (Exception $e) {
    echo "Erro:" . $e->getMessage();
}
