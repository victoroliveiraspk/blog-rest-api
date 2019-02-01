import * as express from 'express';
import { Environment } from './shared/Environment';

export class Server {

  private application: express.Express;

  constructor() {
    this.application = express();
  }

  public bootstrap(): void {
    this.application.listen(Environment.SERVER_PORT);
  }

}
