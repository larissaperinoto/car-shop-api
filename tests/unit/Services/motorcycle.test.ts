import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

const motorcycleReq: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const id = '6348513f34c397abcad040b2';

describe('Testa a camada service para a rota /motorcycles', function () {
  it('Testa o método POST com a função "create"', async function () {
    sinon.stub(Model, 'create').resolves({ id, ...motorcycleReq });

    const service = new MotorcycleService();
    const result = await service.create(motorcycleReq);

    expect(result).to.be.deep.equal({ id, ...motorcycleReq });
  });
});
