const router = require("express").Router();
const externaltools = require("../controllers/tools");

module.exports = function () {
  router.get("/tools", externaltools.getAllAvailableTools);
  router.get("/tools/recommended", externaltools.getRecommendedTools);
  router.get("/tools/organizationtools", externaltools.getOrganizationTools);
  router.post("/tools/addtools", externaltools.addTool);

  return router;
};
