// This is only a sample file of how to setup a db service
const availableTools = require("../data/available-tools.json");
const recommendedTools = require("../data/recommended-tools.json");
const _ = require("lodash");
const fs = require("fs/promises");
const { v4: uuidv4 } = require("uuid");

const env = require("../config/env");

const handleBaseUrls = (tool) => {
  if (tool.icon.includes(env.referrer)) return;
  if (tool.url) tool.url = env.referrer + tool.url;
  tool.icon = env.referrer + tool.icon;
};

class ToolsService {
  async getAll(query) {
    let tools = [...availableTools];
    tools.map((tool) => {
      handleBaseUrls(tool);
      return tool;
    });
    if (query?.sortBy == "collections") tools = _.groupBy(tools, "collection");

    return tools;
  }

  async getRecommendedTools() {
    const tools = [...recommendedTools];
    recommendedTools.map((tool) => {
      handleBaseUrls(tool);
      return tool;
    });

    return tools;
  }
}

module.exports = new ToolsService();
