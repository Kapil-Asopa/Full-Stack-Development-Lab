<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Student Registration</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="style.css">
</head>

<body>

<div class="container mt-5">

    <div class="glass-card p-4">
        <h2 class="text-center mb-4">🎓 Student Registration System</h2>

        <form action="process.php" method="POST">

            <div class="row">
                <div class="col-md-6 mb-3">
                    <input type="text" name="fname" class="form-control" placeholder="First Name" required>
                </div>

                <div class="col-md-6 mb-3">
                    <input type="text" name="lname" class="form-control" placeholder="Last Name" required>
                </div>
            </div>

            <div class="mb-3">
                <input type="text" name="roll" class="form-control" placeholder="Roll No" required>
            </div>

            <div class="row">
                <div class="col-md-6 mb-3">
                    <input type="password" name="pass" class="form-control" placeholder="Password" required>
                </div>

                <div class="col-md-6 mb-3">
                    <input type="password" name="cpass" class="form-control" placeholder="Confirm Password" required>
                </div>
            </div>

            <div class="mb-3">
                <input type="text" name="contact" class="form-control" placeholder="Contact Number" required>
            </div>

            <div class="text-center">
                <button class="btn btn-success me-2" name="insert">Insert</button>
                <button class="btn btn-warning me-2" name="update">Update</button>
                <button class="btn btn-danger" name="delete">Delete</button>
            </div>

        </form>
    </div>

    <!-- TABLE -->
    <div class="glass-card mt-5 p-4">
        <h3 class="text-center mb-3">📊 Student Records</h3>

        <?php
        include 'db.php';
        $result = mysqli_query($conn, "SELECT * FROM students");

        echo "<table class='table table-bordered table-hover text-center'>";
        echo "<thead class='table-dark'>
                <tr>
                    <th>Name</th>
                    <th>Roll</th>
                    <th>Contact</th>
                </tr>
              </thead>";

        while ($row = mysqli_fetch_assoc($result)) {
            echo "<tr>
                <td>{$row['first_name']} {$row['last_name']}</td>
                <td>{$row['roll_no']}</td>
                <td>{$row['contact']}</td>
            </tr>";
        }

        echo "</table>";
        ?>
    </div>

</div>

</body>
</html>