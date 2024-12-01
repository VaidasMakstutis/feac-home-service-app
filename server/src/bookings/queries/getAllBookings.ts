import { BookingModel } from '../model';
import { Request, Response } from 'express';

export async function getAllBookings(req: Request, res: Response) {
  try {
    const bookings = await BookingModel.find();
    bookings.length ? res.json(bookings) : res.status(404).send('No bookings in database');
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error: error });
  }
}
