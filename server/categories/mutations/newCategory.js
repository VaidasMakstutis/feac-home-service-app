const { categories } = require("../mockCategories");
const { categorySchema } = require("../validate");

function newCategory(req, res) {
  const { error, value } = categorySchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details });
  }

  const newId = categories.length + 1;
  categories.push({ id: newId, name: req.body.name, bgcolor: req.body.bgcolor, icon: req.body.icon });
  res.json({
    success: true,
    message: "New category added successfully",
    categoryId: newId
  });
}

module.exports = {
  newCategory
};
