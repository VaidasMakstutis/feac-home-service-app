const { categories } = require("../mockCategories");

function getCategories(req, res) {
  res.json(categories);
}

module.exports = {
  getCategories
};
