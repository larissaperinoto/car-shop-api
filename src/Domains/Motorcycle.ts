import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(car: IMotorcycle) {
    super(car);
    this.category = car.category;
    this.engineCapacity = car.engineCapacity;
  }
}
