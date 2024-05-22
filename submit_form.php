<?php
session_start();
require_once "database_login_values.php";

if ($conn->connect_error) {
    http_response_code(500);
    echo "Database connection failed: " . $conn->connect_error;
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    function is_email($email) {
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    $name = $_POST["name"] ?? '';
    $email = $_POST["email"] ?? '';
    $message = $_POST["message"] ?? '';

    if (!is_email($email)) {
        http_response_code(400);
        echo "Invalid email address.";
        exit;
    }

    if (empty($name) || empty($message)) {
        http_response_code(400);
        echo "Please fill in all fields.";
        exit;
    }

    $stmt = $conn->prepare("INSERT INTO submissions (name, email, message) VALUES (?, ?, ?)");
    if (!$stmt) {
        error_log("Prepare failed: " . $conn->error);
        http_response_code(500);
        echo "Oops! Something went wrong. Please try again later.";
        exit;
    }
    $stmt->bind_param("sss", $name, $email, $message);

    if ($stmt->execute()) {
        $to = "kamdiganesh123@gmail.com";
        $subject = "New Message from Contact Form";
        $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
        $headers = "From: $name <$email>\r\nReply-To: $email\r\n";

        if (mail($to, $subject, $body, $headers)) {
            http_response_code(200);
            echo "Message sent successfully.";
        } else {
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }
    } else {
        error_log("Execute failed: " . $stmt->error);
        http_response_code(500);
        echo "Oops! Something went wrong. Please try again later.";
    }

    $stmt->close();
    $conn->close();
} else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>
