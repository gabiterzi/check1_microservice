const express = require('express');
const router = express.Router();
const controller = require('../controller/departamento_controller');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete); // Adicionei o método DELETE para completar as operações CRUD

module.exports = router;

