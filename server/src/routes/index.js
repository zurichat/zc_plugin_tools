const router = require('express').Router()
const pluginInfoRouter = require('./plugin-info')
const giphy = require('./giphy')
const googleDriveApi = require("./googledrive");

module.exports = () => {
  router.use('/giphy', giphy())
  router.use(pluginInfoRouter())
  router.use(googleDriveApi());
  return router
}
