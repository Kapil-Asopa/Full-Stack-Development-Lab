const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let students = [];

// Middleware (logging)
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

// GET all students
app.get('/students', (req, res) => {
    res.json(students);
});

// GET student by ID
app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
});

// POST add student
app.post('/students', (req, res) => {
    const { id, name, age, course } = req.body;

    if (!id || !name || !age || !course) {
        return res.status(400).json({ message: "All fields required" });
    }

    students.push({ id, name, age, course });

    res.status(201).json({ message: "Student added", students });
});

// PUT update student
app.put('/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    const { name, age, course } = req.body;

    if (name) student.name = name;
    if (age) student.age = age;
    if (course) student.course = course;

    res.json({ message: "Updated", student });
});

// DELETE student
app.delete('/students/:id', (req, res) => {
    const index = students.findIndex(s => s.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    students.splice(index, 1);

    res.json({ message: "Deleted" });
});

// FILTER using query
app.get('/search', (req, res) => {
    const { course } = req.query;

    const result = students.filter(s => s.course === course);

    res.json(result);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});