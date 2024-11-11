const Joi = require("joi");

const categorySchema = Joi.object({
  name: Joi.string().required(),
  bgcolor: Joi.string().required(),
  icon: Joi.string().required()
});

module.exports = {
  categorySchema
};
