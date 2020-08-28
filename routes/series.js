const express = require('express');
const router = express.Router();
const seriesApiController = require ('../contollers/seriesApiController');

// Listado de todas las series -->
router.get('/', seriesApiController.getAll);

// Detalle de la serie requerida por ID -->
router.get('/:id', seriesApiController.getById);

// Agregar nueva serie a la DB -->
router.post('/create', seriesApiController.create);

module.exports = router ; 