// This is only a sample file of how to setup a db service
const availableTools = require("../data/available-tools.json");
const recommendedTools = require("../data/recommended-tools.json");
const _ = require("lodash");
const fs = require("fs/promises");
const { v4: uuidv4 } = require("uuid");

const env = require("../config/env");

const handleBaseUrls = (tool, origin) => {
  let apiBase = !origin.includes("localhost")
    ? "https://externaltools.zuri.chat"
    : `http://localhost:${env.PORT}`;
  const hasBeenPrefixed =
    tool.icon.includes("zuri.chat") || tool.icon.includes("localhost");
  if (hasBeenPrefixed) return;
  if (!tool.icon.includes(apiBase)) tool.icon = apiBase + "/apps" + tool.icon;
};

class ToolsService {
  async getAll(query, origin) {
    let tools = [...availableTools];
    tools.map((tool) => {
      handleBaseUrls(tool, origin);
      return tool;
    });
    if (query?.sortBy == "collections") tools = _.groupBy(tools, "collection");
    if (query?.category) {
      let selectedCategory = query.category;
      tools = tools.filter((tool) => {
        if (tool.categories.includes(selectedCategory)) {
          return tool;
        }
      });
    }
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

  async getToolsCategories() {
    let categories = [];

    availableTools.forEach((tool) => {
      if (categories.length < 1) {
        categories = tool.categories;
      }
      tool.categories.forEach((category) => {
        if (!categories.includes(category)) {
          categories.push(category);
        }
      });
    });

    return categories;
  }
}

module.exports = new ToolsService();
