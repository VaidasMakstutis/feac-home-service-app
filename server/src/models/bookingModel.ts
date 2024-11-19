import mongoose from 'mongoose';
import { BookingType } from '../types/Booking';

const bookingSchema = new mongoose.Schema<BookingType>({
  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export const BookingModel = mongoose.model<BookingType>('Booking', bookingSchema);