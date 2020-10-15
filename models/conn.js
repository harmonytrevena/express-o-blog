'use strict'

const host = "raja.db.elephantsql.com";
const database = "xrcuvhzu";
const user = "xrcuvhzu";
const password = "tloA8o9hUCbI7ERL8S4H7lJgPa9bbwBV";

// Duplicate from here down in every file
const pgp = require('pg-promise')({
    query: function (event) {
        console.log("QUERY: ", event.query);
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password,
}

const db = pgp(options);

module.exports = db;