"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./src/server");
var router_1 = require("./src/user/router");
var routes = [
    new router_1.UserRouter()
];
new server_1.Server().bootstrap(routes);
