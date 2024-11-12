const express = require('express');
const { login } = require('../users/login');
const { register } = require('../users/register');

const authRouter = express.Router();

authRouter.post('/login', login);
authRouter.post('/register', register);

module.exports = {
  authRouter,
};
