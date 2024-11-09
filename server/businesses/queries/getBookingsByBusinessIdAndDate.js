const { bookings } = require("../../bookings/mockBookings");

function getBookingsByBusinessIdAndDate(req, res) {
  const query = bookings.filter(booking => booking.businessId == req.params.businessId && booking.date === req.params.date);
  query.length ? res.json(query) : res.status(404).send("No results were found for your query");
}

module.exports = {
  getBookingsByBusinessIdAndDate
};
