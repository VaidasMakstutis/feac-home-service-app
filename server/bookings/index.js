const express = require("express");
const { getAllBookings } = require("./queries/getAllBookings");
const { getBookingsByUserEmail } = require("./queries/getBookingsByUserEmail");
const { newBooking } = require("./mutations/newBooking");
const { deleteBooking } = require("./mutations/deleteBooking");

const bookingsRouter = express.Router();

bookingsRouter.get("/", getAllBookings);
bookingsRouter.get("/user/:email", getBookingsByUserEmail);
bookingsRouter.post("/", newBooking);
bookingsRouter.delete("/:id", deleteBooking);

module.exports = {
  bookingsRouter
};
