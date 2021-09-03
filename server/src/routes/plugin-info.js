const router = require("express").Router();

const pluginInfoController = require("../controllers/plugin-info");

module.exports = function () {
  router.get("/info", pluginInfoController.getInfo);

  return router;
};
