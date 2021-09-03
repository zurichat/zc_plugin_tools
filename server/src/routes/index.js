const router = require("express").Router();
const pluginInfoRouter = require("./plugin-info");
const googleDriveApi = require("./googledrive");
const sideBarRouter = require("./sidebar");
const githubRouter = require("./github");
const giphy = require("./giphy");

module.exports = () => {
  router.use(pluginInfoRouter());
  router.use(googleDriveApi());
  router.use(sideBarRouter());
  router.use(giphy());
  router.use(githubRouter());

  // Handle Invalid API routes
  router.use((req, res, next) => {
    next(new NotFoundError());
  });

  return router;
};
