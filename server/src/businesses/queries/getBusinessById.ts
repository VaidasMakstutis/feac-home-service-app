import { BusinessModel } from '../../models/businessModel';
import { Request, Response } from 'express';

export async function getBusinessById(req: Request, res: Response) {
  try {
    const business = await BusinessModel.findById(req.params.id);
    business ? res.json(business) : res.status(404).send('Business not found by ID');
  } catch (error) {
    res.status(500).json({ message: 'Error fetching business by ID', error: error });
  }
}
