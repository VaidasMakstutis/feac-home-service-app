const Booking = require("../bookingModel");

async function getAllBookings(req, res) {
  try {
    const bookings = await Booking.find();
    bookings.length ? res.json(bookings) : res.status(404).send("No bookings in database");
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error: error });
  }
}

module.exports = {
  getAllBookings
};
