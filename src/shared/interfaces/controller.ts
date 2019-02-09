import { Request, Response, NextFunction } from 'express';

export interface Controller {
  get(request: Request, response: Response, next: NextFunction): void;
  getAll(request: Request, response: Response, next: NextFunction): void;
  insert(request: Request, response: Response, next: NextFunction): void;
  update(request: Request, response: Response, next: NextFunction): void;
  delete(request: Request, response: Response, next: NextFunction): void;
}
