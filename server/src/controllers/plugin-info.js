const response = require("../utils/response");

class PluginInfoController {
  async getInfo(req, res) {
    
    res.send(response("Plugin Info returned successfully"));
  }

   
}

module.exports = new PluginInfoController();
