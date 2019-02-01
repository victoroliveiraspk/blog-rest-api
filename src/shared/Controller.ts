import { Request, Response, NextFunction } from 'express';

export interface Controller {

  getAll(request: Request, response: Response, next: NextFunction): void;

}
