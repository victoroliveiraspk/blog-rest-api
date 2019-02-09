"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var environment_1 = require("./shared/environment");
var Server = /** @class */ (function () {
    function Server() {
        this.application = express();
    }
    Server.prototype.initMiddlewares = function () {
        this.application.use(bodyParser.json());
        this.application.use(bodyParser.urlencoded({ extended: true }));
    };
    Server.prototype.initDatabase = function () {
        return mongoose.connect(environment_1.Environment.DATABASE_URL, {
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
            .then(function () { return _this.initMiddlewares(); })
            .then(function () { return _this.initRoutes(routes); })
            .then(function () { return _this.application.listen(environment_1.Environment.SERVER_PORT); });
    };
    Server.prototype.getApplication = function () {
        return this.application;
    };
    return Server;
}());
exports.Server = Server;
