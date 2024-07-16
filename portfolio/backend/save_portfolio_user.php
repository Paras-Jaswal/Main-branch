<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// WordPress environment ko include karna (agar zarurat ho)
require_once('wp-load.php');
global $wpdb;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    // Current logged-in user ID ko retrieve karna
    $current_user_id = get_current_user_id();

    // Form data ko retrieve karna
    $portfolio_name = sanitize_text_field($data['portfolio_name']);
    $full_name = sanitize_text_field($data['full_name']);
    $strategy_goal = isset($data['strategy_goal']) ? sanitize_text_field($data['strategy_goal']) : '';

    // Data ko custom table mein insert karna
    $table_name = $wpdb->prefix . 'user_portfolios';
    $result = $wpdb->insert(
        $table_name,
        array(
            'user_id' => $current_user_id,
            'portfolio_name' => $portfolio_name,
            'full_name' => $full_name,
            'strategy_goal' => $strategy_goal
        )
    );

    // Response send karna
    if ($result) {
        echo json_encode(['status' => 'success', 'message' => 'Portfolio saved successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to save portfolio']);
    }
}
?>
