const router = require("express").Router();
const pluginInfoRouter = require("./plugin-info");

module.exports = () => {
  router.use(pluginInfoRouter());

  return router;
};
