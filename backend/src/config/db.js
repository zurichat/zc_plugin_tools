const mongoose = require("mongoose");
const env = require("./env");
const logger = require("./logger");
const { withUnderScore } = require("../utils/logFormatter");

const db = env.DB_URI;

module.exports = () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => {
      logger.info(`Connected to ${withUnderScore(db)}`);
    })
    .catch((err) => {
      return logger.error(err.message);
    });
};
