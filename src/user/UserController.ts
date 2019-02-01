import * as express from 'express';
import { Controller } from '../shared/Controller';
import { UserModel } from './UserModel';

export class UserController implements Controller {

  public getAll(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ): void {
    UserModel.find().then(users => {
      response.json(users);
      return next();
    }).catch(next);
  }

  public insert(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ): void {
    const userModel = new UserModel({ ...request.body })
    userModel.save().then(user => {
      response.json(user);
      return next();
    }).catch(next);
  }

}
