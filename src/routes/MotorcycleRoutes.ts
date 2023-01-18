import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

routes.post('/', (req, res, next) => new MotorcycleController(req, res, next).create());
routes.get('/', (req, res, next) => new MotorcycleController(req, res, next).findAll());

export default routes;
