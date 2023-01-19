import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = { ...this.req.body };
    try {
      const newMotorcycle = await this.service.create(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const motorcycles = await this.service.findAll();
      return this.res.status(200).json(motorcycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    const { id } = this.req.params;
    try {
      const motorcycle = await this.service.findById(id);
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateById() {
    const { id } = this.req.params;
    const motorcycle = this.req.body;
    try {
      const motorcycleUpdated = await this.service.updateById(id, motorcycle);
      return this.res.status(200).json(motorcycleUpdated);
    } catch (error) {
      this.next(error);
    }
  }

  public async removeById() {
    const { id } = this.req.params;
    try {
      await this.service.removeById(id);
      return this.res.sendStatus(204);
    } catch (error) {
      this.next(error);
    }
  }
}
