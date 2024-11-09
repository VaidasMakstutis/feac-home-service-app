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

module.exports = {
  categorySchema
};
