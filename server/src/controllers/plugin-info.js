const response = require("../utils/response");

const apps = ["GITHUB", "FIGMA", "GOOGLE DRIVE", "GIPHY", "GMAIL"];

class PluginInfoController {
  async getInfo(req, res) {
    res.send(response("Plugin Info returned successfully"));
  }
  async getAllApps(req, res) {
    res.json(apps);
  }
}

module.exports = new PluginInfoController();
