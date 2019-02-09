"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./src/server");
const router_1 = require("./src/user/router");
const routes = [
    new router_1.UserRouter()
];
new server_1.Server().bootstrap(routes);
