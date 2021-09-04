const router = require("express").Router();
const githubRepoController = require('../controllers/githubRepo');


module.exports = function () {
  router.get("/github/repos/:user", githubRepoController.usersRepo);


  return router;
}