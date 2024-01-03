const express = require("express");
const version = require("../controller/dev");

const router = express.Router();
router.get("/version", version)

module.exports = router