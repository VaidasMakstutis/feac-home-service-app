const Booking = require('../../models/bookingModel');
const { bookingSchema } = require('../../utils/validateBooking');

async function newBooking(req, res) {
  const { error } = bookingSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details });
  }

  const { businessId, date, time, userEmail, username, status } = req.body;

  try {
    if (!businessId) {
      res.status(404).json({ message: 'Business not found' });
    }
    const newBooking = new Booking({
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

module.exports = {
  newBooking,
};
