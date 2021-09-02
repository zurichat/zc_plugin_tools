const response = require("../utils/response");

const appInfo = [
  {
    name: "GITHUB",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
  {
    name: "FIGMA",
    logo: "https://cdn.sanity.io/images/599r6htc/production/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=670&h=670&q=75&fit=max&auto=format",
  },
  {
    name: "GOOGLE DRIVE",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png",
  },
  {
    name: "GIPHY",
    logo: "https://images-eu.ssl-images-amazon.com/images/I/113Ja712zxL.png",
  },
  {
    name: "GMAIL",
    logo: "https://cdn.icon-icons.com/icons2/2631/PNG/512/gmail_new_logo_icon_159149.png",
  },
];

class PluginInfoController {
  async getInfo(req, res) {
    res.send(response("Plugin Info returned successfully"));
  }
  async getAllApps(req, res) {
    res.json(appInfo);
  }
}

module.exports = new PluginInfoController();
