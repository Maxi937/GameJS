"use strict";

const express = require("express");
const router = express.Router();

const accounts = require("./controllers/accounts")


//index
router.get("/", accounts.index);

module.exports = router;