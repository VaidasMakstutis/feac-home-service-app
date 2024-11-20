import mongoose from 'mongoose';
import { Business, Image } from './types';

const imageSchema = new mongoose.Schema<Image>(
  {
    url: {
      type: String,
      required: true,
    },
  },
  { _id: false },
);

const businessSchema = new mongoose.Schema<Business>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  contactPerson: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  images: {
    type: [imageSchema],
    required: true,
  },
});

export const BusinessModel = mongoose.model<Business>('Business', businessSchema);
