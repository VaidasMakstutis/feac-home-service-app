import { BookingModel } from '../../models/bookingModel';
import { bookingSchema } from '../../utils/validateBooking';
import { Request, Response, NextFunction } from 'express';

export async function newBooking(req: Request, res: Response, next: NextFunction): Promise<any> {
  const { error } = bookingSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details });
  }

  const { businessId, date, time, userEmail, username, status } = req.body;

  try {
    if (!businessId) {
      res.status(404).json({ message: 'Business not found' });
    }
    const newBooking = new BookingModel({
      businessId: businessId,
      date,
      time,
      userEmail,
      username,
      status,
    });
    const createdBooking = await newBooking.save();
    res.status(201).json({
      message: 'New booking added successfully',
      booking: createdBooking,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error: error });
  }
}
