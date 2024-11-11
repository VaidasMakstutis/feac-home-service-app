const Category = require("../categoryModel");

async function getAllCategories(req, res) {
  try {
    const categories = await Category.find();
    categories.length ? res.json(categories) : res.status(404).send("No categories in database");
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories", error: error });
  }
}

module.exports = {
  getAllCategories
};
