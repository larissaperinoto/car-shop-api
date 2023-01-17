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

describe('Testa a camada service para a rota /cars', function () {
  it('Testa o método POST com a função "create"', async function () {
    sinon.stub(Model, 'create').resolves({ id: '6348513f34c397abcad040b2', ...carReq });

    const service = new CarService();
    const result = await service.create(carReq);

    expect(result).to.be.deep.equal({ id: '6348513f34c397abcad040b2', ...carReq });
  });

  it('Testa o método GET com a função "findAll"', async function () {
    sinon.stub(Model, 'find').resolves([{ id: '6348513f34c397abcad040b2', ...carReq }]);

    const service = new CarService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal([{ id: '6348513f34c397abcad040b2', ...carReq }]);
  });

  it('Testa o método GET com a função "findById" quando o id existe', async function () {
    sinon.stub(Model, 'findOne').resolves({ id: '6348513f34c397abcad040b2', ...carReq });

    const service = new CarService();
    const result = await service.findById('6348513f34c397abcad040b2');

    const response = { id: '6348513f34c397abcad040b2', ...carReq };

    expect(result).to.be.deep.equal({ status: 200, response });
  });

  it('Testa o método GET com a função "findById" quando o id não é válido', async function () {
    const service = new CarService();
    const result = await service.findById('q1');

    const message = { message: 'Invalid mongo id' };

    expect(result).to.be.deep.equal({ status: 422, response: message });
  });

  it('Testa o método GET com a função "findById" quando o carro não existe', async function () {
    sinon.stub(Model, 'findOne').resolves(null);

    const service = new CarService();
    const result = await service.findById('6348513f34c397abcad040b2');

    const message = { message: 'Car not found' };

    expect(result).to.be.deep.equal({ status: 404, response: message });
  });

  afterEach(function () {
    sinon.restore();
  });
});
