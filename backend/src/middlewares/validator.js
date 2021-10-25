// This file is the Form validation middleware - using Joi.

const { BadRequestError } = require("../lib/errors");

const validator = (schema, source = "body") => {
  return (req, res, next) => {
    const errors = validate(req[source] || {}, schema);

    if (errors && errors.length > 0) throw new BadRequestError(errors[0]);

    next();
  };
};

function validate(data, schema) {
  const { error } = schema.validate(data);

  if (!error) return;
  return error.details.map((error) => error.message);
}

module.exports = validator;
