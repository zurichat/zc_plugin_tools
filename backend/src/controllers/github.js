const response = require("../utils/response");
const axios = require("axios");

class githubController {
  async usersRepo(req, res) {
    try {
      const reposUrl = `https://api.github.com/users/${req.params.username}/repos`;
      const { data } = await axios.get(reposUrl);
      res.status(200).send({ repos: data });
    } catch (e) {
      res.status(400).send(`this error occured ${e}`);
    }
  }

  async fetchRepoBranches(req, res) {
    const { username, repo } = req.params;
    try {
      const url = `https://api.github.com/repos/${username}/${repo}/branches`;
      const { data } = await axios.get(url);
      res.send(response("Repo branches retrieved successfully", data));
    } catch (e) {
      res.send(response(e.message, null, false));
    }
  }
}

module.exports = new githubController();
