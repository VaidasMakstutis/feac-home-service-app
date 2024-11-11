const Business = require("../businessModel");

async function getAllBusinesses(req, res) {
  try {
    const businesses = await Business.find();
    businesses.length ? res.json(businesses) : res.status(404).send("No businesses in database");
  } catch (error) {
    res.status(500).json({ message: "Error fetching businesses", error: error });
  }
}

module.exports = {
  getAllBusinesses
};
