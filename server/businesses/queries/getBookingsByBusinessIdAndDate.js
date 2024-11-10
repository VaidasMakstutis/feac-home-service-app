const Booking = require("../../bookings/bookingModel");

// Cannot GET /api/bookings/27/bookings/date/2024-11-10
async function getBookingsByBusinessIdAndDate(req, res) {
  try {
    const query = await Booking.find({
      businessId: req.params.businessId,
      date: new Date(req.params.date)
    });
    query.length ? res.json(query) : res.status(404).send("No results were found for your query");
  } catch (error) {
    res.status(500).json({
      message: "Error fetching bookings for the specified date and business",
      error: error
    });
  }
}

module.exports = {
  getBookingsByBusinessIdAndDate
};
