<?php
session_start();
require_once "database_login_values.php";
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $occupation = $_POST['occupation'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    
    // File upload handling
    $targetDir = "uploads/";
    $fileName = basename($_FILES["profileImage"]["name"]);
    $targetFilePath = $targetDir . $fileName;
    $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);

    // Allow certain file formats
    $allowedTypes = array('jpg', 'jpeg', 'png', 'gif');
    if (in_array($fileType, $allowedTypes)) {
        // Ensure uploads directory exists
        if (!is_dir($targetDir)) {
            mkdir($targetDir, 0777, true);
        }
        // Upload file to server
        if (move_uploaded_file($_FILES["profileImage"]["tmp_name"], $targetFilePath)) {
            // File uploaded successfully

            // Store data in the database
            $sql = "INSERT INTO profiles (name, email, occupation, age, gender, profile_image) VALUES ('$name', '$email', '$occupation', '$age', '$gender', '$targetFilePath')";
            if (mysqli_query($conn, $sql)) {
                // Redirect to showprofile.php with a success message
                $_SESSION['message'] = "Profile created successfully!";
                header('location: home.html');
                exit();
            } else {
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            }
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    } else {
        echo "Sorry, only JPG, JPEG, PNG, GIF files are allowed.";
    }
}
mysqli_close($conn);
?>
