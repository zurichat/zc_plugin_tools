const router = require("express").Router();
const figmaController = require("../controllers/figma");

module.exports = function () {
  router.get("/figma/teamproject", figmaController.teamProject);

  return router;
};
