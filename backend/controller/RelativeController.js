const RelativeModel = require("../model/RelativeModel.js");

async function createRelativeController(relativeGroupName) {
  console.log(relativeGroupName);
  const RelativeGroup = new RelativeModel();
  await RelativeGroup.create(relativeGroupName);
}

async function joinRelativeController(relativeGroupCode, userId) {
  const RelativeGroup = new RelativeModel();
  return await RelativeGroup.join(relativeGroupCode, userId);
}

module.exports = { createRelativeController, joinRelativeController };
