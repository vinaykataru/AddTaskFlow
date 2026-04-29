const router = require('express').Router();
const verifyToken = require('../middlewares/verifyToken');
const {
  createTask,
  getTasks,
  deleteTask
} = require('../controllers/taskController');

router.post('/', verifyToken, createTask);
router.get('/', verifyToken, getTasks);
router.delete('/:id', verifyToken, deleteTask);

module.exports = router;