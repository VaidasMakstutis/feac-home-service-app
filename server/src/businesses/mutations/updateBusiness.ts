import { businessSchema } from '../validate';
import { BusinessModel } from '../model';
import { NextFunction, Request, Response } from 'express';

export async function updateBusiness(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { error } = businessSchema.validate(req.body);
  if (error) {
    res.status(400).json({
      error: 'Validation failed',
      message: error.details.map((e) => e.message),
    });
    return;
  }

  try {
    const updatedBusiness = await BusinessModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    !updatedBusiness
      ? res.status(404).send('Business not found')
      : res.json({
          message: 'Business updated successfully',
          business: updatedBusiness,
        });
  } catch (error) {
    res.status(500).json({ message: 'Error updating business', error: error });
  }
}
