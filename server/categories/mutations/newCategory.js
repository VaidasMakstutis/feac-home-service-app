const { categorySchema } = require("../validate");
const Category = require("../categoryModel");

async function newCategory(req, res) {
  // Joi validation
  const { error } = categorySchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      error: "Validation failed",
      message: error.details.map(e => e.message)
    });
  }

  const { name, bgcolor, icon } = req.body;

  // Validation if the category name is unique
  const existingCategory = await Category.findOne({ name });
  if (existingCategory) {
    return res.status(400).json({
      error: "Validation failed",
      message: `Name "${name}" is already taken. Please create a unique category name.`
    });
  }

  const newCategory = new Category({
    name,
    bgcolor,
    icon
  });

  const createdCategory = await newCategory.save();
  res.status(201).json({
    message: "New category added successfully",
    category: createdCategory
  });
}

module.exports = {
  newCategory
};
