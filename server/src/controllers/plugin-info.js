const response = require("../utils/response");
const axios = require("axios");

class PluginInfoController {
  async getInfo(req, res) {
    const info = `The company online tools plugin is a feature which allows users to interact with third party tools like Google Drive, Figma, Github, etc. to make work flow for themselves or their team faster and easier.
    All our tools are external applications that you may have used or heard of but to maximize productivity, we are giving you access to some of their awesome features right in Zuri Chat.`;

    res.send(response("Plugin Info returned successfully", info));
  }

  async registerPlugins(req, res) {
    const plugins = [
      {
        name: "Github",
        description: "manage your github notifications",
        template_url: "https://externaltools.zuri.chat/github",
        sidebar_uri: "https://externaltools.zuri.chat/api/sidebar",
        install_url: "https://externaltools.zuri.chat/api/github/install",
        icon_url: "https://cloudinary.com/zurichat/github.png"
      },
      {
        name: "Google Drive",
        description: "manage your google drive account",
        template_url: "https://externaltools.zuri.chat/googledrive",
        sidebar_uri: "https://externaltools.zuri.chat/api/sidebar",
        install_url: "https://externaltools.zuri.chat/api/googledrive/install",
        icon_url: "https://cloudinary.com/zurichat/googledrive.png"
      },
      {
        name: "Figma",
        description: "manage your figma account",
        template_url: "https://externaltools.zuri.chat/figma",
        sidebar_uri: "https://externaltools.zuri.chat/api/sidebar",
        install_url: "https://externaltools.zuri.chat/api/figma/install",
        icon_url: "https://cloudinary.com/zurichat/figma.png"
      },
      {
        name: "Gmail",
        description: "manage your gmail account",
        template_url: "https://externaltools.zuri.chat/gmail",
        sidebar_uri: "https://externaltools.zuri.chat/api/sidebar",
        install_url: "https://externaltools.zuri.chat/api/gmail/install",
        icon_url: "https://cloudinary.com/zurichat/gmail.png"
      },
      {
        name: "Giphy",
        description: "manage your giphy account",
        template_url: "https://externaltools.zuri.chat/giphy",
        sidebar_uri: "https://externaltools.zuri.chat/api/sidebar",
        install_url: "https://externaltools.zuri.chat/api/giphy/install",
        icon_url: "https://cloudinary.com/zurichat/giphy.png"
      }
    ];

    try {
      plugins.forEach(async plugin => {
        const {data} = await axios.post("https://core.zuri.chat/plugin/register", plugin);
        if(data) {
          //create plugin in Hobbes database
        }
      })
    } catch (error) {
      res.send(response(e.message, null, false));
    }
  }
}

module.exports = new PluginInfoController();
