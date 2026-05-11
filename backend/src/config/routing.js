const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const cors = require("cors");

const { NotFoundError } = require("../lib/errors");
const errorMiddleware = require("../middlewares/error");
const staticEngine = require("./static-engine");
const router = express.Router();
const routes = require("../routes/index")(router);

const env = require("./env");
const isProduction = env.NODE_ENV == "production";

module.exports = (app) => {
  app.use(cors());
  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false })); 

  app.use("/api", routes);

  
  app.use((req, res, next) => {

    const allowedOrigins = [
      'https://zuri.chat', 
      'https://www.zuri.chat', 
      'https://externaltools.zuri.chat', 
      'http://localhost:9000', 
      'http://localhost:8500'
    ];

    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.header("Access-Control-Allow-Origin", origin); // restrict it to the required domain
    }
    next();
  });
  
  if (isProduction) {
    app.set('trust proxy', 1); // Trust first proxy
  } else {    
    app.use(morgan("dev"));
  }

  app.use('/api/v1', routes); // For mounting the root router on the specified path
  app.use("/api/*",(req, res, next) => {
    next(new NotFoundError());
  });

  staticEngine(app); // setup static pages  
  

  app.use(errorMiddleware);

  return app;
};
