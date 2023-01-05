// crear un servidor usando express usando cors y body-parser
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json({limit: '50mb'}));
app.use(cors())


// ROUTES
app.get('/', (req, res) =>{
    res.json({
        status: "1",
        msg: "201904013 - MARLON ISAÍ FIGUEROA FARFÁN"
    })
})

// RUTA DE USUARIOS
app.use('/usuarios', require('./routes/usuarios.route.js'));
app.use('/login', require('./routes/login_register.route.js'));

module.exports = app;
