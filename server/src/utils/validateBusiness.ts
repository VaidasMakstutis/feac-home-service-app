import Joi from 'joi';

export const businessSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  address: Joi.string().required(),
  category: Joi.string().required(),
  contactPerson: Joi.string().required(),
  email: Joi.string().email().required(),
  images: Joi.array()
    .items(
      Joi.object({
        url: Joi.string().uri().required(),
      }).required(),
    )
    .min(1)
    .required(),
});
