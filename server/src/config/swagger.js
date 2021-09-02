const swaggerJsDoc = require('swagger-jsdoc')
const env = require('./env')

const swagger = {
  swaggerDefinition: {
    host: `localhost:${env.PORT}/api`,
    info: {
      version: '1.0.0',
      description: 'Team Hobbes backend',
      title: 'Team Hobbes Backend API',
      contact: {
        name: 'Claret Nnamocha (-claret-)',
        email: 'devclareo@gmail.com',
      },
    },
  },
  apis: ['./src/docs/*.yml'],
}

const config = swaggerJsDoc(swagger)

module.exports = { config }
