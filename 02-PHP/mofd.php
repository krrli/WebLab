<?php header("Content-Type: text/plain");
/**
 * Created by PhpStorm.
 * User: carla
 * Date: 09.03.2018
 * Time: 13:50
 */

/**
 * Schritt 5: Meldungen als Text
 * Erzeugen Sie eine weitere Seite mofd.php die nur die Message of the Day
 * Meldung als Text zurück gibt.
 * Benützen Sie dabei die in den Unterlagen erwähnte header() Funktion.
 */

$rowsCount = getSthFromDB("select COUNT(id) as leCount from motd");
$rand = random_int(0,$rowsCount['leCount']);

$rows = getSthFromDB("SELECT text FROM motd WHERE id=" . $rand);
echo $rows["text"];

function getSthFromDB($sqlQuery){
    $host = "ec2-34-245-34-121.eu-west-1.compute.amazonaws.com";
    $db = new mysqli($host, "doedel", "WEBLABsupersafe", "php");

    $resultCount = $db -> query($sqlQuery);
    $rows = $resultCount -> fetch_assoc();
    return $rows;
}