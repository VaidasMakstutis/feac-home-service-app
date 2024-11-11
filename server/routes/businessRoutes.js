const express = require("express");
const { getAllBusinesses } = require("../businesses/queries/getAllBusinesses");
const { getBusinessById } = require("../businesses/queries/getBusinessById");
const { getBusinessesByCategory } = require("../businesses/queries/getBusinessesByCategory");
const { newBusiness } = require("../businesses/mutations/newBusiness");
const { updateBusiness } = require("../businesses/mutations/updateBusiness");

const businessesRouter = express.Router();

businessesRouter.get("/", getAllBusinesses);
businessesRouter.get("/:id", getBusinessById);
businessesRouter.get("/category/:category", getBusinessesByCategory);
businessesRouter.post("/", newBusiness);
businessesRouter.put("/:id", updateBusiness);

module.exports = {
  businessesRouter
};
