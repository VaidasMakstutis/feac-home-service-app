const express = require("express");
const { getAllBusinesses } = require("./queries/getAllBusinesses");
const { getBusinessById } = require("./queries/getBusinessById");
const { getBusinessesByCategory } = require("./queries/getBusinessesByCategory");
const { newBusiness } = require("./mutations/newBusiness");
const { updateBusiness } = require("./mutations/updateBusiness");

const businessesRouter = express.Router();

businessesRouter.get("/", getAllBusinesses);
businessesRouter.get("/:id", getBusinessById);
businessesRouter.get("/category/:category", getBusinessesByCategory);
businessesRouter.post("/", newBusiness);
businessesRouter.put("/:id", updateBusiness);

module.exports = {
  businessesRouter
};
