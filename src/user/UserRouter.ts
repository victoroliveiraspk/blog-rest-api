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
    router.get('/', this.controller.getAll);
    application.use(this.path, router);
  }

}
