<?php 

$fullName = $_POST['fullName'];

$email = $_POST['email'];

$password = $_POST['password'];

//connecting to database

$conn = new mysqli('localhost', 'root', '', 'form');
if($conn->connect_error){
    die('Connection Failed: '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into userData(fullName, email, password) values(?,?,?)");

    $stmt->bind_param("sss", $fullName, $email, $password);
    $stmt->execute();
    
    $stmt->close();
    $conn->close();

    echo '<script type="text/javascript">window.location.href = "dashboard.html";</script>';
}

?>