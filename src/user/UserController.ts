import { Request, Response, NextFunction } from 'express';
import { ModelFindOneAndUpdateOptions } from 'mongoose';
import { Controller } from '../shared/Controller';
import { UserModel } from './UserModel';

export class UserController implements Controller {

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
    const { _id } = request.body;
    let options: ModelFindOneAndUpdateOptions = { new: true };
    UserModel.findOneAndUpdate({ _id }, request.body, options).then(user => {
      response.json(user);
      return next();
    });
  }

}
