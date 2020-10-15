'use strict'

const express = require('express'),
    router = express.Router();
const languagesModel = require('../models/languagesModel');

const renderPage = async res => {
    const languagesData = await languagesModel.getAll();
    const rankingData = await languagesModel.getAllRanking();

    res.render("template", {
        locals: {
            title: "Languages",
            data: languagesData,
            rankingData: rankingData,
        },
        partials: {
            partial: "partial-languages"
        }
    });
}

router.get("/", async (req, res) => {
    renderPage(res);
});

router.post("/", async (req, res) => {
    // console.log(req.body);
    for (let key in req.body) {
        await languagesModel.updateStatus(req.body[key], key);
    }
    renderPage(res);
});

module.exports = router;