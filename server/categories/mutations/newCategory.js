const { categories } = require("../mockCategories");
const Joi = require("joi");

const categorySchema = Joi.object({
  name: Joi.string().required(),
  bgcolor: Joi.object({
    hex: Joi.string().required()
  }).required(),
  icon: Joi.object({
    url: Joi.string().required()
  }).required()
});

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
