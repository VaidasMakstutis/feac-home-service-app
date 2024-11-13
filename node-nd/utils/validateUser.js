const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(8),
});

module.exports = {
  userSchema,
};
