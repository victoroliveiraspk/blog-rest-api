import { Document, Schema, Model, model } from 'mongoose';
import { genSalt, hash } from 'bcryptjs';
import { Environment } from '../shared/environment';
import { IUser } from './interface';

export interface IUserModel extends IUser, Document {

}

export const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  modifiedAt: {
    type: Date,
    required: false
  }
});

const changePasswordToHash = (user: IUserModel, next) => {
  const rounds: number = Number(Environment.PASSWORD_ROUNDS);

  return genSalt(rounds)
    .then(salt => hash(user.password, salt))
    .then(hash => {
      user.password = hash;
      return next();
    }).catch(next);
}

userSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  changePasswordToHash(<IUserModel>this, next);
});

export const UserModel: Model<IUserModel> = model<IUserModel>('User', userSchema);
