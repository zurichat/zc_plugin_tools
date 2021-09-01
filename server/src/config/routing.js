const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const cors = require("cors");
const path = require("path");

const { NotFoundError } = require("../lib/errors");
const errorMiddleware = require("../middlewares/error");
const router = express.Router();
const routes = require("../routes/index")(router);

module.exports = (app) => {
  app.use(compression());
  app.use(morgan("dev"));

  app.use(
    express.static(path.join(__dirname, "..", "..", "..", "client", "build"))
  );

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  app.use("/api", routes);

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "..", "client", "build"));
  });

  app.use((req, res, next) => {
    next(new NotFoundError());
  });

  app.use(errorMiddleware);

  return app;
};
