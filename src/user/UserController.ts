import { Request, Response, NextFunction } from 'express';
import { ModelFindByIdAndUpdateOptions } from 'mongoose';
import { Controller } from '../shared/Controller';
import { UserModel } from './UserModel';

export class UserController implements Controller {

  public get(request: Request, response: Response, next: NextFunction): void {
    const id = request.params.id;
    UserModel.findById(id).then(user => {
      response.json(user);
      return next();
    }).catch(next);
  }

  public getAll(request: Request, response: Response, next: NextFunction): void {
    UserModel.find().then(users => {
      response.json(users);
      return next();
    }).catch(next);
  }

  public insert(request: Request, response: Response, next: NextFunction): void {
    const userModel = new UserModel({ ...request.body })
    userModel.save().then(user => {
      response.json(user);
      return next();
    }).catch(next);
  }

  public update(request: Request, response: Response, next: NextFunction): void {
    const id = request.params.id;
    const options: ModelFindByIdAndUpdateOptions = { new: true };
    UserModel.findByIdAndUpdate(id, request.body, options).then(userUpdated => {
      response.json(userUpdated);
      return next();
    }).catch(next);
  }

  public delete(request: Request, response: Response, next: NextFunction): void {
    const id = request.params.id;
    UserModel.findByIdAndDelete(id).then(() => {
      response.json();
      return next();
    }).catch(next);
  }

}
