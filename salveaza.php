<?php
$Nume = $_POST['Nume'];
$Prenume = $_POST['Prenume'];
$Telefon = $_POST['Telefon'];
$MASA = $_POST['MASA'];


$conn = new mysqli('localhost','root','','prima');
if($conn->connect_error){
    die('Eror:' .$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into registration(Nume,Prenume,Telefon,MASA)
        values(?,?,?,?");
    $stmt->bind_param("ssii",$Nume,$Prenume,$Telefon,$MASA);
    $stmt->execute();
    echo "Merge";
    $stmt->close();
    $conn->close();
}