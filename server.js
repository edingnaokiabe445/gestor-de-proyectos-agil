const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Importar módulo path para la resolución de rutas

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analizar datos JSON y URL codificados
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Servir archivos estáticos desde el directorio 'public'

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'), (err) => { // Enviar el archivo index.html
        if (err) {
            console.error('Error al enviar el archivo:', err);
            res.status(err.status).end();
        }
    });
});

// Iniciando el servidor y escuchando en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`); // Registrar el estado del servidor
});