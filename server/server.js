import express from 'express';
import mysql from 'mysql2';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: '451'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

app.post('/register', async (req, res) => {
	const { first_name, second_name, phone_number, password, email } = req.body;
 
	// Check if user with the provided email already exists
	const checkUserQuery = 'SELECT * FROM users WHERE email = ?';
	db.query(checkUserQuery, [email], async (err, results) => {
	  if (err) return res.status(500).json({ error: err.message });
 
	  if (results.length > 0) {
		 return res.status(400).json({ message: 'User with this email already exists' });
	  }
 
	  try {
		 // Hash the password
		 const hashedPassword = await bcrypt.hash(password, 10);
 
		 // Insert the new user into the database
		 const insertUserQuery = 'INSERT INTO users (first_name, second_name, phone_number, password, email) VALUES (?, ?, ?, ?, ?)';
		 db.query(insertUserQuery, [first_name, second_name, phone_number, hashedPassword, email], (err, result) => {
			if (err) return res.status(500).json({ error: err.message });
 
			res.json({ message: 'Registration successful' });
		 });
	  } catch (error) {
		 res.status(500).json({ error: 'Error processing registration' });
	  }
	});
 });
 

const secretKey = 'your_jwt_secret_key';
app.post('/login', (req, res) => {
	const { email, password } = req.body;

	const query = 'SELECT * FROM users WHERE email = ?';
	db.query(query, [email], async (err, results) => {
	  if (err) return res.status(500).json({ error: err.message });
	  if (results.length === 0) {
		return res.status(401).json({ message: 'User not found' });
	  }

	  const user = results[0];
	  const validPassword = await bcrypt.compare(password, user.password);
	  if (!validPassword) {
		return res.status(401).json({ message: 'Invalid password' });
	  }

	  const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });

	  res.json({
		message: 'Login successful',
		token,
		user: { id: user.id, first_name: user.first_name, second_name: user.second_name }
	  });
	});
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});