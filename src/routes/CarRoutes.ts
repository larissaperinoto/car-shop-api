import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.delete('/:id', (req, res, next) => new CarController(req, res, next).removeById());
routes.put('/:id', (req, res, next) => new CarController(req, res, next).updateById());
routes.get('/:id', (req, res, next) => new CarController(req, res, next).findById());
routes.get('/', (req, res, next) => new CarController(req, res, next).findAll());
routes.post('/', (req, res, next) => new CarController(req, res, next).create());

export default routes;
