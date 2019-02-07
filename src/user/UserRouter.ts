import { Express, Router } from 'express';
import { UserController } from './UserController';
import { Controller } from '../shared/Controller';
import { Routable } from '../shared/Routable';

export class UserRouter implements Routable {

  private path: string = '/users';
  private controller: Controller;

  constructor() {
    this.controller = new UserController();
  }

  public applyRoutes(application: Express): void {
    const router = Router();
    router.get('/:id', this.controller.get);
    router.get('/', this.controller.getAll);
    router.post('/', this.controller.insert);
    router.put('/:id', this.controller.update);
    router.delete('/:id', this.controller.delete);
    application.use(this.path, router);
  }

}
