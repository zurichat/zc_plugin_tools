const router = require("express").Router();
const giphy = require("../controllers/giphy");

module.exports = function () {
  router.get("/giphy/random", giphy.randomGif);

  router.get("/giphy/trending", giphy.trendingGifs);

<<<<<<< HEAD
  router.get('/search', giphy.searchGifs) 


  return router
}
=======
  return router;
};
>>>>>>> 96d83310434390b691622c554f178130f96f69b8
