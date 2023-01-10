const { Router } = require("express");
const { cerateUrl, getUrl, getUrls } = require("../Controllers/url.controller");

const urlRouter = Router();

//creating new url
urlRouter.post("/shortUrl", cerateUrl);

//getting all the urls
urlRouter.get("/", getUrls);

//getting the url
urlRouter.get("/:shortUrl", getUrl);

module.exports = urlRouter;
