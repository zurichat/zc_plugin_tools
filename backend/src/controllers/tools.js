const tools = require("../services/tools");
const response = require("../utils/response");

class ToolsController {
  async getAllAvailableTools(req, res) {
    const origin = req.headers.referer || req.headers.host;
    const availableTools = await tools.getAll(req.query, origin);

    res.send(response("Available Tools returned successfully", availableTools));
  }

  async getRecommendedTools(req, res) {
    const origin = req.headers.referer || req.headers.host;
    const recommendedTools = await tools.getRecommendedTools(origin);

    res.send(
      response("Recommended Tools returned successfully", recommendedTools)
    );
  }

  async getToolsCategories(req, res) {
    const origin = req.headers.referer || req.headers.host;
    const toolsCategories = await tools.getToolsCategories();

    res.send(
      response("Tools Categories returned successfully", toolsCategories)
    );
  }
}

module.exports = new ToolsController();
