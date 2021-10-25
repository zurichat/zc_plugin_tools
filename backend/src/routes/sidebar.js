const router = require("express").Router();

const sideBarController = require("../controllers/sidebar");

module.exports = function () {
  router.get("/sidebar", sideBarController.getSideBarEndpoints);

  return router;
};
