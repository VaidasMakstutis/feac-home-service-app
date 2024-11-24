import Joi from 'joi';

export const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .required()
    .min(8)
    .max(16)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z]).+$/, 'Need only one uppercase and lowercase'),
});
