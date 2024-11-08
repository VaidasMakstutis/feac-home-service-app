const { businesses } = require("../mockBusinesses");
const Joi = require("joi");

const businessSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  address: Joi.string().required(),
  category: Joi.string().required(),
  contactPerson: Joi.string().required(),
  email: Joi.string().email().required(),
  images: Joi.array()
    .items(
      Joi.object({
        url: Joi.string().uri().required()
      }).required()
    )
    .min(1)
    .required()
});

function newBusiness(req, res) {
  const { error, value } = businessSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details });
  }

  const newId = businesses.length + 1;
  businesses.push({
    id: newId,
    name: req.body.name,
    description: req.body.description,
    address: req.body.address,
    category: req.body.category,
    contactPerson: req.body.contactPerson,
    email: req.body.email,
    images: req.body.images
  });

  res.json({
    success: true,
    message: "New business added successfully",
    businessId: newId
  });
}

module.exports = {
  newBusiness
};
