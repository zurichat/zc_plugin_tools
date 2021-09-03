const router = require("express").Router();
const pluginInfoRouter = require("./plugin-info");
const sideBarRouter = require("./sidebar");
const giphy = require("./giphy");

module.exports = () => {
  router.use(pluginInfoRouter());
  router.use(sideBarRouter());
  router.use(giphy());
  
  
  // Handle Invalid API routes
  router.use((req, res, next) => {
    next(new NotFoundError());
  });
 
  return router;
};
