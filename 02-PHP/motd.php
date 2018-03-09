<?php
/**
 * Created by PhpStorm.
 * User: carla
 * Date: 01.03.2018
 * Time: 20:37
 */

echo "<br>";
echo "<br>";

/**
 * Schritt 3: DB Zugriff von PHP
 * Erzeugen Sie mit PHP eine Webseite motd.php die die erste Meldung der Datenbank anzeigt.
 * Verwenden Sie dazu das in den Unterlagen erwähnte MySQLi Interface.
 */
/*
$rows = getSthFromDB("SELECT * FROM motd");
echo $rows["text"];
echo "<br>";
*/

/**
 * Schritt 4: Zufällige Meldungen
 * Ändern Sie die Seite, sodass eine zufällige Meldung angezeigt wird.
 * Falls Sie dazu eine Zufallszahl in PHP benötigen, so gibt es dafür die Funktion rand().
 * Mittels COUNT(*) können Sie in MySQL die Anzahl Records ermitteln.
 * (Andere Lösungen sind natürlich auch möglich).
 * By einem Refresh der Seite soll also jeweils eine andere Meldung erscheinen.
 */

$rowsCount = getSthFromDB("select COUNT(id) as leCount from motd");
$rand = random_int(0,$rowsCount['leCount']);

$rows = getSthFromDB("SELECT text FROM motd WHERE id=" . $rand);
echo $rows["text"];

function getSthFromDB($sqlQuery){
    $host = "ec2-34-245-34-121.eu-west-1.compute.amazonaws.com";
    $db = new mysqli($host, "doedel", "WEBLABsupersafe", "php");

    if ($db->connect_errno) {
        echo "Sorry, maybe not today.";
        exit;
    }

    $resultCount = $db -> query($sqlQuery);
    $rows = $resultCount -> fetch_assoc();
    return $rows;
}