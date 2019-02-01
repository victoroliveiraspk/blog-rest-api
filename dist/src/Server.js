"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var Environment_1 = require("./shared/Environment");
var Server = /** @class */ (function () {
    function Server() {
        this.application = express();
    }
    Server.prototype.initDatabase = function () {
        return mongoose.connect(Environment_1.Environment.DATABASE_URL, {
            useNewUrlParser: true
        });
    };
    Server.prototype.initRoutes = function (routes) {
        var _this = this;
        if (routes === void 0) { routes = []; }
        routes.forEach(function (route) {
            route.applyRoutes(_this.application);
        });
    };
    Server.prototype.bootstrap = function (routes) {
        var _this = this;
        if (routes === void 0) { routes = []; }
        this.initDatabase()
            .then(function () { return _this.initRoutes(routes); })
            .then(function () { return _this.application.listen(Environment_1.Environment.SERVER_PORT); });
    };
    Server.prototype.getApplication = function () {
        return this.application;
    };
    return Server;
}());
exports.Server = Server;
