"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    constructor(repository) {
        this.repository = repository;
    }
    get(request, response, next) {
        const id = request.params.id;
        this.repository.findById(id).then(user => {
            response.json(user);
            return next();
        }).catch(next);
    }
    getAll(request, response, next) {
        this.repository.find().then(users => {
            response.json(users);
            return next();
        }).catch(next);
    }
    insert(request, response, next) {
        this.repository.save(Object.assign({}, request.body)).then(user => {
            user.password = undefined;
            response.json(user);
            return next();
        }).catch(next);
    }
    update(request, response, next) {
        const id = request.params.id;
        this.repository.findByIdAndUpdate(id, request.body).then(userUpdated => {
            response.json(userUpdated);
            return next();
        }).catch(next);
    }
    delete(request, response, next) {
        const id = request.params.id;
        this.repository.findByIdAndDelete(id).then(() => {
            response.json();
            return next();
        }).catch(next);
    }
}
exports.UserController = UserController;
