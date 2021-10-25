const express = require("express");

const path = require("path");
const frontendBase = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "frontend",
  "build"
);
const frontendIndex = path.join(frontendBase, "zuri-zuri-plugin-tools.js");

const staticEngine = (app) => {
  app.use(express.static(frontendBase));

  // app.get("*", (req, res, next) => {
  //   res.sendFile(frontendIndex);
  // });

  app.get("/zuri-zuri-plugin-tools.js", (req, res) => {
    res.sendFile(frontendIndex);
  });

  app.use(
    express.static(path.join(__dirname, "..", "..", "..", "frontend", "build"))
  );
};

module.exports = staticEngine;
