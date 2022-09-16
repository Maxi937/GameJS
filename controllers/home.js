"use strict"

const home = {
  index(req, res) {

    const viewData = {
      title: "Index",
    };
    res.render("index", viewData);
  },
};

module.exports = home;