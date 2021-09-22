// This is only a sample file of how to setup a db service
const availableTools = require("../data/available-tools.json");
const recommendedTools = require("../data/recommended-tools.json");
const _ = require("lodash");
const fs = require("fs/promises");
const { v4: uuidv4 } = require("uuid");

const env = require("../config/env");

const handleBaseUrls = (tool, origin) => {
  if (origin.includes("localhost")) origin = origin.replace("9000", env.PORT);

  if (!tool.icon.includes(origin)) tool.icon = origin + "apps" + tool.icon;
};

class ToolsService {
  async getAll(query, origin) {
    let tools = [...availableTools];
    tools.map((tool) => {
      handleBaseUrls(tool, origin);
      return tool;
    });
    console.log(tools);
    if (query?.sortBy == "collections") tools = _.groupBy(tools, "collection");

    return tools;
  }

  async getRecommendedTools(origin) {
    const tools = [...recommendedTools];
    recommendedTools.map((tool) => {
      handleBaseUrls(tool, origin);
      return tool;
    });

    return tools;
  }
}

module.exports = new ToolsService();
