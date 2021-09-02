const router = require("express").Router();
const githubController = require('../controllers/github');


module.exports = function () {
  router.get("/repos/:username", githubController.usersRepo);


  return router;
};
