const { userModel } = require('../models/userModel');
const { generateToken } = require('../utils/generateToken');

async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    const findUser = await userModel.findOne({ email });
    if (!findUser) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    const passwordIsCorrect = await findUser.isCorrectPassword(password);
    if (!passwordIsCorrect) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    const token = generateToken({ id: findUser._id });

    return res.status(200).json({ status: 'success', token, user: findUser });
  } catch (error) {
    return res.status(500).json({ message: 'Error logging in.', error: error.message });
  }
}

module.exports = {
  login,
};
