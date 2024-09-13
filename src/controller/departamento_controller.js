const repository = require('../repositories/departamento-repository');

exports.get = async (req, res, next) => {
    try {
        const data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        console.error('Erro ao processar a requisição GET:', e);
        res.status(500).send({ message: 'Falha ao processar sua requisição' });
    }
};

exports.getById = async (req, res, next) => {
    try {
        const data = await repository.getById(req.params.id);
        if (!data) {
            return res.status(404).send({ message: 'Departamento não encontrado' });
        }
        res.status(200).send(data);
    } catch (e) {
        console.error('Erro ao processar a requisição GET por ID:', e);
        res.status(500).send({ message: 'Falha ao processar sua requisição' });
    }
};

exports.post = async (req, res, next) => {
    try {
        await repository.create(req.body);
        res.status(201).send({ message: 'Departamento cadastrado com sucesso' });
    } catch (e) {
        console.error('Erro ao processar a requisição POST:', e);
        res.status(400).send({ message: 'Falha ao cadastrar departamento', data: e });
    }
};

exports.put = async (req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(204).send();
    } catch (e) {
        console.error('Erro ao processar a requisição PUT:', e);
        res.status(400).send({ message: 'Falha ao atualizar departamento', data: e });
    }
};

exports.delete = async (req, res, next) => {
    try {
        await repository.delete(req.params.id);
        res.status(204).send();
    } catch (e) {
        console.error('Erro ao processar a requisição DELETE:', e);
        res.status(400).send({ message: 'Falha ao deletar departamento', data: e });
    }
};
