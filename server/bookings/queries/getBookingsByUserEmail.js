const Booking = require("../../models/bookingModel");

async function getBookingsByUserEmail(req, res) {
  try {
    const userBookings = await Booking.find({ userEmail: req.params.email });
    userBookings.length ? res.json(userBookings) : res.status(404).send("Bookings were not found by user email");
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings by user email", error: error });
  }
}

module.exports = {
  getBookingsByUserEmail
};
