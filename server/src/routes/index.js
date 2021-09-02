const router = require("express").Router();
const pluginInfoRouter = require("./plugin-info");
const sideBarRouter = require("./sidebar");


module.exports = () => {
  router.use(pluginInfoRouter());
  router.use(sideBarRouter());

  return router;
};
