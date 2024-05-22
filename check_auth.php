<?php
$cookie_name = "username";
if(isset($_COOKIE[$cookie_name])) {
    // Username cookie exists, user is already logged in
    $username = $_COOKIE[$cookie_name];
    echo "1";
    // You can redirect the user to the home page or perform any other action
} else{
    echo "0";
}


?>