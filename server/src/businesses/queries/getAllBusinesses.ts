import { BusinessModel } from '../model';
import { Request, Response } from 'express';

export async function getAllBusinesses(req: Request, res: Response) {
  try {
    const businesses = await BusinessModel.find();
    businesses.length ? res.json(businesses) : res.status(404).send('No businesses in database');
  } catch (error) {
    res.status(500).json({ message: 'Error fetching businesses', error: error });
  }
}
