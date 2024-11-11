const express = require("express");
const { getAllCategories } = require("../categories/queries/getAllCategories");
const { newCategory } = require("../categories/mutations/newCategory");

const categoriesRouter = express.Router();

categoriesRouter.get("/", getAllCategories);
categoriesRouter.post("/", newCategory);

module.exports = {
  categoriesRouter
};
