import { Document, Schema, Model, model } from 'mongoose';
import { genSalt, hash } from 'bcryptjs';
import { Environment } from '../shared/Environment';

export interface IUserModel extends Document {
  username: string;
  password: string;
  email: string;
  createdAt: Date;
  modifiedAt: Date;
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

  const user: IUserModel = <IUserModel>this;
  const rounds: number = Number(Environment.PASSWORD_ROUNDS);

  return genSalt(rounds)
    .then(salt => hash(user.password, salt))
    .then(hash => {
      user.password = hash;
      return next();
    }).catch(next);

});

export const UserModel: Model<IUserModel> = model<IUserModel>('User', userSchema);
