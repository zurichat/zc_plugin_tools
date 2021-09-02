const router = require("express").Router();
const pluginInfoRouter = require("./plugin-info");
const githubRouter = require("./github");

module.exports = () => {
  router.use(pluginInfoRouter());
  router.use(githubRouter());

  return router;
};
