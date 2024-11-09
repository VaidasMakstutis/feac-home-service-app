const { bookings } = require("../mockBookings");
const { bookingSchema } = require("../validate");

function newBooking(req, res) {
  const { error, value } = bookingSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details });
  }

  const newId = bookings.length + 1;
  bookings.push({
    id: newId,
    businessId: req.body.businessId,
    date: req.body.date,
    time: req.body.time,
    userEmail: req.body.userEmail,
    username: req.body.username,
    status: req.body.status
  });

  res.json({
    success: true,
    message: "New booking added successfully",
    bookingId: newId
  });
}

module.exports = {
  newBooking
};
