/* eslint-disable @typescript-eslint/comma-dangle */
import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.get('/:id', (req, res, next) => new CarController(req, res, next).findById());
routes.get('/', (req, res, next) => new CarController(req, res, next).findAll());
routes.post('/', (req, res, next) => new CarController(req, res, next).create());

export default routes;
