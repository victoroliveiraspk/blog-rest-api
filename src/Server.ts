import * as express from 'express';
import * as mongoose from 'mongoose';
import { Environment } from './shared/Environment';

export class Server {

  private application: express.Express;

  constructor() {
    this.application = express();
  }

  private initDatabase(): Promise<any> {
    return mongoose.connect(Environment.DATABASE_URL, {
      useNewUrlParser: true
    });
  }

  private initRoutes(routes: any[] = []) {
    routes.forEach(route => {
      route.applyRoutes(this.application);
    });
  }

  public bootstrap(routes: any[] = []): void {
    this.initDatabase()
      .then(() => this.initRoutes(routes))
      .then(() => this.application.listen(Environment.SERVER_PORT));
  }

  public getApplication(): express.Express {
    return this.application;
  }

}
