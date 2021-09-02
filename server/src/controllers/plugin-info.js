const response = require("../utils/response");

const appInfo = ["GITHUB", "FIGMA", "GOOGLE DRIVE", "GIPHY", "GMAIL"];

class PluginInfoController {
  async getInfo(req, res) {
    res.send(response("Plugin Info returned successfully"));
  }
  async getAllApps(req, res) {
    res.json(appInfo);
  }
}

module.exports = new PluginInfoController();
