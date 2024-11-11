const Business = require('../../models/businessModel');

async function getBusinessById(req, res) {
  try {
    const business = await Business.findById(req.params.id);
    business ? res.json(business) : res.status(404).send('Business not found by ID');
  } catch (error) {
    res.status(500).json({ message: 'Error fetching business by ID', error: error });
  }
}

module.exports = {
  getBusinessById,
};
