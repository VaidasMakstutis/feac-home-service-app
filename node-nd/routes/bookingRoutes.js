const express = require('express');
const { getAllBookings } = require('../bookings/queries/getAllBookings');
const { getBookingsByUserEmail } = require('../bookings/queries/getBookingsByUserEmail');
const { getBookingsByBusinessIdAndDate } = require('../bookings/queries/getBookingsByBusinessIdAndDate');
const { newBooking } = require('../bookings/mutations/newBooking');
const { deleteBooking } = require('../bookings/mutations/deleteBooking');

const bookingsRouter = express.Router();

bookingsRouter.get('/', getAllBookings);
bookingsRouter.get('/user/:email', getBookingsByUserEmail);
bookingsRouter.get('/:businessId/bookings/date/:date', getBookingsByBusinessIdAndDate);
bookingsRouter.post('/', newBooking);
bookingsRouter.delete('/:id', deleteBooking);

module.exports = {
  bookingsRouter,
};
