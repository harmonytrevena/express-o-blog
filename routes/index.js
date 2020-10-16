'use strict'

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("React API").status(200);
});

module.exports = router;