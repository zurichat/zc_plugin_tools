const response = require("../utils/fetchPosts");

class FetchApiController {
  async getApi(req, res) {
    res.send(fetch("Api Info returned successfully"));
  }
  

   
}

module.exports = new FetchApiController();
