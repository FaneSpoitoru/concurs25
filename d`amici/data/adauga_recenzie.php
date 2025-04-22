<?php
include 'db.php';

$nume = $_POST['nume'];
$recenzie = $_POST['recenzie'];
$stele = (int)$_POST['stele'];

$sql = "INSERT INTO recenzii (nume, recenzie, stele) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssi", $nume, $recenzie, $stele);

if ($stmt->execute()) {
    header("Location: index.php");
    exit();
} else {
    echo "Eroare la salvare: " . $stmt->error;
}
?>
