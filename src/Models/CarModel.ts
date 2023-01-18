import { Schema } from 'mongoose';
import { ObjectId } from 'mongodb';
import ICar from '../Interfaces/ICar';
import AbstractModel from './AbstractODM';

export default class CarModel extends AbstractModel<ICar> {
  constructor() {
    super('Car', new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    }));
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async findAll(): Promise<ICar[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<ICar | null> {
    return this.model.findOne({ _id: new ObjectId(id) });
  }

  public async updateById(id: string, car:ICar) {
    const { year, color, status, buyValue, doorsQty, seatsQty } = car;
    return this.model.updateOne(
      { _id: new ObjectId(id) },
      { $set: { model: car.model, year, color, status, buyValue, doorsQty, seatsQty } },
    );
  }
}
