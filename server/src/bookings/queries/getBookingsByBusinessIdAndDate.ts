import { BookingModel } from '../model';
import { Request, Response } from 'express';

export async function getBookingsByBusinessIdAndDate(req: Request, res: Response) {
  try {
    const query = await BookingModel.find({
      businessId: req.params.businessId,
      date: req.params.date,
    });
    query.length ? res.json(query) : res.status(404).send('Bookings were not found by your query');
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching bookings for the specified date and business',
      error: error,
    });
  }
}
