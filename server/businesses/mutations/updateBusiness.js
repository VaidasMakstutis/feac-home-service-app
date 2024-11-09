const { businesses } = require("../mockBusinesses");
const { businessSchema } = require("../validate");

function updateBusiness(req, res) {
  const { error, value } = businessSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details });
  }
  const { name, description, address, category, contactPerson, email, images } = req.body;
  const businessId = businesses.findIndex(business => business.id === parseInt(req.params.id));

  if (businessId !== -1) {
    businesses[businessId] = {
      ...businesses[businessId],
      name,
      description,
      address,
      category,
      contactPerson,
      email,
      images
    };
    res.status(200).json({ message: "Business has been updated successfully" }), res.json(businesses[businessId]);
  } else {
    res.status(404).json({ message: "Business not found" });
  }
}

module.exports = {
  updateBusiness
};
