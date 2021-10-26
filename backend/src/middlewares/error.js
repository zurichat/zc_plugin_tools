const mongoose = require("mongoose");

const env = require("../config/env");
const logger = require("../config/logger/index");
const response = require("../utils/response");

const mongooseValidationError = mongoose.Error.ValidationError;
const inProduction = env.NODE_ENV === "production";

const errorNames = [
  "CastError",
  "JsonWebTokenError",
  "ValidationError",
  "SyntaxError",
  "MongooseError",
  "MongoError",
];

const errorMiddleware = function (error, req, res, next) {
  const errorMessage = error.message ?? error;
  logger.error(error);

  if (error?.name === "ZC-plugin-tools-API-Error" || error?.isOperational) {
    return res
      .status(error.statusCode)
      .send(response(error.message, null, false));
  }

  if (error instanceof mongooseValidationError) {
    const errorMessages = Object.values(error.errors).map((e) => e.message);
    return res.status(400).send(response(errorMessages[0], null, false));
  }

  if (error?.name == "MongoError" && error?.code == 11000) {
    const field = Object.entries(error.keyValue)[0][0];
    const data = error && error.errmsg ? error.errmsg : null;

    return res
      .status(400)
      .send(response(`${field} already exists`, data, false));
  }

  if (errorNames.includes(error.name)) {
    return res.status(400).send(response(error.message, null, false));
  }

  // Handle any error that is not captured:
  const message = inProduction
    ? "Something failed. Please contact an Admin"
    : errorMessage;

  return res.status(500).send(response(message, null, false));
};

module.exports = errorMiddleware;
