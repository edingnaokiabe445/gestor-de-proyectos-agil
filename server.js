const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analizar datos JSON y URL codificados
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Servir archivos estáticos desde el directorio 'public'

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`); // Enviar el archivo index.html
});

// Iniciando el servidor y escuchando en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`); // Registrar el estado del servidor
});