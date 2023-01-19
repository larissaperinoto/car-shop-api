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

const service = new MotorcycleService();

describe('Testa a camada service para a rota /motorcycles', function () {
  it('Testa o método POST com a função "create"', async function () {
    sinon.stub(Model, 'create').resolves({ id, ...motorcycleReq });

    const result = await service.create(motorcycleReq);

    expect(result).to.be.deep.equal({ id, ...motorcycleReq });
  });

  it('Testa o método GET com a função "findAll"', async function () {
    sinon.stub(Model, 'find').resolves([{ id, ...motorcycleReq }]);

    const result = await service.findAll();

    expect(result).to.be.deep.equal([{ id, ...motorcycleReq }]);
  });

  it('Testa o método GET com a função "findById"', async function () {
    sinon.stub(Model, 'findOne').resolves({ id, ...motorcycleReq });

    const result = await service.findById(id);

    expect(result).to.be.deep.equal({ id, ...motorcycleReq });
  });

  it('Testa o método GET com a função "updateById"', async function () {
    sinon.stub(Model, 'findOne').resolves({ id, ...motorcycleReq });
    sinon.stub(Model, 'updateOne').resolves();

    const result = await service.updateById(id, motorcycleReq);

    expect(result).to.be.deep.equal({ id, ...motorcycleReq });
  });

  it('Testa o método DELETE com a função "removeById" quando o carro existe', async function () {
    sinon.stub(Model, 'findOne').resolves({ id, ...motorcycleReq });
    sinon.stub(Model, 'deleteOne').resolves();

    const result = await service.removeById(id);

    expect(result).to.be.deep.equal(undefined);
  });

  beforeEach(function () {
    sinon.restore();
  });
});
