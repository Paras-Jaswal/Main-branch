<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER['REQUEST_METHOD '] === 'OPTIONS') {
    exit(0);
}

// Your existing PHP code
include 'connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $firstName = $data['firstName'];
    $lastName = $data['lastName'];
    $email = $data['email'];
    $telNumber = $data['telNumber'];
    $describesInvestor = $data['describesInvestor'];
    $password = password_hash($data['password'], PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO users (FirstName, LastName, Email, TelNumber, describes_investor, Password) VALUES (:firstName, :lastName, :email, :telNumber, :describesInvestor, :password)");
    $stmt->bindParam(':firstName', $firstName);
    $stmt->bindParam(':lastName', $lastName);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':telNumber', $telNumber);
    $stmt->bindParam(':describesInvestor', $describesInvestor);
    $stmt->bindParam(':password', $password);

    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'User registered successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Registration failed']);
    }
}
?>
