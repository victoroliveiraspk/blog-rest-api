import { Server } from './src/Server';
import { UserRouter } from './src/user/UserRouter';
import { Routable } from './src/shared/Routable';

const routes: Routable[] = [
  new UserRouter()
];

new Server().bootstrap(routes);
