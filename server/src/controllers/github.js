const response = require("../utils/response");
const axios = require('axios');

class githubController {
    async usersRepo(req, res) {
        try{
            const reposUrl = `https://api.github.com/users/${req.params.username}/repos`;
            const {data} = await axios.get(reposUrl);
            res.status(200).send({repos: data});
        } catch(e){
            res.status(400).send(`this error occured ${e}`);
        }
      
    }
  
     
  }
  
  module.exports = new githubController();
  