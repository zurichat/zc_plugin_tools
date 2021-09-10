const router = require("express").Router();

const googleDrvieController = require("../../controllers/googledrive/index");

module.exports = function () {
  router.get("/googledrive/info", googleDrvieController.index);
  router.get("/googledrive/data", googleDrvieController.getData)

  router.get("/googledrive/get-files-list", googleDrvieController.getFilesList);
  return router;
};
