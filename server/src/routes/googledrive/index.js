const router = require("express").Router();

const googleDrvieController = require("../../controllers/googledrive/index");

const fetchApiController = require("../controllers/index");

module.exports = function () {
  router.get("/googledrive/info", googleDrvieController.index);
  router.get("/googledrive/get-files-list", googleDrvieController.getFilesList);
  return router;
};



module.exports = function () {
    console.log()
  router.get("/googledrive/data", fetchApiController.getApi);


  return router;
};
