const response = require("../../utils/response");

class GoogleDriveController {
  async index(req, res) {
    res.send(response("Google Drive Api Info returned successfully"));
  }
}

module.exports = new GoogleDriveController();
