// Dependencies & Packages Import
const express = require("express");
const {
  createRelativeController,
  joinRelativeController,
} = require("../controller/RelativeController");
const Router = express.Router();
const userAccountMiddleware = require("./routes/userAccountMiddleware.js");
const relativeMiddleware = require("./routes/userAccountMiddleware.js");

Router.post("/create", (req, res, next) => {
  console.log(req.body);
  res.send("Welcome to Pulse Guard!");
});

Router.use(userAccountMiddleware);
Router.use(relativeMiddleware);

module.exports = Router;
