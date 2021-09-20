const router = require("express").Router();
const externaltools = require("../controllers/tools");

module.exports = function () {
  router.get("/tools", externaltools.getAllAvailableTools);
  router.get("/tools/recommended", externaltools.getRecommendedTools);

  return router;
};
