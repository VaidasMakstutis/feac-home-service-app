import { Document, Types } from 'mongoose';

export type User = Document & {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  isCorrectPassword: (password: string) => Promise<boolean>;
};
