import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';
import ValidateObjectId from '../utils/ValidateObjectId';

export default class MotorcycleService {
  private model = new MotorcycleModel();
  private validateObjectId = new ValidateObjectId();

  private createMotorcycleDomain(motorcycle: IMotorcycle) {
    if (motorcycle) return new Motorcycle(motorcycle);
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const newMotorcycle = await this.model.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async findAll() {
    const cars = await this.model.findAll();
    const result = cars.map((motorcycle) => this.createMotorcycleDomain(motorcycle));
    return result;
  }

  public async findById(id: string) {
    this.validateObjectId.validate(id);
    const motorcycle = await this.model.findById(id);
    if (motorcycle === null) {
      return { status: 404, response: { message: 'Motorcycle not found' } };
    }
    return { status: 200, response: this.createMotorcycleDomain(motorcycle) };
  }

  public async updateById(id: string, car: IMotorcycle) {
    this.validateObjectId.validate(id);
    const motorcycleExists = await this.model.findById(id);
    if (motorcycleExists === null) {
      return { status: 404, response: { message: 'Motorcycle not found' } };
    }
    await this.model.updateById(id, car);
    return { status: 200, response: this.createMotorcycleDomain({ id, ...car }) };
  }
}