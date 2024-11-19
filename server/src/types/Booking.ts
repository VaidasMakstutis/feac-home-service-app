import { Types } from 'mongoose';

export type BookingType = {
  businessId: Types.ObjectId;
  date: Date;
  time: string;
  userEmail: string;
  username: string;
  status: 'confirmed' | 'pending' | 'cancelled';
};
