const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para que acepte JSON y solicitudes de cualquier origen
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Backend funcionando correctamente 🚀');
});

// Nueva ruta para análisis de sensibilidad
app.post('/api/sensibilidad', (req, res) => {
  const datosProblema = req.body;

  console.log('Datos recibidos:', datosProblema);

  // Por ahora solo respondemos confirmando la recepción
  res.json({
    mensaje: 'Datos recibidos correctamente',
    datosRecibidos: datosProblema
  });
});

// Arrancar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en el puerto ${PORT}`);
});