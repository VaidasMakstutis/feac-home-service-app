import express from 'express';
import { getAllCategories } from '../categories/queries/getAllCategories';
import { newCategory } from '../categories/mutations/newCategory';

export const categoriesRouter = express.Router();

categoriesRouter.get('/', getAllCategories);
categoriesRouter.post('/', newCategory);
