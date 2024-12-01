import { BookingModel } from '../model';
import { bookingSchema } from '../validate';
import { Request, Response, NextFunction } from 'express';

export async function newBooking(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { error } = bookingSchema.validate(req.body);
  if (error) {
    res.status(400).json({ error: error.details });
    return;
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
