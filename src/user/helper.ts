import { NextFunction } from 'express';
import { IUserModel } from './model';
import { Environment } from '../shared/environment';
import { genSalt, hash } from 'bcryptjs';

export class UserHelper {
  static changePasswordToHash(user: IUserModel, next: NextFunction) {
    const rounds: number = Number(Environment.PASSWORD_ROUNDS);
    return genSalt(rounds)
      .then(salt => hash(user.password, salt))
      .then(hash => {
        user.password = hash;
        return next();
      }).catch(next);
  }
}
