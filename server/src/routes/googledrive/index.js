const router = require("express").Router();

const googleDrvieController = require("../../controllers/googledrive/index");

module.exports = function () {
  router.get("/", googleDrvieController.index);

  return router;
};
