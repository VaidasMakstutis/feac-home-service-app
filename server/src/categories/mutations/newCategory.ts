import { categorySchema } from '../validate';
import { CategoryModel } from '../model';
import { NextFunction, Request, Response } from 'express';

export async function newCategory(req: Request, res: Response, next: NextFunction): Promise<void> {
  // Joi validation
  const { error } = categorySchema.validate(req.body);
  if (error) {
    res.status(400).json({
      error: 'Validation failed',
      message: error.details.map((e) => e.message),
    });
    return;
  }

  const category = req.body;

  // Validation if the category name is unique
  const existingCategory = await CategoryModel.findOne({ name: category.name });
  if (existingCategory) {
    res.status(400).json({
      error: 'Validation failed',
      message: `Name "${category.name}" is already taken. Please create a unique category name.`,
    });
    return;
  }

  try {
    const newCategory = new CategoryModel(category);
    const createdCategory = await newCategory.save();
    res.status(201).json({
      message: 'New category added successfully',
      category: createdCategory,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating category', error: error });
  }
}
