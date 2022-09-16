"use strict"

const accounts = {
  index(req, res) {

    const viewData = {
      title: "Index",
    };
    res.render("index", viewData);
  },
};

module.exports = accounts;