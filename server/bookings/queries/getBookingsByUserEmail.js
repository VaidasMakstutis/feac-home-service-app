const { bookings } = require("../mockBookings");

function getBookingsByUserEmail(req, res) {
  const userBookings = bookings.filter(user => user.userEmail === req.params.email);
  userBookings.length ? res.json(userBookings) : res.status(404).send("Bookings were not found by user email");
}

module.exports = {
  getBookingsByUserEmail
};
