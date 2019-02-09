import { Express } from 'express';

export interface Routable {

  applyRoutes(application: Express): void

}
