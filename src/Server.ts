import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import { Environment } from './shared/Environment';
import { Routable } from './shared/Routable';

export class Server {

  private application: express.Express;

  constructor() {
    this.application = express();
  }

  private initMiddlewares(): void {
    this.application.use(bodyParser.json());
    this.application.use(bodyParser.urlencoded({ extended: true }));
  }

  private initDatabase(): Promise<any> {
    return mongoose.connect(Environment.DATABASE_URL, {
      useNewUrlParser: true
    });
  }

  private initRoutes(routes: Routable[] = []) {
    routes.forEach(route => {
      route.applyRoutes(this.application);
    });
  }

  public bootstrap(routes: any[] = []): void {
    this.initDatabase()
      .then(() => this.initMiddlewares())
      .then(() => this.initRoutes(routes))
      .then(() => this.application.listen(Environment.SERVER_PORT));
  }

  public getApplication(): express.Express {
    return this.application;
  }

}
