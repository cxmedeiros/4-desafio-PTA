import express from 'express';
import UserController from '@controllers/UserController'
import RestauranteController from '@controllers/RestauranteController';

const routes = express.Router();
const userController = new UserController();
const restauranteController = new RestauranteController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/restaurante', restauranteController.create);
routes.get('/restaurante', restauranteController.get);
routes.delete('/restaurante/:id', restauranteController.delete);
routes.put('/restaurante/:id', restauranteController.update);

export default routes;