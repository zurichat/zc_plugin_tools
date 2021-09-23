require("dotenv").config();
const env = process.env ?? process.secrets;
const mode = env.NODE_ENV || "development";

// common environmental variables for all environments
const common = {
  PORT: env.PORT || 8500,
  GIPHY_API_KEY: "dqp8GYkt1VqBk7GjiuKUYj4QdbJS4phJ",
  GOOGLE_DRIVE_KEYS: {
    CLIENT_ID:
      "152389159005-0jjs81403ltk8760kg6gucq6ooq0ig5k.apps.googleusercontent.com",
    CLIENT_SECRET: "t-sDrEjmZqebNgn-JXKQ0kOM",
    REFRESH_TOKEN:
      "1//040xryRuASjorCgYIARAAGAQSNwF-L9IrRM5-vWODhY8Q5hsZWjvybdznK8IFB5Gc02ZRwGzm8lWHwxfzZkXWInykgh1WdhGHBE8",
    REDIRECT_URI: "https://developers.google.com/oauthplayground",
  },
  PLUGIN_ID: "614246a19fd1f4f655d445f3",
};

// environmental variables for development
const development = {
  NODE_ENV: "development",
  DB_URI: "mongodb://localhost:27017/hobbes",
  image_referrer: `http://localhost:8500`,
  url_referrer: `http://localhost:9000`,
  ...common,
};

// environmental variables for production
const production = {
  NODE_ENV: "production",
  DB_URI: env.DB_URI,
  image_referrer: "https://externaltools.zuri.chat",
  url_referrer: "https://zuri.chat",
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
