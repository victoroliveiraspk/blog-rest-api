"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var supertest = require("supertest");
var Server_1 = require("../Server");
var UserRouter_1 = require("./UserRouter");
var UserController_1 = require("./UserController");
var UserModel_1 = require("./UserModel");
var routers = [
    new UserRouter_1.UserRouter(new UserController_1.UserController())
];
var server = new Server_1.Server();
server.bootstrap(routers);
var application = server.getApplication();
before(function (done) {
    UserModel_1.UserModel.remove({}).then(function () {
        done();
    });
});
describe('GET /users', function () {
    it('response must be an array', function () {
        return supertest(application)
            .get('/users')
            .then(function (response) {
            chai_1.expect(response.status).to.equal(200);
            chai_1.expect(response.body).instanceOf(Array);
        });
    });
});
describe('POST /users', function () {
    it('response should be the data that was sent', function () {
        var user = {
            "username": "user",
            "password": "123test",
            "email": "user@gmail.com"
        };
        return supertest(application)
            .post('/users')
            .set('Content-Type', 'application/json')
            .expect(200)
            .send(user)
            .then(function (response) {
            chai_1.expect(response.body).not.null;
            chai_1.expect(response.body.username).equal(user.username);
            chai_1.expect(response.body.email).equal(user.email);
            chai_1.expect(response.body.password).is.undefined;
        });
    });
    it('should return status 400 when runned validators', function () {
        var invalidUser = {
            "password": "123test",
            "email": "user2@gmail.com"
        };
        return supertest(application)
            .post('/users')
            .set('Content-Type', 'application/json')
            .expect(500)
            .send(invalidUser);
    });
});
describe('GET /users/:id', function () {
    it('shoud return same user', function () {
        var user = {
            "username": "user3",
            "password": "123test",
            "email": "user3@gmail.com"
        };
        return supertest(application)
            .post('/users')
            .set('Content-Type', 'application/json')
            .expect(200)
            .send(user)
            .then(function (response) {
            var id = response.body.id;
            return supertest(application)
                .get("/users/" + id)
                .then(function (response) {
                chai_1.expect(response.status).to.equal(200);
                chai_1.expect(response.body.username).to.equal(user.username);
                chai_1.expect(response.body.email).to.equal(user.email);
                chai_1.expect(response.body.password).is.undefined;
            });
        }).catch(console.error);
    });
});
