const tools = require("../services/tools");
const response = require("../utils/response");
const fs = require("fs");

//store
const toolsData = [];
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
  async addTool(req, res) {
    const userTools = req.body;
    const jsonData = JSON.stringify(userTools, null, 2);
    res.send(response("Tool added successfully"));

    fs.writeFile("userTools.json", jsonData);
  }
}

module.exports = new ToolsController();
