const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const cors = require("cors");
const path = require("path");
const frontendBase = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "client_new",
  "build"
);
const frontendIndex = path.join(frontendBase, "zuri-zuri-plugin-tools.js");

const { NotFoundError } = require("../lib/errors");
const errorMiddleware = require("../middlewares/error");
const router = express.Router();
const routes = require("../routes/index")(router);

module.exports = (app) => {
  app.use(compression());
  app.use(morgan("dev"));

  app.use(express.static(frontendBase));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors({ origin: ["*"] }));

  app.use("/api", routes);

  app.get("*", (req, res, next) => {
    res.sendFile(frontendIndex);
  });

  app.get("/zuri-zuri-plugin-tools.js", (req, res) => {
    res.sendFile(frontendIndex);
  });

  app.use((req, res, next) => {
    next(new NotFoundError());
  });

  app.use(errorMiddleware);

  return app;
};
