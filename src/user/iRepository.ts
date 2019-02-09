import { DocumentQuery } from 'mongoose';
import { IUserModel } from './model';
import { IUser } from './interface';

export interface IUserRepository {
  findById(id: string|number): DocumentQuery<IUserModel, IUserModel, {}>;
  find(): DocumentQuery<IUserModel[], IUserModel, {}>;
  save(user: IUser): Promise<IUserModel>;
  findByIdAndUpdate(id: string|number, user: IUser): DocumentQuery<IUserModel, IUserModel, {}>;
  findByIdAndDelete(id: string|number): DocumentQuery<IUserModel, IUserModel, {}>;
}
