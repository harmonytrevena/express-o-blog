'use strict'

const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const UsersModel = require('../models/usersModel');

router.get("/", (req, res) => {
    res.render("template", {
    locals: {
        title: "Home Page",
        is_logged_in: req.session.is_logged_in
    },
    partials: {
        partial: "partial-index",
    },
    });
});

router.post('/', (req, res) => {
    const { email, password } = req.body;
    const userInstance = new UsersModel(null, null, email, password);
    userInstance.userLogin().then(response => {
        req.session.is_logged_in = response.isValid;
        if (!!response.isValid) {
            const { name, user_id } = response;
            req.session.name = name;
            req.session.user_id = user_id;
            res.redirect('/tasks')
        } else {
            res.sendStatus(401);
        }
    })
});

module.exports = router;