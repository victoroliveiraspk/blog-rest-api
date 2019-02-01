import { Server } from './src/Server';
import { UserRouter } from './src/user/UserRouter';
import { UserController } from './src/user/UserController';

const routes = [
  new UserRouter(new UserController())
];

new Server().bootstrap(routes);
