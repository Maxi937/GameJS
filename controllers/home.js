"use strict"
const logger = require("../utils/logger")
const gameUtils = require("../utils/gameUtils")

const home = {
  index(req, res) {
    const gameAssets = {
      player: gameUtils.readDirectory("public/images/gameAssets/player")
    }

    const viewData = {
      gameAssets,
      title: "Index"
    };
    logger.info("Rendering Index")
    res.render("index", viewData);
  },
};

module.exports = home;