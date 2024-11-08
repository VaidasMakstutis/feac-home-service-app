const { bookings } = require("../mockBookings");
const Joi = require("joi");

const bookingSchema = Joi.object({
  businessId: Joi.number().required(),
  date: Joi.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/) // YYYY-MM-DD format
    .messages({
      "string.regex.base": "Date must be in the format YYYY-MM-DD" // Custom error message for regex validation
    })
    .required()
    .messages({
      "any.required": "Date is required" // Custom error message if the date is missing
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

const data = { date: "2024-11-08" }; // Valid date (YYYY-MM-DD format)
const { error, value } = bookingSchema.validate(data);

if (error) {
  console.log(error.details);
} else {
  console.log("Valid date:", value);
}

function newBooking(req, res) {
  const { error, value } = bookingSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details });
  }

  const newId = bookings.length + 1;
  bookings.push({
    id: newId,
    businessId: req.body.businessId,
    date: req.body.date,
    time: req.body.time,
    userEmail: req.body.userEmail,
    username: req.body.username,
    status: req.body.status
  });

  res.json({
    success: true,
    message: "New booking added successfully",
    bookingId: newId
  });
}

module.exports = {
  newBooking
};
