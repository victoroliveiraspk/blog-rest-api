"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Server_1 = require("./src/Server");
var UserRouter_1 = require("./src/user/UserRouter");
var routes = [
    new UserRouter_1.UserRouter()
];
new Server_1.Server().bootstrap(routes);
