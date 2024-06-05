<?php
$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "caronas_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$result = $conn->query("SELECT * FROM reg_viagens");
$viagens = [];
while($row = $result->fetch_assoc()) {
  $viagens[] = $row;
}

header('Content-Type: application/json');
echo json_encode($viagens);

$conn->close();
?>
