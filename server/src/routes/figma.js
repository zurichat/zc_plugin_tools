const router = require("express").Router();
const figmaController = require("../controllers/figma");

module.exports = function () {
  router.get("/figma/teamproject/k3RnvKGOXgCWl0lEtwYP3h", figmaController.teamProject);

  return router;
};
