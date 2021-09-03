const response = require("../../utils/response");

class GoogleDriveController {
  async index(req, res) {
    const googledriveInfo = "The google drive app will allow a workspace member to access his/her google drive files and folders"+
    " A user can download, view and upload files from Zuri Chat via the external tools plugin";
    res.send(response("Google Drive Api Info returned successfully",googledriveInfo));
  }
}

module.exports = new GoogleDriveController();
