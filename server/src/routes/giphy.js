const router = require('express').Router()
const giphy = require('../controllers/giphy')

module.exports = function () {
  router.get('/random', giphy.randomGif)

  router.get('/trending', giphy.trendingGifs)

  router.get('/search', giphy.searchGifs) 


  return router
}
