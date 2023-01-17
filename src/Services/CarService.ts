import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

export default class CarService {
  private model = new CarModel();

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
    if (!isValidObjectId(id)) return { status: 422, response: { message: 'Invalid mongo id' } };
    const car = await this.model.findById(id);
    if (car === null) {
      return { status: 404, response: { message: 'Car not found' } };
    }
    return { status: 200, response: this.createCarDomain(car) };
  }
}
