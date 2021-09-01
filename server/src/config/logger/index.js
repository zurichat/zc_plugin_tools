const env = require("../env");
const devLogger = require("./dev");
const prodLogger = require("./prod");

const logger = env.NODE_ENV === "production" ? prodLogger : devLogger;

module.exports = logger;
