import { businessSchema } from '../../utils/validateBusiness';
import { BusinessModel } from '../../models/businessModel';
import { NextFunction, Request, Response } from 'express';

export async function newBusiness(req: Request, res: Response, next: NextFunction): Promise<any> {
  const { error } = businessSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      error: 'Validation failed',
      message: error.details.map((e) => e.message),
    });
  }

  const business = req.body;

  // Validation if the business name is unique
  const existingBusiness = await BusinessModel.findOne({ name: business.name });
  if (existingBusiness) {
    return res.status(400).json({
      error: 'Validation failed',
      message: `Name "${business.name}" is already taken. Please create a unique business name.`,
    });
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
