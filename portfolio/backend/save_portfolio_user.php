<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

include 'connection.php';
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    print_r($_SESSION);

    if (!isset($_SESSION['user_id'])) {
        echo json_encode(['status' => 'error', 'message' => 'User not logged in']);
        exit;
    }

    $current_user_id = $_SESSION['user_id'];
    $data = json_decode(file_get_contents('php://input'), true);

    // Sanitize and retrieve form data
    $portfolio_name = filter_var($data['portfolio_name'], FILTER_SANITIZE_STRING);
    $full_name = filter_var($data['full_name'], FILTER_SANITIZE_STRING);
    $strategy_goal = isset($data['strategy_goal']) ? filter_var($data['strategy_goal'], FILTER_SANITIZE_STRING) : '';

    // Insert data into custom table
    $query = "INSERT INTO user_portfolios (user_id, portfolio_name, full_name, strategy_goal) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("isss", $current_user_id, $portfolio_name, $full_name, $strategy_goal);
    
    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'Portfolio saved successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to save portfolio']);
    }

    $stmt->close();
    $conn->close();
}
?>
