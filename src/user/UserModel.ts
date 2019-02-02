import { Document, Schema, Model, model } from 'mongoose';

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

export const UserModel: Model<IUserModel> = model<IUserModel>('User', userSchema);
