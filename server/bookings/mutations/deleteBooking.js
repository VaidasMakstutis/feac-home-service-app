const { bookings } = require("../mockBookings");

function deleteBooking(req, res) {
  const index = bookings.findIndex(booking => booking.id == req.params.id);
  if (index !== -1) {
    bookings.splice(index, 1);
    res.send("Booking has been deleted");
  } else {
    res.status(404).send("Booking was not found");
  }
}

module.exports = {
  deleteBooking
};
