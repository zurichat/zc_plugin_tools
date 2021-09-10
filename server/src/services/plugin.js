// This is only a sample file of how to setup a db service
const Plugin = require("../models/plugin");

class PluginService {
  create(plugin) {
    return Plugin.create(plugin);
  }

  findById(id) {
    return Plugin.findOne({ id });
  }

  update(id, updateQuery) {
    return Plugin.findByIdAndUpdate(id, updateQuery);
  }
}

module.exports = new PluginService();
