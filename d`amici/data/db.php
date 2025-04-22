<?php
$servername = "localhost";
$username = "root"; // sau user-ul tău
$password = "tatimami2020";     // parola de la MySQL
$database = "recenzii";


$conn = new mysqli($servername, $username, $password, $database);


if ($conn->connect_error) {
    die("Conexiune eșuată: " . $conn->connect_error);
}
?>
