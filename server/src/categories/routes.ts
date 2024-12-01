import express from 'express';
import { getAllCategories } from './queries/getAllCategories';
import { newCategory } from './mutations/newCategory';

export const categoriesRouter = express.Router();

categoriesRouter.get('/', getAllCategories);
categoriesRouter.post('/', newCategory);
