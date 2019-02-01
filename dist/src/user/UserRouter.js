"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var UserRouter = /** @class */ (function () {
    function UserRouter(controller) {
        this.path = '/users';
        this.controller = controller;
    }
    UserRouter.prototype.applyRoutes = function (application) {
        var router = express.Router();
        router.get('/', this.controller.getAll);
        application.use(this.path, router);
    };
    return UserRouter;
}());
exports.UserRouter = UserRouter;
