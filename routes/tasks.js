'use strict'

const express = require('express'),
    router = express.Router(),
    taskModel = require('../models/taskModel')

router.get("/", async (req, res, next) => {
    const taskData = await taskModel.getAll();
    console.log(taskData)
    res.send("API with ", taskData).status(200);
});

// Create new task (later use this for creating inventory or to project manage)
router.post("/task/add", async function (req, res) {
    const { task_title, task_details, category, due_date, user_id, task_status } = req.body;
    const response = await taskModel.addTask(task_title, task_details, category, due_date, user_id, task_status)
    if (response.command === "INSERT" && response.rowCount >= 1) {
        res.sendStatus(200);
      } else {
        res.send(`Could not add new blog post ${task_title}`).status(409);
      }
});

router.get("/task/:task_id?", async (req, res) => {
    const taskId = req.params.task_id;
    const theTask = await taskModel.getById(taskId);
    res.json(theTask).status(200);
});
  
router.put("/task/update/:task_id?", async (req, res) => {
    const taskId = req.params.task_id;
    const { task_details } = req.body;
    const response = await taskModel.updateTask(taskId, "task_details", task_details);
    if (response.command === "UPDATE" && response.rowCount >= 1) {
      res.sendStatus(200);
    } else {
      res.send(`Could not update Post ID ${taskId}`).status(409);
    }
});
  
router.delete("/task/delete/:task_id?", async (req, res) => {
    const taskId = req.params.task_id;
    const response = await taskModel.removeTask(taskId);
  
    if (response.command === "DELETE" && response.rowCount >= 1) {
      res.sendStatus(200);
    } else {
      res.send(`Could not delete Task ID ${taskId}`).status(409);
    }
});

module.exports = router;