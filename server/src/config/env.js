require("dotenv").config();
const env = process.env.NODE_ENV || "development";

// common environmental variables for all environments
const common = {
  PORT: process.env.PORT || 3600,
};

// environmental variables for development
const development = {
  NODE_ENV: "development",
  DB_URI: "mongodb://localhost:27017/hobbes",
  ...common,
};

// environmental variables for production
const production = {
  NODE_ENV: "production",
  DB_URI: process.env.DB_URI,
  ...common,
};

// environmental variables for testing
const test = {
  NODE_ENV: "test",
  DB_URI: "mongodb://localhost:27017/hobbes_test",
  ...common,
};

const config = {
  development,
  production,
  test,
};

module.exports = config[env];
