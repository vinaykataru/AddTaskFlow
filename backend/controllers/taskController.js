const Task = require('../models/Task');

// Create Task
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      UserId: req.user.id
    });

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get User Tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: { UserId: req.user.id }
    });

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Task
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);

    if (!task) return res.status(404).json({ error: "Task not found" });

    if (task.UserId !== req.user.id) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    await task.destroy();

    res.json({ message: "Task deleted" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};