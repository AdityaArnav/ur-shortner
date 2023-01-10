const Url = require("../Models/Schema");

//create a short url
const cerateUrl = async (req, res) => {
  const { fullUrl} = req.body;
  const url = new Url({ fullUrl });
  await url.save();
  return res.status(200).send(url);
};

//get a short url
const getUrl = async (req, res) => {
  const { shortUrl } = req.params;
  const url = await Url.findOne({ shortUrl: shortUrl });
  res.send(url.fullUrl);
};

//get all  urls
const getUrls = async (req, res) => {
  const url = await Url.find({});
  res.status(200).send(url);
};

module.exports = { cerateUrl, getUrl, getUrls };
