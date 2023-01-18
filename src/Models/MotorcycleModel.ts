import { Schema } from 'mongoose';
import { ObjectId } from 'mongodb';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractModel from './AbstractODM';

export default class MotorcycleModel extends AbstractModel<IMotorcycle> {
  constructor() {
    super('Motorcycle', new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    }));
  }

  public async create(motorcycle: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...motorcycle });
  }

  public async findAll(): Promise<IMotorcycle[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<IMotorcycle | null> {
    return this.model.findOne({ _id: new ObjectId(id) });
  }
}
