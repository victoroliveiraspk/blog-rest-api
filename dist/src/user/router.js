"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const repository_1 = require("./repository");
class UserRouter {
    constructor() {
        this.path = '/users';
        const userRepository = new repository_1.UserRepository();
        this.controller = new controller_1.UserController(userRepository);
    }
    applyRoutes(application) {
        const router = express_1.Router();
        router.get('/:id', (req, res, n) => this.controller.get(req, res, n));
        router.get('/', (req, res, n) => this.controller.getAll(req, res, n));
        router.post('/', (req, res, n) => this.controller.insert(req, res, n));
        router.put('/:id', (req, res, n) => this.controller.update(req, res, n));
        router.delete('/:id', (req, res, n) => this.controller.delete(req, res, n));
        application.use(this.path, router);
    }
}
exports.UserRouter = UserRouter;
