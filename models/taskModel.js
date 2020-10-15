'use strict'
const db = require('./conn');

class TaskList {
    constructor(task_title, task_details, category, due_date, task_status) {
        this.task_title = task_title;
        this.task_details = task_details;
        this.category = category;
        this.due_date = due_date;
        this.task_status = task_status;
    }
    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM task ORDER BY task.id;`);
            console.log(response);
            return response;
        } catch (error) {
            return error.message;
        }
    }
    static async addTask(task_title, task_details, category, due_date, user_id, task_status) {
        try {
            const response = await db.result(`INSERT INTO task (task_title, task_details, category, due_date, user_id, task_status) VALUES ($1, $2, $3, $4, $5, $6);`, [task_title, task_details, category, due_date, user_id, task_status]);
            console.log(response);
            return response;
        } catch (error) {
            return error.message;
        }
    }
}

module.exports = TaskList;