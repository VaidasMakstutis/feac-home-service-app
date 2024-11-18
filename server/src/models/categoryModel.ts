import mongoose from 'mongoose';
import { Category } from '../types/Category';

const categorySchema = new mongoose.Schema<Category>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  bgcolor: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

export const CategoryModel = mongoose.model<Category>('Category', categorySchema);
