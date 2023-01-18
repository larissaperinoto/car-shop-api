import { Schema } from 'mongoose';
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
}
