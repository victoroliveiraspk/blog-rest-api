"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserModel_1 = require("./UserModel");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.getAll = function (request, response, next) {
        UserModel_1.UserModel.find().then(function (users) {
            response.json(users);
            return next();
        }).catch(next);
    };
    return UserController;
}());
exports.UserController = UserController;
