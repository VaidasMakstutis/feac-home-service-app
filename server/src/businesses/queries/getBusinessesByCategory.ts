import { BusinessModel } from '../model';
import { Request, Response } from 'express';

export async function getBusinessesByCategory(req: Request, res: Response) {
  const categoryParam = req.params.category.charAt(0).toUpperCase() + req.params.category.slice(1);
  try {
    const filteredBusinesses = await BusinessModel.find({
      category: categoryParam,
    });
    filteredBusinesses.length ? res.json(filteredBusinesses) : res.status(404).send('Business not found by category');
  } catch (error) {
    res.status(500).json({ message: 'Error fetching businesses by category', error: error });
  }
}
