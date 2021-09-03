const router = require('express').Router()
const giphy = require('../controllers/giphy')

router.get('/random', giphy.randomGif)

router.get('/trending', giphy.trendingGifs)

module.exports = router
