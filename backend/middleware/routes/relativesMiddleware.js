// Dependencies & Packages Import
const express = require("express");
const {
  createRelativeController,
  joinRelativeController,
} = require("../../controller/RelativeController");

const Router = express.Router();

Router.post("/api/relatives/create-group", async (req, res, next) => {
  let requestBody = req.body;
  await createRelativeController(requestBody.relativeGroupName);
});

Router.post("/api/relatives/join-group", async (req, res, next) => {
  let requestBody = req.body;
  await joinRelativeController(
    requestBody.relativeGroupCode,
    requestBody.userId,
  );
});

module.exports = Router;
