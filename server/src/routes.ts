import express from 'express';
import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';

const routes = express.Router();

routes.post('/signup', UserController.create);
routes.post('/login', AuthController.login);

export default routes;