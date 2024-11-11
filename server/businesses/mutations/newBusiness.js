const { businessSchema } = require("../../utils/validateBusiness");
const Business = require("../../models/businessModel");

async function newBusiness(req, res) {
  const { error } = businessSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      error: "Validation failed",
      message: error.details.map(e => e.message)
    });
  }

  const business = req.body;

  // Validation if the business name is unique
  const existingBusiness = await Business.findOne({ name: business.name });
  if (existingBusiness) {
    return res.status(400).json({
      error: "Validation failed",
      message: `Name "${business.name}" is already taken. Please create a unique business name.`
    });
  }

  try {
    const newBusiness = new Business(business);
    const createdBusiness = await newBusiness.save();
    res.status(201).json({
      message: "New business added successfully",
      business: createdBusiness
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating business", error: error });
  }
}

module.exports = {
  newBusiness
};
