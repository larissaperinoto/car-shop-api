/* eslint-disable @typescript-eslint/comma-dangle */
import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.post(
  '/',
  (req, res, next) => new CarController(req, res, next).create()
  // eslint-disable-next-line function-paren-newline
);

export default routes;
