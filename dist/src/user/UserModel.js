"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var bcryptjs_1 = require("bcryptjs");
var Environment_1 = require("../shared/Environment");
exports.userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    modifiedAt: {
        type: Date,
        required: false
    }
});
exports.userSchema.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    var user = this;
    var rounds = Number(Environment_1.Environment.PASSWORD_ROUNDS);
    return bcryptjs_1.genSalt(rounds)
        .then(function (salt) { return bcryptjs_1.hash(user.password, salt); })
        .then(function (hash) {
        user.password = hash;
        return next();
    }).catch(next);
});
exports.UserModel = mongoose_1.model('User', exports.userSchema);
