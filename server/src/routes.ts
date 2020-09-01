import express from 'express';
import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';

import AuthMiddleware from './middleware/authenticate';

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/signup', UserController.create);
routes.post('/login', AuthController.login);

routes.use(AuthMiddleware.autenticate);
routes.post('/update', UserController.update);

export default routes;