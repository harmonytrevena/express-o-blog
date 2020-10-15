'use strict'
const db = require('./conn');

class LanguagesList {
    constructor(name, ranking_id) {
        this.name = name;
        this.ranking_id = ranking_id;
    }
    static async getAll() {
        try {
            const response = await db.any(`SELECT name, ranking, ranking_id FROM languages INNER JOIN ranking ON ranking_id = ranking.id;`);
            return response;
        } catch (error) {
            return error.message;
        }
    }
    static async getAllRanking() {
        try {
            const response = await db.any(`SELECT * FROM ranking;`);
            return response;
        } catch (error) {
            return error.message;
        }
    }
    static async updateStatus(rank, language) {
        try {
            const response = await db.result(`UPDATE languages SET ranking_id = $1 WHERE name = $2;`, [rank, language]);
            return response;
        } catch (error) {
            return error.message;
        }
    }
}

module.exports = LanguagesList;