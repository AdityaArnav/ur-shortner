const express = require("express");
const cors = require("cors");
const connection = require("../DB/db");

const PORT = process.env.PORT || 8080;
const cookieParser = require("cookie-parser");
const urlRouter = require("./Routes/url.routes");

const app = express();
const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

app.use("/", urlRouter);

app.get("/", (req, res) => {
  res.send("Url shortner Working");
});

app.listen(PORT, async () => {
  await connection;
  console.log("Server started at http://localhost:8080");
});
