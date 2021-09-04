const axios = require('axios');

class githubRepoController {
    async usersRepo(req, res) {
        try{
            const reposUrl = `https://api.github.com/users/${req.params.user}/repos`;
            const {data} = await axios.get(reposUrl);
            res.status(200).send({repos: data});
        } catch(e){
            res.status(400).send(`this error occured ${e}`);
        }
      
    }
  
     
  }
  
  module.exports = new githubRepoController();
  
