"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Server_1 = require("./src/Server");
var UserRouter_1 = require("./src/user/UserRouter");
var UserController_1 = require("./src/user/UserController");
var routes = [
    new UserRouter_1.UserRouter(new UserController_1.UserController())
];
new Server_1.Server().bootstrap(routes);
