const express = require('express');
const routes = express.Router();

const PartidasController = require('./controllers/PartidasController');

routes.post('/partidas', PartidasController.create);

module.exports = routes;