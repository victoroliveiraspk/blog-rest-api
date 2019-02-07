import { Server } from './src/Server';
import { UserRouter } from './src/user/UserRouter';

const routes = [
  new UserRouter()
];

new Server().bootstrap(routes);
