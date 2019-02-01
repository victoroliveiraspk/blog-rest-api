"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var supertest = require("supertest");
var Environment_1 = require("../shared/Environment");
var url = "http://localhost:" + Environment_1.Environment.SERVER_PORT;
describe('GET /users', function () {
    it('response must be an array', function () {
        return supertest(url)
            .get('/users')
            .then(function (response) {
            chai_1.expect(response.status).to.equal(200);
            chai_1.expect(response.body).instanceOf(Array);
        });
    });
});
