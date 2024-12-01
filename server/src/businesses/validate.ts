import Joi from 'joi';

export const businessSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  address: Joi.string().required(),
  category: Joi.string().required(),
  contactPerson: Joi.string().required(),
  email: Joi.string().email().required(),
  image: Joi.string().required(),
});
