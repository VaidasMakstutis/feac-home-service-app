const { businesses } = require("../mockBusinesses");
const { businessSchema } = require("../validate");

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
