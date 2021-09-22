require("express-async-errors");
require("dotenv").config();
const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const env = require("./src/config/env");
const swagger = require("./src/config/swagger");
const logger = require("./src/config/logger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger.config));

// require("./src/config/db")();
require("./src/config/routing")(app);

const PORT = 8500 || env.PORT;

app.listen(PORT, () => {
  logger.info(`app listening at port ${PORT} in ${env.NODE_ENV} mode`);
});
