const response = require("../../utils/response");
const env = require("../../config/env");
const { google } = require("googleapis");

const {
  GOOGLE_DRIVE_KEYS: { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN },
} = env;

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});

class GoogleDriveController {
  async index(req, res) {
    const googledriveInfo =
      "The google drive app will allow a workspace member to access his/her google drive files and folders" +
      " A user can download, view and upload files from Zuri Chat via the external tools plugin";
    res.send(
      response("Google Drive Api Info returned successfully", googledriveInfo)
    );
  }
  async getFilesList(req, res) {
    console.log(REDIRECT_URI);
    try {
      const r = await drive.files.list();
      const { data } = r;

      res.send(response("List Of Files", data));
    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        message: error.message,
      });
    }
  }
  async getData(req, res) {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await resp.json();
    res.send(response("Data info returned successfully", json));
  }
}

module.exports = new GoogleDriveController();
