const express    = require('express');
const Router     = express.Router();
const Controller = require('../controllers/chartController')
Router.post('/create',Controller.create)
Router.get('/getpie',Controller.getPie)
Router.get('/getbar',Controller.getBar)
Router.get('/getall',Controller.getAll)

module.exports = Router