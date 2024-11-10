const Business = require("../businessModel");

// Function does not work, return empty array
async function getBusinessesByCategory(req, res) {
  try {
    const filteredBusinesses = await Business.find({
      category: req.params.category.toLowerCase()
    });
    filteredBusinesses.length ? res.json(filteredBusinesses) : res.status(404).send("Business not found by category");
  } catch (error) {
    res.status(500).json({ message: "Error fetching businesses by category", error: error });
  }
}
module.exports = {
  getBusinessesByCategory
};
