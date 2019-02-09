"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const environment_1 = require("./shared/environment");
class Server {
    constructor() {
        this.application = express();
    }
    initMiddlewares() {
        this.application.use(bodyParser.json());
        this.application.use(bodyParser.urlencoded({ extended: true }));
    }
    initDatabase() {
        return mongoose.connect(environment_1.Environment.DATABASE_URL, {
            useNewUrlParser: true
        });
    }
    initRoutes(routes = []) {
        routes.forEach(route => {
            route.applyRoutes(this.application);
        });
    }
    bootstrap(routes = []) {
        this.initDatabase()
            .then(() => this.initMiddlewares())
            .then(() => this.initRoutes(routes))
            .then(() => this.application.listen(environment_1.Environment.SERVER_PORT));
    }
    getApplication() {
        return this.application;
    }
}
exports.Server = Server;
