import express from 'express';
import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';
import Tweetcontroller from './controllers/TweetController';

import AuthMiddleware from './middleware/authenticate';

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/signup', UserController.create);
routes.post('/login', AuthController.login);

routes.use(AuthMiddleware.autenticate);
routes.post('/user/update', UserController.update);

routes.get('/tweets', Tweetcontroller.index);
routes.post('/tweets', Tweetcontroller.create);
routes.put('/tweets/:tweetId', Tweetcontroller.update);
routes.delete('/tweets/:tweetId', Tweetcontroller.delete);

export default routes;