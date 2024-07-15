<?php
require('connection.php');

// Ensure form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $date = $_POST['date']; // This might be empty if not provided

    try {
        //Prepare SQL statement to insert data
        $stmt = $conn->prepare("INSERT INTO wp_users (name, email, password, date) VALUES (:name, :email, :password, :date)");
        
        // Bind parameters with colon (:)
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $password);
        $stmt->bindParam(':date', $date);

        // Execute the query
        $stmt->execute();

        // Provide success response to JavaScript
        echo json_encode(array("status" => "success", "message" => "Data submitted successfully!"));
    } catch(PDOException $e) {
        // Provide error response to JavaScript
        echo json_encode(array("status" => "error", "message" => "Error: " . $e->getMessage()));
    }
} else {
    // Handle invalid form submission
    echo json_encode(array("status" => "error", "message" => "Invalid request"));
}
?>
