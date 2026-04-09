<?php
$conn = mysqli_connect("localhost", "root", "", "fsd_lab_assignment4");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>