<?php
session_start();
require_once "database_login_values.php";

$response = array();

$sql = "SELECT * FROM profiles ORDER BY id DESC LIMIT 1";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    $response['name'] = htmlspecialchars($row['name']);
    $response['email'] = htmlspecialchars($row['email']);
    $response['occupation'] = htmlspecialchars($row['occupation']);
    $response['age'] = htmlspecialchars($row['age']);
    $response['gender'] = htmlspecialchars($row['gender']);
    $response['profileImage'] = htmlspecialchars($row['profile_image']);
} else {
    $response['error'] = "No profile found.";
}

mysqli_close($conn);

echo json_encode($response);
?>
