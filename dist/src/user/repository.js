"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class UserRepository {
    findById(id) {
        return model_1.UserModel.findById(id);
    }
    find() {
        return model_1.UserModel.find();
    }
    save(user) {
        const userModel = new model_1.UserModel(Object.assign({}, user));
        return userModel.save();
    }
    findByIdAndUpdate(id, user) {
        const options = {
            new: true
        };
        return model_1.UserModel.findByIdAndUpdate(id, user, options);
    }
    findByIdAndDelete(id) {
        return model_1.UserModel.findByIdAndDelete(id);
    }
}
exports.UserRepository = UserRepository;
