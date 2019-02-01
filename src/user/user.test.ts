import 'mocha';
import { expect } from 'chai';
import * as supertest from 'supertest';
import { Environment } from '../shared/Environment';

const url: string = `http://localhost:${Environment.SERVER_PORT}`;

describe('GET /users', () => {
  it('response must be an array', () => {
    return supertest(url)
      .get('/users')
      .then((response: supertest.Response) => {
        expect(response.status).to.equal(200);
        expect(response.body).instanceOf(Array);
      });
  });
});
