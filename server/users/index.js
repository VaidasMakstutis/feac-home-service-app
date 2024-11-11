const express = require("express");
const { login } = require("./login");
const { register } = require("./register");

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/register", register);

module.exports = {
  authRouter
};
