const { bookings } = require("../mockBookings");

function getBookings(req, res) {
  res.json(bookings);
}

module.exports = {
  getBookings
};
