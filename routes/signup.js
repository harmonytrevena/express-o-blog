'use strict'

const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const UsersModel = require('../models/usersModel');
const { response } = require('express');

router.get("/", (req, res) => {
    res.render("template", {
    locals: {
        title: "Sign Up Page",
        is_logged_in: req.session.is_logged_in
    },
    partials: {
        partial: "partial-signup",
    },
    });
});

router.post('/', (req, res) => {
    const { name, email, password } = req.body;
    
    // ALWAYS Salt AND Hash User Passwords
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt)

    const userInstance = new UsersModel(null, name, email, hash);
    
    userInstance.saveUser().then(response => {
        if (response.id != undefined) {
            res.redirect('/');
        } else {
            res.redirect('/signup')
        }
        response.sendStatus(200);
    })
});

module.exports = router;