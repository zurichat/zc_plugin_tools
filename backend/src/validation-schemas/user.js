// This is only a sample file of how to setup validation schemas
const Joi = require("joi");

const signUp = Joi.object({
  name: Joi.string().min(2).max(255),
  email: Joi.string().email().required(),
  phone: Joi.object({
    country: Joi.string().required(),
    number: Joi.string().required(),
  }).required(),
  password: Joi.string().required(),
});

const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = {
  signUp,
  login,
  // sendVerificationToken, - eslint no-undefined
  // verifySignUpToken,  - eslint no-undefined
};
