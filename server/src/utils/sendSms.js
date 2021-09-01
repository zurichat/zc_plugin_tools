const africasTalking = require("africastalking");

const env = require("../config/env");
const logger = require("../config/logger");
const { InternalServerError } = require("../lib/errors");

const phoneService = africasTalking(env.AFRICAS_TALKING);

const sendSMS = async (to, message) => {
  try {
    await phoneService.SMS.send({ to, message });
  } catch (error) {
    logger.error(error);
    let message = `Something went wrong. SMS could not be sent`;
    throw new InternalServerError(message);
  }
};

module.exports = sendSMS;
