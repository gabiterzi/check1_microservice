const mongoose = require('mongoose');
const Departamento = mongoose.model('Departamento');

exports.get = async () => {
    return await Departamento.find({});
};

exports.getById = async (id) => {
    return await Departamento.findById(id);
};

exports.create = async (data) => {
    let departamento = new Departamento(data);
    await departamento.save();
};

exports.update = async (id, data) => {
    await Departamento.findByIdAndUpdate(id, { $set: data });
};

exports.delete = async (id) => {
    await Departamento.findByIdAndDelete(id);
};