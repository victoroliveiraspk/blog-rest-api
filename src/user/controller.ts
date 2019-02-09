import { Request, Response, NextFunction } from 'express';
import { Controller } from '../shared/interfaces/controller';
import { IUserRepository } from './iRepository';

export class UserController implements Controller {

  private repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  public get(request: Request, response: Response, next: NextFunction): void {
    const id = request.params.id;
    this.repository.findById(id).then(user => {
      response.json(user);
      return next();
    }).catch(next);
  }

  public getAll(request: Request, response: Response, next: NextFunction): void {
    this.repository.find().then(users => {
      response.json(users);
      return next();
    }).catch(next);
  }

  public insert(request: Request, response: Response, next: NextFunction): void {
    this.repository.save({ ...request.body }).then(user => {
      user.password = undefined;
      response.json(user);
      return next();
    }).catch(next);
  }

  public update(request: Request, response: Response, next: NextFunction): void {
    const id = request.params.id;
    this.repository.findByIdAndUpdate(id, request.body).then(userUpdated => {
      response.json(userUpdated);
      return next();
    }).catch(next);
  }

  public delete(request: Request, response: Response, next: NextFunction): void {
    const id = request.params.id;
    this.repository.findByIdAndDelete(id).then(() => {
      response.json();
      return next();
    }).catch(next);
  }

}
