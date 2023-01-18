import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

const carReq: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const id = '6348513f34c397abcad040b2';

describe('Testa a camada service para a rota /cars', function () {
  it('Testa o método POST com a função "create"', async function () {
    sinon.stub(Model, 'create').resolves({ id, ...carReq });

    const service = new CarService();
    const result = await service.create(carReq);

    expect(result).to.be.deep.equal({ id, ...carReq });
  });

  it('Testa o método GET com a função "findAll"', async function () {
    sinon.stub(Model, 'find').resolves([{ id, ...carReq }]);

    const service = new CarService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal([{ id, ...carReq }]);
  });

  it('Testa o método GET com a função "findById" quando o id existe', async function () {
    sinon.stub(Model, 'findOne').resolves({ id, ...carReq });

    const service = new CarService();
    const result = await service.findById(id);

    const response = { id, ...carReq };

    expect(result).to.be.deep.equal({ status: 200, response });
  });

  it('Testa o método GET com a função "findById" quando o id não é válido', async function () {
    const service = new CarService();

    try {
      await service.findById('q1');
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Invalid mongo id');
    }
  });

  it('Testa o método GET com a função "findById" quando o carro não existe', async function () {
    sinon.stub(Model, 'findOne').resolves(null);

    const service = new CarService();
    const result = await service.findById(id);

    const message = { message: 'Car not found' };

    expect(result).to.be.deep.equal({ status: 404, response: message });
  });

  it('Testa o método PUT com a função "updateById" quando o carro existe', async function () {
    sinon.stub(Model, 'findOne').resolves({ id, ...carReq });
    sinon.stub(Model, 'updateOne').resolves();

    const service = new CarService();
    const result = await service.updateById(id, carReq);

    expect(result).to.be.deep.equal({ status: 200, response: { id, ...carReq } });
  });

  afterEach(function () {
    sinon.restore();
  });
});
