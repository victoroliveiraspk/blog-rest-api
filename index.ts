import { Server } from './src/server';
import { UserRouter } from './src/user/router';
import { Routable } from './src/shared/interfaces/routable';

const routes: Routable[] = [
  new UserRouter()
];

new Server().bootstrap(routes);
