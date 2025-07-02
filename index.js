// index.js (backend actualizado)
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend funcionando correctamente 🚀');
});

app.post('/api/sensibilidad', (req, res) => {
  const datos = req.body;

  console.log('Datos recibidos:', datos);

  // Datos simulados por ahora
  const sensibilidadVariables = datos.coefObjetivo.map((valor, index) => ({
    variable: `X${index + 1}`,
    valorActual: valor,
    permisibleAumentar: Math.round(valor * 0.1 * 1000) / 1000, // ±10%
    permisibleDisminuir: Math.round(valor * 0.1 * 1000) / 1000
  }));

  const sensibilidadRestricciones = datos.restricciones.map((restriccion, index) => ({
    restriccion: `Restriccion ${index + 1}`,
    valorActual: restriccion.valor,
    valorSombra: Math.random().toFixed(3), // Simulado por ahora
    permisibleAumentar: Math.round(restriccion.valor * 0.1 * 1000) / 1000,
    permisibleDisminuir: Math.round(restriccion.valor * 0.1 * 1000) / 1000
  }));

  res.json({
    mensaje: 'Análisis de sensibilidad calculado correctamente',
    sensibilidadVariables,
    sensibilidadRestricciones
  });
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en el puerto ${PORT}`);
});
