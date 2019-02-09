"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const helper_1 = require("./helper");
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
    helper_1.UserHelper.changePasswordToHash(this, next);
});
exports.UserModel = mongoose_1.model('User', exports.userSchema);
