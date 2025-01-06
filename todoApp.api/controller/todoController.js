const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    // Get all tasks and sort by 'createdBy' in descending order
    const tasks = await Task.find({}).sort({ createdAt: -1 });

    res.status(200).json({ success: true, tasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to fetch tasks" });
  }
};

const createTask = async (req, res) => {
  try {
    const { task } = req.body;
    const newTask = await Task.create({ task });
    res.status(201).json({ message: "Task created successfully", newTask });
  } catch (error) {
    res.status(400).json({ error: "Failed to add the task" });
  }
};
module.exports = {
  getAllTasks,
  createTask,
};
