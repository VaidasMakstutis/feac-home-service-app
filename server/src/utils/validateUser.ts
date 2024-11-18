import Joi from 'joi';

export const userSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(8),
});
