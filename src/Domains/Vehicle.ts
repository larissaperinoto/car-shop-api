import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id?: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | undefined;
  protected buyValue: number;

  constructor(car: IVehicle) {
    this.model = car.model;
    this.color = car.color;
    this.year = car.year;
    this.buyValue = car.buyValue;
    this.id = car.id;
    this.status = car.status;
  }
}
