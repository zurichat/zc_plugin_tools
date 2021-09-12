const fetch = require("got");
const response = require("../utils/response");
const env = require("../config/env");

const { GIPHY_API_KEY } = env;

const randomGif = async (req, res) => {
  const r = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}`
  );
  const { data } = await JSON.parse(r.body);

  res.send(response("Random GIF", data));
};

const trendingGifs = async (req, res) => {
  const r = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}`
  );
  const { data } = await JSON.parse(r.body);

  res.send(response("Trending GIFs", data));
};

<<<<<<< HEAD
const searchGifs = async (req, res) => {
  const q = req.query.s

  const r = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${q}`,
  )
  const { data } = await JSON.parse(r.body)

  res.send(response('Search GIFs', data))
}

module.exports = { randomGif, trendingGifs, searchGifs }
=======
module.exports = { randomGif, trendingGifs };
>>>>>>> cfc29e27787da7e67c71d15b11c520e74cb3fbac
