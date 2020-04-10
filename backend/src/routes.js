const express = require('express');
const routes = express.Router();

const PartidasController = require('./controllers/PartidasController');
const ClubesController = require('./controllers/ClubesController');
const CampeonatosController = require('./controllers/CampeonatosController');
const JogadoresController = require('./controllers/JogadoresController');


routes.post('/partidas', PartidasController.create);
routes.post('/clubes', ClubesController.create);
routes.post('/campeonatos', CampeonatosController.create);
routes.post('/jogadores', JogadoresController.create);



module.exports = routes;