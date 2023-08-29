// server.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/registrar", (req, res) => {
    const { nombre, edad } = req.body;
    
    // Aquí podrías procesar los datos, guardarlos en una base de datos, etc.
    
    res.sendStatus(200); // Envía una respuesta de éxito
});

app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
