const githubRouter = require("express").Router();

const githubController = require("../controllers/github");

module.exports = function () {
  githubRouter.get("/github/:user", githubController.getUser);

  githubRouter.get("/github/:username/:repo", githubController.fetchRepoBranches);

  return githubRouter;
};
