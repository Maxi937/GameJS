"use strict"

const fs = require('fs')

const gameUtils = {
  getNumFiles(dir) {
    return fs.readdirSync(dir).length
  },

  readDirectory(dir){
    return fs.readdirSync(dir)
  }
}

module.exports = gameUtils;
