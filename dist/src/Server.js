"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Environment_1 = require("./shared/Environment");
var Server = /** @class */ (function () {
    function Server() {
        this.application = express();
    }
    Server.prototype.bootstrap = function () {
        this.application.listen(Environment_1.Environment.SERVER_PORT);
    };
    return Server;
}());
exports.Server = Server;
