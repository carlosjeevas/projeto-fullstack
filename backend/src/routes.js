// GET, POST, PUT, DELETE

//req.query = Acessar query params (para filtros) (parâmetros que vem da query)
//req.params = Acessar route params (para edição e delete) (parâmetros que vem da rota (url))
//req.body = Acessar corpo da requisição (para criação e edição)
//req.headers = Acessar o cabeçalho da requisição (parâmetros que vem do header)

const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;