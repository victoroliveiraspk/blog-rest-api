import { Document, Schema, Model, model } from 'mongoose';
import { IUser } from './interface';
import { UserHelper } from './helper';

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

userSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  UserHelper.changePasswordToHash(<IUserModel>this, next);
});

export const UserModel: Model<IUserModel> = model<IUserModel>('User', userSchema);
