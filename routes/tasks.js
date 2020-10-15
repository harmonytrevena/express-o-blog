'use strict'

const express = require('express'),
    router = express.Router(),
    taskModel = require('../models/taskModel')

router.get("/", async (req, res) => {
    const taskData = await taskModel.getAll();

    console.log(taskData)
    res.render("template", {
        locals: {
            title: "Tasks",
            data: taskData,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            partial: "partial-task"
        }
    });
});

router.post('/', async function (req, res) {
    const { task_title, task_details, category, due_date, user_id, task_status } = req.body;
    console.log(req.body);
    await taskModel.addTask(task_title, task_details, category, due_date, user_id, task_status);
    res.redirect('/tasks');
});

module.exports = router;