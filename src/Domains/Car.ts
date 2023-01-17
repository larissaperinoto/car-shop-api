import ICar from '../Interfaces/ICar';

export default class Car {
  protected id?: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | undefined;
  protected buyValue: number;
  private seatsQty: number;
  private doorsQty: number;

  constructor(car: ICar) {
    this.model = car.model;
    this.color = car.color;
    this.year = car.year;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
    this.id = car.id;
    this.status = car.status;
  }
}
