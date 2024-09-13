
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepartamentoSchema = new Schema({
    nome: { type: String, required: true, trim: true },
    localizacao: { type: String, trim: true }
});

module.exports = mongoose.model('Departamento', DepartamentoSchema);