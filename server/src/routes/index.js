<<<<<<< HEAD
const router = require("express").Router();
const pluginInfoRouter = require("./plugin-info");
const googleDriveApi = require("./googledrive/index");

module.exports = () => {
  router.use(pluginInfoRouter());
  router.use(googleDriveApi());
  return router;
};
=======
const router = require('express').Router()
const pluginInfoRouter = require('./plugin-info')
const giphy = require('./giphy')

module.exports = () => {
  router.use('/giphy', giphy())
  router.use(pluginInfoRouter())
  return router
}
>>>>>>> 2a0a6fc3b3848f1d7180daa7de0f52422b34bcbc
