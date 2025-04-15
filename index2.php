<?php include 'db.php'; ?>

<h2>Lasă o recenzie</h2>
<form action="adauga_recenzie.php" method="POST">
    <input type="text" name="nume" placeholder="Numele tău" required><br>
    <textarea name="recenzie" placeholder="Scrie recenzia ta aici..." required></textarea><br>
    <label>Nota cu stele: </label>
    <select name="stele" required>
        <option value="5">⭐⭐⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
        <option value="2">⭐⭐</option>
        <option value="1">⭐</option>
    </select><br>
    <button type="submit">Trimite recenzia</button>
</form>

<hr>

<h2>Recenzii existente</h2>
<?php
$sql = "SELECT * FROM recenzii ORDER BY id DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<strong>" . htmlspecialchars($row["nume"]) . "</strong>: ";
        echo str_repeat("⭐", (int)$row["stele"]) . "<br>";
        echo "<p>" . nl2br(htmlspecialchars($row["recenzie"])) . "</p><hr>";
    }
} else {
    echo "Nicio recenzie momentan.";
}
?>
