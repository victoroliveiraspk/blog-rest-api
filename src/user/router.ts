import { Express, Router } from 'express';
import { UserController } from './controller';
import { Controller } from '../shared/interfaces/controller';
import { Routable } from '../shared/interfaces/routable';
import { UserRepository } from './repository';

export class UserRouter implements Routable {

  private path: string = '/users';
  private controller: Controller;

  constructor() {
    const userRepository = new UserRepository();
    this.controller = new UserController(userRepository);
  }

  public applyRoutes(application: Express): void {
    const router = Router();
    router.get('/:id', (req, res, n) =>  this.controller.get(req, res, n));
    router.get('/', (req, res, n) => this.controller.getAll(req, res, n));
    router.post('/', (req, res, n) => this.controller.insert(req, res, n));
    router.put('/:id', (req, res, n) => this.controller.update(req, res, n));
    router.delete('/:id', (req, res, n) => this.controller.delete(req, res, n));
    application.use(this.path, router);
  }

}
