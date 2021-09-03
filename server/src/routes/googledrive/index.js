const router = require("express").Router();

const googleDrvieController = require("../../controllers/googledrive/index");

module.exports = function () {
  router.get("/googledrive", googleDrvieController.index);
  router.get("/googledrive/get-files-list", googleDrvieController.getFilesList);
  return router;
};
