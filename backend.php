<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "caronas_db";

// Cria conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica conexão
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Verifica a ação
if (isset($_POST['action'])) {
    $action = $_POST['action'];

    if ($action == 'create_passageiro') {
        $nome = $_POST['nome'];
        $cpf = $_POST['cpf'];
        $email = $_POST['email'];
        $telefone = $_POST['telefone'];

        $sql = "INSERT INTO passageiros (nome, cpf, email, telefone) VALUES ('$nome', '$cpf', '$email', '$telefone')";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["status" => "success", "message" => "Passageiro cadastrado com sucesso!"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Erro ao cadastrar passageiro: " . $conn->error]);
        }
    }

    if ($action == 'create_motorista') {
        $nome = $_POST['nome'];
        $cpf = $_POST['cpf'];
        $veiculo = $_POST['veiculo'];
        $placa = $_POST['placa'];

        $sql = "INSERT INTO motoristas (nome, cpf, veiculo, placa) VALUES ('$nome', '$cpf', '$veiculo', '$placa')";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["status" => "success", "message" => "Motorista cadastrado com sucesso!"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Erro ao cadastrar motorista: " . $conn->error]);
        }
    }

    if ($action == 'get_viagens') {
        $sql = "SELECT * FROM viagens";
        $result = $conn->query($sql);

        $viagens = [];
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $viagens[] = $row;
            }
        }

        echo json_encode($viagens);
    }

    if ($action == 'delete_viagem') {
        $id = $_POST['id'];
        $sql = "DELETE FROM viagens WHERE id = $id";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["status" => "success", "message" => "Viagem excluída com sucesso!"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Erro ao excluir viagem: " . $conn->error]);
        }
    }

    // Lógica de edição pode ser adicionada aqui
} else {
    echo "No action specified.";
}

$conn->close();
?>
