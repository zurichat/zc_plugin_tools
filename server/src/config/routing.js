const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const { NotFoundError } = require("../lib/errors");
const errorMiddleware = require("../middlewares/error");
const staticEngine = require("./static-engine");
const router = express.Router();
const routes = require("../routes/index")(router);

module.exports = (app) => {
  app.use(compression());
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors(corsOptions));

  app.use("/api", routes);

  staticEngine(app);

  app.use((req, res, next) => {
    next(new NotFoundError());
  });

  app.use(errorMiddleware);

  return app;
};
