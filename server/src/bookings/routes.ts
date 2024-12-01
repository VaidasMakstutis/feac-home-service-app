import express from 'express';
import { getAllBookings } from './queries/getAllBookings';
import { getBookingsByUserEmail } from './queries/getBookingsByUserEmail';
import { getBookingsByBusinessIdAndDate } from './queries/getBookingsByBusinessIdAndDate';
import { newBooking } from './mutations/newBooking';
import { deleteBooking } from './mutations/deleteBooking';

export const bookingsRouter = express.Router();

bookingsRouter.get('/', getAllBookings);
bookingsRouter.get('/user/:email', getBookingsByUserEmail);
bookingsRouter.get('/:businessId/bookings/date/:date', getBookingsByBusinessIdAndDate);
bookingsRouter.post('/', newBooking);
bookingsRouter.delete('/:id', deleteBooking);
