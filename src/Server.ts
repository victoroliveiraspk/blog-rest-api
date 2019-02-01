import * as express from 'express';
import { Environment } from './shared/Environment';

export class Server {

  private application: express.Express;

  constructor() {
    this.application = express();
  }

  public bootstrap(routes: any[] = []): void {
    routes.forEach(route => {
      route.applyRoutes(this.application);
    });
    this.application.listen(Environment.SERVER_PORT);
  }

}
