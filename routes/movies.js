const express = require('express');
const router = express.Router();
const moviesApiController = require ('../contollers/moviesApiController');

// Listado de todas las películas -->
router.get('/', moviesApiController.getAll);

// Detalle de película requerida por ID -->
router.get('/:id', moviesApiController.getById);

// Agregar nueva película a la DB -->
router.post('/create', moviesApiController.create);

module.exports = router ; 