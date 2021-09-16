const tools = require("../services/tools");
const response = require("../utils/response");

class ToolsController {
  async getAllAvailableTools(req, res) {
    const availableTools = await tools.getAll(req.query);

    res.send(response("Available Tools returned successfully", availableTools));
  }

  async getRecommendedTools(req, res) {
    const recommendedTools = await tools.getRecommendedTools();

    res.send(
      response("Recommended Tools returned successfully", recommendedTools)
    );
  }
}

module.exports = new ToolsController();
