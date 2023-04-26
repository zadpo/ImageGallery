const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database');
});

app.get('/images', (req, res) => {
  const sql = 'SELECT * FROM images';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error retrieving images: ', err);
      res.status(500).send('Error retrieving images');
      return;
    }
    res.status(200).send(results);
  });
});

app.post('/images', (req, res) => {
  const { title, description, url } = req.body;
  const sql = 'INSERT INTO images (title, description, url) VALUES (?, ?, ?)';
  connection.query(sql, [title, description, url], (err, results) => {
    if (err) {
      console.error('Error adding image: ', err);
      res.status(500).send('Error adding image');
      return;
    }
    res.status(201).send('Image added successfully');
  });
});

app.put('/images/:id', (req, res) => {
  const id = req.params.id;
  const { title, description, url } = req.body;
  const sql = 'UPDATE images SET title = ?, description = ?, url = ? WHERE id = ?';
  connection.query(sql, [title, description, url, id], (err, results) => {
    if (err) {
      console.error('Error updating image: ', err);
      res.status(500).send('Error updating image');
      return;
    }
    res.status(200).send('Image updated successfully');
  });
});

app.delete('/images/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM images WHERE id = ?';
  connection.query(sql, [id], (err, results) => {
    if (err) {
      console.error('Error deleting image: ', err);
      res.status(500).send('Error deleting image');
      return;
    }
    res.status(200).send('Image deleted successfully');
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
