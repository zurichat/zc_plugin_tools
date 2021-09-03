const axios = require("axios");

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
}

module.exports = new PluginInfoController();
