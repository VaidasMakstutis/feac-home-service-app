const Joi = require("joi");

const bookingSchema = Joi.object({
  businessId: Joi.number().required(),
  date: Joi.string()
    .pattern(/^\d{4}-\d{2}-\d{2}$/) // Regex for YYYY-MM-DD format
    .required()
    .messages({
      "string.pattern.base": "Date must be in the format YYYY-MM-DD",
      "any.required": "Date is required"
    }),
  time: Joi.string()
    .pattern(/^([01][0-9]|2[0-3]):([0-5][0-9])$/) // Regex for HH:mm format
    .required()
    .messages({
      "string.pattern.base": "Time must be in the format HH:mm (24-hour)",
      "any.required": "Time is required"
    }),
  userEmail: Joi.string().email().required().messages({
    "string.email": "Please provide a valid email address.",
    "any.required": "Email is required."
  }),
  username: Joi.string().required(),
  status: Joi.string().required()
});

module.exports = {
  bookingSchema
};
