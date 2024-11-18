import { businessSchema } from '../../utils/validateBusiness';
import { BusinessModel } from '../../models/businessModel';
import { Request, Response } from 'express';

export async function updateBusiness(req: Request, res: Response) {
  const { error } = businessSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      error: 'Validation failed',
      message: error.details.map((e) => e.message),
    });
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
