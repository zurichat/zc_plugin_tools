const router = require("express").Router();
const giphy = require("../controllers/giphy");

module.exports = function () {
  router.get("/giphy/random", giphy.randomGif);

  router.get("/giphy/trending", giphy.trendingGifs);

  return router;
};
