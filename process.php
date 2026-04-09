<?php
include 'db.php';

if (isset($_POST['insert'])) {
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $roll = $_POST['roll'];
    $pass = $_POST['pass'];
    $cpass = $_POST['cpass'];
    $contact = $_POST['contact'];

    if ($pass != $cpass) {
        echo "Passwords do not match!";
        exit();
    }

    $sql = "INSERT INTO students (first_name, last_name, roll_no, password, contact)
            VALUES ('$fname', '$lname', '$roll', '$pass', '$contact')";

    mysqli_query($conn, $sql);
    echo "Record Inserted!";
}

if (isset($_POST['delete'])) {
    $roll = $_POST['roll'];

    $sql = "DELETE FROM students WHERE roll_no='$roll'";
    mysqli_query($conn, $sql);

    echo "Record Deleted!";
}

if (isset($_POST['update'])) {
    $roll = $_POST['roll'];
    $contact = $_POST['contact'];

    $sql = "UPDATE students SET contact='$contact' WHERE roll_no='$roll'";
    mysqli_query($conn, $sql);

    echo "Record Updated!";
}
?>