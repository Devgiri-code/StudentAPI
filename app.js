const express = require('express');
const cors = require('cors'); // Importing CORS
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS
app.use(express.json()); // Middleware to parse JSON bodies

// Mock "database" (in-memory storage for this example)
let students = [];
let currentId = 1;

// GET /students - Retrieve a list of all students
app.get('/students', (req, res) => {
  res.json(students);
});

// GET /students/:id - Retrieve details of a student by ID
app.get('/students/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).send('Student not found');
  res.json(student);
});

// POST /students - Add a new student
app.post('/students', (req, res) => {
  const { name, grade, email } = req.body;
  const newStudent = { id: currentId++, name, grade, email };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT /students/:id - Update an existing student by ID
app.put('/students/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).send('Student not found');

  const { name, grade, email } = req.body;
  student.name = name || student.name;
  student.grade = grade || student.grade;
  student.email = email || student.email;

  res.json(student);
});

// DELETE /students/:id - Delete a student by ID
app.delete('/students/:id', (req, res) => {
  const studentIndex = students.findIndex(s => s.id === parseInt(req.params.id));
  if (studentIndex === -1) return res.status(404).send('Student not found');

  const deletedStudent = students.splice(studentIndex, 1);
  res.json(deletedStudent);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
