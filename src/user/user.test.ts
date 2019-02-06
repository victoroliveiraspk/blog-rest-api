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
  it('response should be the data that was sent', () => {
    const user = {
      "username": "user",
      "password": "123test",
      "email": "user@gmail.com"
    };

    return supertest(application)
      .post('/users')
      .set('Content-Type', 'application/json')
      .expect(200)
      .send(user)
      .then((response: supertest.Response) => {
        expect(response.body).not.null;
        expect(response.body.username).equal(user.username);
        expect(response.body.email).equal(user.email);
        expect(response.body.password).is.undefined;
      });
  });

  it('should return status 400 when runned validators', () => {
    const invalidUser = {
      "password": "123test",
      "email": "user2@gmail.com"
    };
    return supertest(application)
      .post('/users')
      .set('Content-Type', 'application/json')
      .expect(500)
      .send(invalidUser)
  });
});

describe('GET /users/:id', () => {

  it('shoud return same user', () => {
    const user = {
      "username": "user3",
      "password": "123test",
      "email": "user3@gmail.com"
    };
    return supertest(application)
      .post('/users')
      .set('Content-Type', 'application/json')
      .expect(200)
      .send(user)
      .then((response: supertest.Response) => {
        const id = response.body.id;
        return supertest(application)
          .get(`/users/${id}`)
          .then((response: supertest.Response) => {
            expect(response.status).to.equal(200);
            expect(response.body.username).to.equal(user.username);
            expect(response.body.email).to.equal(user.email);
            expect(response.body.password).is.undefined;
          });
      }).catch(console.error)
  });
});
