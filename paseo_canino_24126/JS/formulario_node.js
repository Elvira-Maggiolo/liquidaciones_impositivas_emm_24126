const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/procesar_solicitud', (req, res) => {
  const nombreCliente = req.body.nombre_cliente;
  const nombreMascota = req.body.nombre_mascota;
  const diaPaseo = req.body.dia_paseo;
  const horarioPaseo = req.body.horario_paseo;
  const paseador = req.body.paseador;

  // Aquí puedes procesar los datos del formulario como desees
  // Por ejemplo, podrías guardarlos en una base de datos

  res.send('Solicitud de paseo recibida');
});

app.listen(port, () => {
  console.log(`Servidor Node.js corriendo en http://localhost:${port}`);
});
