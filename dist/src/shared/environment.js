"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Environment = /** @class */ (function () {
    function Environment() {
    }
    Environment.SERVER_PORT = process.env.SERVER_PORT || 3000;
    Environment.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/blog';
    Environment.PASSWORD_ROUNDS = process.env.PASSWORD_ROUNDS || 10;
    return Environment;
}());
exports.Environment = Environment;
