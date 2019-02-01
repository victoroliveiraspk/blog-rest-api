"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Environment = /** @class */ (function () {
    function Environment() {
    }
    Environment.SERVER_PORT = 3000;
    Environment.DATABASE_URL = 'mongodb://localhost/blog';
    return Environment;
}());
exports.Environment = Environment;
