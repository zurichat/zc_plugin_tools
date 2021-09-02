const router = require("express").Router();
const pluginInfoRouter = require("./plugin-info");
const googleDriveApi = require("./googledrive/index");

module.exports = () => {
  router.use(pluginInfoRouter());
  router.use(googleDriveApi())
  return router;
};
