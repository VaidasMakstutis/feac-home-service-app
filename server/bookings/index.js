const express = require("express");
const { getBookings } = require("./queries/getBookings");
const { getBookingsByUserEmail } = require("./queries/getBookingsByUserEmail");
const { newBooking } = require("./mutations/newBooking");
const { deleteBooking } = require("./mutations/deleteBooking");

const bookingsRouter = express.Router();

bookingsRouter.get("/", getBookings);
bookingsRouter.get("/user/:email", getBookingsByUserEmail);
bookingsRouter.post("/", newBooking);
bookingsRouter.delete("/:id", deleteBooking);

module.exports = {
  bookingsRouter
};
