<?php
require_once "database_login_values.php";

// Table name
$table_name = "users_info";

// Fetch input values
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

// Check if email and password are provided
if (empty($email) || empty($password)) {
    echo "Please provide both email and password.";
    exit();
}

// SQL query to search for the email
$sql = "SELECT * FROM $table_name WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Email found, now check the password
    $row = $result->fetch_assoc();
    $hashed_password = $row['password'];

    // Verify password
    if (password_verify($password, $hashed_password)) {
        // Password is correct
        $cookie_name = "email";
        $cookie_value = $email;
        $cookie_expiry = time() + (86400 * 30); // Cookie expires in 30 days
        // Set the cookie
        setcookie($cookie_name, $cookie_value, $cookie_expiry, "/");
        echo "1";
    } else {
        // Password is incorrect
        echo "Incorrect password!";
    }
} else {
    // Email not found
    echo "Email not found!";
}

// Close the statement and the database connection
$stmt->close();
$conn->close();
?>
