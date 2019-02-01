import 'mocha';
import { expect } from 'chai';
import * as supertest from 'supertest';
import { Server } from '../Server';
import { UserRouter } from './UserRouter'
import { UserController } from './UserController';
import { UserModel } from './UserModel';

const routers = [
  new UserRouter(new UserController())
];

const server = new Server();
server.bootstrap(routers);

const application = server.getApplication();

before((done) => {
  UserModel.remove({}).then(() => {
    done();
  });
});

describe('GET /users', () => {
  it('response must be an array', () => {
    return supertest(application)
      .get('/users')
      .then((response: supertest.Response) => {
        expect(response.status).to.equal(200);
        expect(response.body).instanceOf(Array);
      });
  });
});

describe('POST /users', () => {
  const user = {
    "username": "victor",
    "password": "123mudar",
    "email": "victoroliveiraspk@gmail.com"
  };

  it('response should be the data that was sent', () => {
    return supertest(application)
      .post('/users')
      .set('Content-Type', 'application/json')
      .expect(200)
      .send(user)
      .then((response: supertest.Response) => {
        expect(response.body).not.null;
        expect(response.body.username).equal(user.username);
        expect(response.body.email).equal(user.email);
      });
  });
});
