const express = require("express");
const { getAllCategories } = require("./queries/getAllCategories");
const { newCategory } = require("./mutations/newCategory");

const categoriesRouter = express.Router();

categoriesRouter.get("/", getAllCategories);
categoriesRouter.post("/", newCategory);

module.exports = {
  categoriesRouter
};
