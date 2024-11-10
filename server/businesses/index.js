const express = require("express");
const { getAllBusinesses } = require("./queries/getAllBusinesses");
const { getBusinessById } = require("./queries/getBusinessById");
const { getBusinessesByCategory } = require("./queries/getBusinessesByCategory");
const { getBookingsByBusinessIdAndDate } = require("./queries/getBookingsByBusinessIdAndDate");
const { newBusiness } = require("./mutations/newBusiness");
const { updateBusiness } = require("./mutations/updateBusiness");

const businessesRouter = express.Router();

businessesRouter.get("/", getAllBusinesses);
businessesRouter.get("/:id", getBusinessById);
businessesRouter.get("/category/:category", getBusinessesByCategory);
businessesRouter.get("/:businessId/bookings/date/:date", getBookingsByBusinessIdAndDate);
businessesRouter.post("/", newBusiness);
businessesRouter.put("/:id", updateBusiness);

module.exports = {
  businessesRouter
};
