const router = require('express').Router()
const pluginInfoRouter = require('./plugin-info')
const giphy = require('./giphy')

module.exports = () => {
  router.use('/giphy', giphy())
  router.use(pluginInfoRouter())
  return router
}
