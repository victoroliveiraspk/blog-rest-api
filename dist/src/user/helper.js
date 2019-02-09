"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = require("../shared/environment");
const bcryptjs_1 = require("bcryptjs");
class UserHelper {
    static changePasswordToHash(user, next) {
        const rounds = Number(environment_1.Environment.PASSWORD_ROUNDS);
        return bcryptjs_1.genSalt(rounds)
            .then(salt => bcryptjs_1.hash(user.password, salt))
            .then(hash => {
            user.password = hash;
            return next();
        }).catch(next);
    }
}
exports.UserHelper = UserHelper;
