'use strict'

const host = "lallah.db.elephantsql.com";
const database = "xmacugwe";
const user = "xmacugwe";
const password = "Mp7SkJEY12xJRCnSFR1f-Jb2mLrY-BAR";

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