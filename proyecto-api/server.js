const express = require('express');
const cors = require('cors');
const pool = require('./db');
const usuariosRoutes = require('./routes/usuarios');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Endpoint raíz
app.get('/', (req, res) => {
  res.json({ 
    message: 'Servidor funcionando correctamente 🚀',
    timestamp: new Date().toISOString()
  });
});

// Prueba de conexión a la base de datos
app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ 
      success: true,
      message: 'Conexión a base de datos exitosa',
      timestamp: result.rows[0].now
    });
  } catch (err) {
    console.error('Error de conexión:', err);
    res.status(500).json({ 
      success: false,
      message: 'Error al conectar con la base de datos',
      error: err.message
    });
  }
});

// USAR LAS RUTAS DEL ARCHIVO usuarios.js
app.use('/usuarios', usuariosRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
});

module.exports = app;