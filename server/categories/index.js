const express = require("express");
const { getCategories } = require("./queries/getCategories");
const { newCategory } = require("./mutations/newCategory");

const categoriesRouter = express.Router();

categoriesRouter.get("/", getCategories);
categoriesRouter.post("/", newCategory);

module.exports = {
  categoriesRouter
};
