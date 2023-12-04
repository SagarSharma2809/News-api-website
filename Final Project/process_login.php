<?php
// Establish database connection
$servername = "localhost";
$username = "root";
$password = "";
$database = "userdata";

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve data from the form
$fullName = $_POST['fullName'];
$email = $_POST['email'];
$password = $_POST['password'];
$hashedPassword = md5($password); // Hash the password (for demonstration purposes, use stronger hashing methods in production)

// SQL query to insert data into the userdata table
$sql = "INSERT INTO userdata (full_name, email, password) VALUES ('$fullName', '$email', '$hashedPassword')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
