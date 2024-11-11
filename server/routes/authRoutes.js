const express = require('express');
const { login } = require('../authentication/login');
const { register } = require('../authentication/register');

const authRouter = express.Router();

authRouter.post('/login', login);
authRouter.post('/register', register);

module.exports = {
  authRouter,
};
