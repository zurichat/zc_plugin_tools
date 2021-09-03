const router = require("express").Router();

const pluginInfoRouter = require("./plugin-info");
const googleDriveApi = require("./googledrive");
const sideBarRouter = require("./sidebar");
const giphy = require("./giphy");

const { NotFoundError } = require("../lib/errors");

module.exports = () => {
  router.use(pluginInfoRouter());
  router.use(googleDriveApi());
  router.use(sideBarRouter());
  router.use(giphy());

  // Handle Invalid API routes
  router.use((req, res, next) => {
    next(new NotFoundError());
  });

  return router;
};
