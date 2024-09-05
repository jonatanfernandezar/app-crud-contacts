const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors'); 
const app = express();
const bcrypt = require('bcrypt');

const port = 8000;

// Crear el pool de conexiones MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'crud_prueba_tecnica',
});

// Middleware
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

// Ruta para obtener usuarios
app.get('/api/v1/users', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users_app_contact');
    res.json(rows);
  } catch (error) {
    console.error(error); // Loguear el error para depuración
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// Ruta para crear un nuevo usuario
app.post('/api/v1/users', async (req, res) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email and password are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      'INSERT INTO users_app_contact (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    );
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    console.error(error); // Loguear el error para depuración
    res.status(500).json({ error: 'Error inserting user' });
  }
});

// Ruta para iniciar sesión
app.post('/api/v1/login', async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const [results] = await pool.query('SELECT * FROM users_app_contact WHERE email = ?', [email]);
    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = results[0];
    bcrypt.compare(password, user.password, (err, match) => {
      if (err) {
        return res.status(500).json({ error: 'Error comparing passwords' });
      }
      if (match) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Invalid email or password' });
      }
    });
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Error fetching user' });
  }
});

// Ruta para obtener todos los contactos
app.get('/api/v1/contacts', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM contacts');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para obtener un contacto por ID
app.get('/api/v1/contacts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM contacts WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Contacto no encontrado' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para agregar un nuevo contacto
app.post('/api/v1/contacts', async (req, res) => {
  const { name, email, phone, address, description } = req.body;
  try {
    const [result] = await pool.query('INSERT INTO contacts (name, email, phone, address, description) VALUES (?, ?, ?, ?, ?)', [name, email, phone, address, description]);
    res.status(201).json({ id: result.insertId, name, email, phone, address, description });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para actualizar un contacto
app.put('/api/v1/contacts/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, address, description } = req.body;
  try {
    const [result] = await pool.query('UPDATE contacts SET name = ?, email = ?, phone = ?, address = ?, description = ? WHERE id = ?', [name, email, phone, address, description, id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Contacto no encontrado' });
    }
    res.json({ id, name, email, phone, address, description });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para eliminar un contacto
app.delete('/api/v1/contacts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM contacts WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Contacto no encontrado' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
