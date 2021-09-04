  
const axios = require("axios");

class FigmaController {
  async teamProject(req, res) {
    try {
      const { user } = req.params;
      
      const resp = await axios.get(` https://api.figma.com/v1/teams/:${team_id}/projects`);
      res.status(200).json(resp.data);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

module.exports = new FigmaController();