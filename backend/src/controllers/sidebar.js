const response = require("../utils/response");

class SidebarController {
  async getSideBarEndpoints(req, res) {
    const endpoints = ["/gmail", "github", "figma", "googledrive", "giphy"];

    res.send(
      response(
        "Sidebar endpoints for Online Tools returned successfully",
        endpoints
      )
    );
  }
}

module.exports = new SidebarController();
