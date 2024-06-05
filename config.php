<?php
$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "caronas_db";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Checar conexão
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
