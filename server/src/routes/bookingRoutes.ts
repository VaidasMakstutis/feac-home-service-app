import express from 'express';
import { getAllBookings } from '../bookings/queries/getAllBookings';
import { getBookingsByUserEmail } from '../bookings/queries/getBookingsByUserEmail';
import { getBookingsByBusinessIdAndDate } from '../bookings/queries/getBookingsByBusinessIdAndDate';
import { newBooking } from '../bookings/mutations/newBooking';
import { deleteBooking } from '../bookings/mutations/deleteBooking';

export const bookingsRouter = express.Router();

bookingsRouter.get('/', getAllBookings);
bookingsRouter.get('/user/:email', getBookingsByUserEmail);
bookingsRouter.get('/:businessId/bookings/date/:date', getBookingsByBusinessIdAndDate);
bookingsRouter.post('/', newBooking);
bookingsRouter.delete('/:id', deleteBooking);
