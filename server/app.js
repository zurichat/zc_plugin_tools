require('express-async-errors')
require('dotenv').config()
const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express')
const env = require('./src/config/env')
const swagger = require('./src/config/swagger')
const logger = require('./src/config/logger')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger.config))

// require("./src/config/db")();
require('./src/config/routing')(app)

const PORT = env.PORT

app.listen(PORT, () => {
  logger.info(`app listening at port 3600 in ${env.NODE_ENV} mode`)
})
