import Joi from 'joi';

export const categorySchema = Joi.object({
  name: Joi.string().required(),
  bgcolor: Joi.string().required(),
  icon: Joi.string().required(),
});
