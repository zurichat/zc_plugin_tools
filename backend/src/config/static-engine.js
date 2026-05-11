const express = require("express");

const env = require("./env");
const isProduction = env.NODE_ENV == "production";

const path = require("path");

const frontendBase = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "frontend",
  "build"
);
const rootConfigBase = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "single_spa",
  "build"
);
const frontendIndex = path.join(frontendBase, "zuri-zuri-plugin-tools.js");
const rootConfigIndex = path.join(rootConfigBase, "");

const staticEngine = (app) => {
  app.use(express.static(frontendBase));
  app.use(express.static(rootConfigIndex));

  app.get("/zuri-zuri-plugin-tools.js", (req, res) => {
    res.sendFile(frontendIndex);
  });

  // y
};

module.exports = staticEngine;
