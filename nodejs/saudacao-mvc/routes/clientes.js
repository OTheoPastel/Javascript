const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

router.get('/', clientesController.clientes);
router.get('/formularioClientes', clientesController.formularioClientes);
router.post('/clientesFormulario', clientesController.clientesFormulario);

module.exports = router;
