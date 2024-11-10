const Category = require("../categoryModel");

async function getCategories(req, res) {
  const categories = await Category.find();
  categories.length ? res.json(categories) : res.status(404).send("No categories in database");
}

module.exports = {
  getCategories
};
