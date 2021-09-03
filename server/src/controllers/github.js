const axios = require("axios");
const response = require("../utils/response");

class GithubController {
  async getUser(req, res) {
    try {
      const { user } = req.params;
      const resp = await axios.get(`https://api.github.com/users/${user}`);
      res.status(200).json(resp.data);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async fetchRepoBranches(req, res) {
    const { username, repo } = req.params;
    try {
      const url = `https://api.github.com/repos/${username}/${repo}/branches`;
      const {data} = await axios.get(url);
      res.send(response("Repo branches retrieved successfully", data));
    } catch(e){
      res.send(response(e.message, null, false));
    }
  }

}

module.exports = new GithubController();
