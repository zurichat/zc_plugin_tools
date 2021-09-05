require("dotenv").config();
const env = process.env ?? process.secrets;
const mode = env.NODE_ENV || "development";

// common environmental variables for all environments
const common = {
  PORT: env.PORT || 3600,
  GIPHY_API_KEY: env.GIPHY_API_KEY,
  GOOGLE_DRIVE_KEYS: {
    CLIENT_ID: env.GOOGLE_CLIENT_ID,
    CLIENT_SECRET: env.GOOGLE_CLIENT_SECRET,
    REFRESH_TOKEN: env.GOOGLE_REFRESH_TOKEN,
    REDIRECT_URI: "https://developers.google.com/oauthplayground",
  },
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
  DB_URI: env.DB_URI,
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

module.exports = config[mode];
