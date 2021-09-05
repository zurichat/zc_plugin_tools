const router = require("express").Router();

const fetchApiController = require("../controllers/fetch-api");


module.exports = function () {
    console.log()
  router.get("/googledrive/data", fetchApiController.getApi);


  return router;
};