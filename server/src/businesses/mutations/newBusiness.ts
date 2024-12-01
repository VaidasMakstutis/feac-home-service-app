import { businessSchema } from '../validate';
import { BusinessModel } from '../model';
import { NextFunction, Request, Response } from 'express';

export async function newBusiness(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { error } = businessSchema.validate(req.body);
  if (error) {
    res.status(400).json({
      error: 'Validation failed',
      message: error.details.map((e) => e.message),
    });
    return;
  }

  const business = req.body;

  // Validation if the business name is unique
  const existingBusiness = await BusinessModel.findOne({ name: business.name });
  if (existingBusiness) {
    res.status(400).json({
      error: 'Validation failed',
      message: `Name "${business.name}" is already taken. Please create a unique business name.`,
    });
    return;
  }

  try {
    const newBusiness = new BusinessModel(business);
    const createdBusiness = await newBusiness.save();
    res.status(201).json({
      message: 'New business added successfully',
      business: createdBusiness,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating business', error: error });
  }
}
