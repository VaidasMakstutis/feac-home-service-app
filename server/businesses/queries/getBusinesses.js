const { businesses } = require("../mockBusinesses");

function getBusinesses(req, res) {
  res.json(businesses);
}

module.exports = {
  getBusinesses
};
