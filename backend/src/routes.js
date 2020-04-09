const express = require('express');
const routes = express.Router();

const PartidasController = require('./controllers/PartidasController');
const ClubesController = require('./controllers/ClubesController');

routes.post('/partidas', PartidasController.create);
routes.post('/clubes', ClubesController.create);

module.exports = routes;