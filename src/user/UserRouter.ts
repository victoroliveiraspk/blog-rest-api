import * as express from 'express';
import { Controller } from '../shared/Controller';

export class UserRouter {

  private path: string = '/users';
  private controller: Controller;

  constructor(controller: Controller) {
    this.controller = controller;
  }

  public applyRoutes(application: express.Express): void {
    const router = express.Router();
    router.get('/:id', this.controller.get);
    router.get('/', this.controller.getAll);
    router.post('/', this.controller.insert);
    router.put('/:id', this.controller.update);
    router.delete('/:id', this.controller.delete);
    application.use(this.path, router);
  }

}
