import { BookingModel } from '../model';
import { Request, Response } from 'express';

export async function getBookingsByUserEmail(req: Request, res: Response) {
  try {
    const userBookings = await BookingModel.find({ userEmail: req.params.email });
    userBookings.length ? res.json(userBookings) : res.status(404).send('Bookings were not found by user email');
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings by user email', error: error });
  }
}
