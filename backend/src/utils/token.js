const jwt = require("jsonwebtoken");
const env = require("../config/env");

const generateToken = ({ length, range, prefix }) => {
  prefix = prefix || "";
  let token = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * range.length);
    token += range[randomIndex];
  }
  return prefix + token;
};

const generateSignUpToken = (token = null) => {
  let range = Array.from(Array(10).keys());
  let tokenOptions = { length: 5, range, prefix: "FH-" };
  let newToken = generateToken(tokenOptions);
  while (token == newToken) newToken = generateToken(tokenOptions);

  return newToken;
};

const generateAuthToken = (user) => {
  let dataToSign = { id: user.id, email: user.email };
  return jwt.sign({ ...dataToSign }, env.JWT_SECRET_KEY, { expiresIn: "24h" });
};

module.exports = { generateSignUpToken, generateAuthToken };
