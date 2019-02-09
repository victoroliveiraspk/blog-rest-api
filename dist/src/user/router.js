"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = require("./controller");
var UserRouter = /** @class */ (function () {
    function UserRouter() {
        this.path = '/users';
        this.controller = new controller_1.UserController();
    }
    UserRouter.prototype.applyRoutes = function (application) {
        var router = express_1.Router();
        router.get('/:id', this.controller.get);
        router.get('/', this.controller.getAll);
        router.post('/', this.controller.insert);
        router.put('/:id', this.controller.update);
        router.delete('/:id', this.controller.delete);
        application.use(this.path, router);
    };
    return UserRouter;
}());
exports.UserRouter = UserRouter;
