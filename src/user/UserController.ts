import * as express from 'express';
import { Controller } from '../shared/Controller';

export class UserController implements Controller {

  public getAll(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) {
    response.json({ message: 'Hello World2!' });
    return next();
  }

}
