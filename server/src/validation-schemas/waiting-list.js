const Joi = require("joi");

const validEmail = Joi.object({
  email: Joi.string().email().required(),
});

module.exports = {
  validEmail,
};
