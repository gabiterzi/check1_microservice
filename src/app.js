const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

// Registrando os models
require('./model/departamento');

// Criar rotas
const index = require('./routes/index');
const departamentoRoute = require('./routes/departamento_route');

app.use('/', index);
app.use('/departamento', departamentoRoute);

// Conectar ao MongoDB
mongoose.connect("mongodb://localhost:27017/departamento", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conexão com o MongoDB foi bem-sucedida!');
})
.catch((err) => {
    console.error('Erro ao conectar no MongoDB:', err);
});

module.exports = app;
