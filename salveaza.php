<?php
$host = '127.0.0.1:3306';
$dbname = 'nou';
$username = 'root';
$password = 'tatimami2020';

try {
    // Create a new PDO instance
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Prepare the SQL query to fetch data from a table
    $sql = "SELECT * FROM your_table_name";
    $stmt = $pdo->query($sql);

    // Fetch all rows as an associative array
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Check if there are any rows
    if (count($rows) > 0) {
        // Start the HTML table
        echo '<table border="1">';
        echo '<tr>';
        
        // Print the table headers
        foreach ($rows[0] as $key => $value) {
            echo '<th>' . htmlspecialchars($key) . '</th>';
        }
        echo '</tr>';

        // Print the table rows
        foreach ($rows as $row) {
            echo '<tr>';
            foreach ($row as $value) {
                echo '<td>' . htmlspecialchars($value) . '</td>';
            }
            echo '</tr>';
        }

        // Close the table
        echo '</table>';
    } else {
        echo 'No records found.';
    }
} catch (PDOException $e) {
    die("Could not connect to the database $dbname :" . $e->getMessage());
}
?>



<!DOCTYPE html>
<html>
<head><title>Profil</title></head>
<body>
  <h1>Bun venit, <?php echo htmlspecialchars($user['nume']); ?>!</h1>
</body>
</html>