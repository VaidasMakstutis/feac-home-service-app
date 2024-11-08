const { businesses } = require("../mockBusinesses");

function getBusinessById(req, res) {
  const business = businesses.find(business => business.id === parseInt(req.params.id));
  business ? res.json(business) : res.status(404).send("Business not found by ID");
}

module.exports = {
  getBusinessById
};
