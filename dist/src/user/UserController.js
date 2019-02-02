"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    UserController.prototype.insert = function (request, response, next) {
        var userModel = new UserModel_1.UserModel(__assign({}, request.body));
        userModel.save().then(function (user) {
            response.json(user);
            return next();
        }).catch(next);
    };
    UserController.prototype.update = function (request, response, next) {
        var id = request.params.id;
        var options = { new: true };
        UserModel_1.UserModel.findByIdAndUpdate(id, request.body, options).then(function (userUpdated) {
            response.json(userUpdated);
            return next();
        }).catch(next);
    };
    UserController.prototype.delete = function (request, response, next) {
        var id = request.params.id;
        UserModel_1.UserModel.findByIdAndDelete(id).then(function () {
            response.json();
            return next();
        }).catch(next);
    };
    return UserController;
}());
exports.UserController = UserController;
