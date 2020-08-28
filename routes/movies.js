const express = require('express');
const router = express.Router();
const moviesController = require ('../contollers/moviesController');

// Listado de todas las películas -->
router.get('/', moviesController.getAll);

// Detalle de película requerida por ID -->
router.get('/:id', moviesController.getById);

// Agregar nueva película a la DB -->
router.post('/create', moviesController.create);

module.exports = router ; 