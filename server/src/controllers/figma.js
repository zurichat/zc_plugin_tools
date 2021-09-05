  
const axios = require("axios");

class FigmaController {



  async teamProject(req, res) {
    try {
      const { user } = req.params;
      
      const resp = await axios.get('https://api.figma.com/v1/files/k3RnvKGOXgCWl0lEtwYP3h', {
        method: 'GET',
        headers: {
          'X-Figma-Token': "233298-3b72bb77-f1d1-4456-a370-a4489dc1df22"
        }
      })
      res.status(200).json(resp.data);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}



module.exports = new FigmaController();