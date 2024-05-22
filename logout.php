<?php
// Initialize the session
session_start();

// Unset all session variables
$_SESSION = array();

// Destroy the session
session_destroy();

// Redirect to login page or any other page after logout
header("location: start.html");
exit;
?>
