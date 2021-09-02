const response = require("../utils/response");

const appInfo = [
  {
    name: "GITHUB",
    logo: "https://res.cloudinary.com/pablowolf/image/upload/v1630613460/GitHub-Mark_v0odrb.png",
  },
  {
    name: "FIGMA",
    logo: "https://res.cloudinary.com/pablowolf/image/upload/v1630613524/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024_bq4w0h.png",
  },
  {
    name: "GOOGLE DRIVE",
    logo: "https://res.cloudinary.com/pablowolf/image/upload/v1630613549/Google_Drive_logo_i0llf0.png",
  },
  {
    name: "GIPHY",
    logo: "https://res.cloudinary.com/pablowolf/image/upload/v1630613567/113Ja712zxL_xtxsun.png",
  },
  {
    name: "GMAIL",
    logo: "https://res.cloudinary.com/pablowolf/image/upload/v1630613587/gmail_new_logo_icon_159149_jchsqd.png",
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
