import { CategoryModel } from '../../models/categoryModel';
import { Request, Response } from 'express';

export async function getAllCategories(req: Request, res: Response) {
  try {
    const categories = await CategoryModel.find();
    categories.length ? res.json(categories) : res.status(404).send('No categories in database');
  } catch (error) {
    res.status(500).json({ message: 'Error fetching categories', error: error });
  }
}
