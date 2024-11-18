import { Booking } from '../../models/bookingModel';
import { Request, Response } from 'express';

export async function deleteBooking(req: Request, res: Response) {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
    !deletedBooking
      ? res.status(404).send('Booking not found by ID')
      : res.json({
          message: 'Booking deleted successfully',
          booking: deletedBooking,
        });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting booking', error: error });
  }
}
