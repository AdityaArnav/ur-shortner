const { Schema, model } = require("mongoose");
const shortId = require("shortid");

const UrlSchema = new Schema({
  fullUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    default: shortId.generate,
  },
  createdAt: { type: Date, expires: "10m", default: Date.now },
});

const Url = model("urlShortner", UrlSchema);

module.exports = Url;
