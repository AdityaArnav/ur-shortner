const mongoose = require("mongoose");

const connection = mongoose
  .connect("mongodb://localhost:27017/urlShortner")
  .then((conn) => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

module.exports = connection;
