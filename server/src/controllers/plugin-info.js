const response = require('../utils/response')

class PluginInfoController {
  async getInfo(req, res) {
<<<<<<< HEAD
    res.send(response("Plugin Info returned successfully"));
=======
    const info = `The company online tools plugin is a feature which allows users to interact with third party tools like Google Drive, Figma, Github, etc. to make work flow for themselves or their team faster and easier.
    All our tools are external applications that you may have used or heard of but to maximize productivity, we are giving you access to some of their awesome features right in Zuri Chat.`

    res.send(response('Plugin Info returned successfully', info))
>>>>>>> 2a0a6fc3b3848f1d7180daa7de0f52422b34bcbc
  }
}

module.exports = new PluginInfoController()
