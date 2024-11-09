const { businesses } = require("../mockBusinesses");

function getBusinessesByCategory(req, res) {
  const filteredBusinesses = businesses.filter(business => business.category.toLowerCase() === req.params.category.toLowerCase());
  filteredBusinesses.length ? res.json(filteredBusinesses) : res.status(404).send("Businesses were not found by category");
}

module.exports = {
  getBusinessesByCategory
};
