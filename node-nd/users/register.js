const { userModel } = require('../models/userModel');
const { userSchema } = require('../utils/validateUser');

async function register(req, res) {
  const userData = req.body;

  // Joi validation
  const { error } = userSchema.validate(userData);
  if (error) {
    return res.status(400).json({
      error: 'Validation failed',
      message: error.details.map((e) => e.message),
    });
  }

  const findUser = await userModel.findOne({ email: userData.email });
  if (findUser) {
    return res.status(400).json({ message: 'User with this email already exists' });
  }

  try {
    const createdUser = userModel(userData);
    await createdUser.save();

    return res.status(201).json({
      message: 'User registered successfully',
      userData: createdUser,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Error registering new user.', error: error.message });
  }
}

module.exports = {
  register,
};
