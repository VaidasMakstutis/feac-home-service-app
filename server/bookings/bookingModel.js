const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  businessId: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
