import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';
import ValidateObjectId from '../utils/ValidateObjectId';

export default class CarService {
  private model = new CarModel();
  private validateObjectId = new ValidateObjectId();

  private createCarDomain(car: ICar) {
    if (car) return new Car(car);
    return null;
  }

  public async create(car: ICar) {
    const newCar = await this.model.create(car);
    return this.createCarDomain(newCar);
  }

  public async findAll() {
    const cars = await this.model.findAll();
    const result = cars.map((car) => this.createCarDomain(car));
    return result;
  }

  public async findById(id: string) {
    this.validateObjectId.validate(id);
    const car = await this.model.findById(id);
    if (car === null) {
      return { status: 404, response: { message: 'Car not found' } };
    }
    return { status: 200, response: this.createCarDomain(car) };
  }

  public async updateById(id: string, car: ICar) {
    this.validateObjectId.validate(id);
    const carExists = await this.model.findById(id);
    if (carExists === null) {
      return { status: 404, response: { message: 'Car not found' } };
    }
    await this.model.updateById(id, car);
    return { status: 200, response: this.createCarDomain({ id, ...car }) };
  }
}
