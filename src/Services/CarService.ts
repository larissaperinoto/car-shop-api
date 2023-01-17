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
}
