<?php
require_once "database_login_values.php";

// Table name
$table_name = "users_info";

// Fetch input values
$fullname = $_POST['fullname'] ?? '';
$username = $_POST['username'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$password = $_POST['password'] ?? '';
$confirmPassword = $_POST['confirm-password'] ?? '';

// Check if all fields are filled
if (empty($fullname) || empty($username) || empty($email) || empty($phone) || empty($password) || empty($confirmPassword)) {
    echo "Please fill in all fields.";
    exit();
}

// Check if passwords match
if ($password !== $confirmPassword) {
    echo "Passwords do not match.";
    exit();
}

// Hash the password before storing it in the database (for security)
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// SQL query to search for the email
$sql = "SELECT * FROM $table_name WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Email already exists
    echo "Email already exists.";
} else {
    // Email doesn't exist, insert the user into the database
    $sql_insert = "INSERT INTO $table_name (fullname, username, email, phone, password) VALUES (?, ?, ?, ?, ?)";
    $stmt_insert = $conn->prepare($sql_insert);
    $stmt_insert->bind_param("sssss", $fullname, $username, $email, $phone, $hashedPassword);

    if ($stmt_insert->execute() === TRUE) {
        // Registration successful
        echo "Registration successful";
        
        header('location: makeprofile.html');
    } else {
        // Error occurred while registering the user
        echo "Error: " . $conn->error;
    }
}

// Close the statement and the database connection
$stmt->close();
$conn->close();
?>
