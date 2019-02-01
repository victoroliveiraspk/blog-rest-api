"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.getAll = function (request, response, next) {
        response.json({ message: 'Hello World2!' });
        return next();
    };
    return UserController;
}());
exports.UserController = UserController;
