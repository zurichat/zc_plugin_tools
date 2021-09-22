const tools = require("../services/tools");
const response = require("../utils/response");
const axios = require("axios");
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
  async getOrganizationTools(req, res) {
    const { plugin_id, coll_name, org_id } = req.body;
    axios
      .get(
        `https://api.zuri.chat/data/read/${plugin_id}/${coll_name}/${org_id}`
      )
      .then((resp) => {
        res.send(resp.data);
      })
      .catch((err) => {
        res.status(500).json({
          statusCode: 500,
          message: err.message,
        });
      });
  }

  async addTool(req, res) {
    const options = {
      headers: {
        "content-type": "application/json",
        "cache-control": "no-cache",
      },
    };
    axios
      .post(
        "https://api.zuri.chat/v1/data/write",
        {
          plugin_id: req.body.plugin_id,
          organization_id: req.body.organization_id,
          collection_name: "organization_tools",
          payload: {
            plugin_id: req.body.plugin_id,
            organization_id: req.body.organization_id,
            message: req.body.message,
          },
          bulk_write: false,
          object_id: "",
          filter: {},
        },
        options
      )
      .then((resp) => {
        res.send("This tool has been added successfully");
      })
      .catch((err) => {
        res.status(500).json({
          statusCode: 500,
          message: err.message,
        });
      });
  }
}

module.exports = new ToolsController();
