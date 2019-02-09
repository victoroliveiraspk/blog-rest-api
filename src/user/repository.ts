import { DocumentQuery, ModelFindByIdAndUpdateOptions } from 'mongoose';
import { UserModel, IUserModel } from './model';
import { IUser } from './interface';
import { IUserRepository } from './iRepository';

export class UserRepository implements IUserRepository {
  public findById(id: string|number): DocumentQuery<IUserModel, IUserModel, {}> {
    return UserModel.findById(id);
  }

  public find(): DocumentQuery<IUserModel[], IUserModel, {}> {
    return UserModel.find();
  }

  public save(user: IUser): Promise<IUserModel> {
    const userModel = new UserModel({ ...user });
    return userModel.save();
  }

  public findByIdAndUpdate(id: string|number, user: IUser): DocumentQuery<IUserModel, IUserModel, {}> {
    const options: ModelFindByIdAndUpdateOptions = {
      new: true
    };
    return UserModel.findByIdAndUpdate(id, user, options);
  }

  public findByIdAndDelete(id: string|number): DocumentQuery<IUserModel, IUserModel, {}> {
    return UserModel.findByIdAndDelete(id);
  }
}
