'use strict'

const host = "lallah.db.elephantsql.com";
const database = "kbypfwfo";
const user = "kbypfwfo";
const password = "0i7aXC06Om34wW3EVqBI24wWAtL04kAH";

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
