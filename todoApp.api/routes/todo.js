var express = require("express");
const {
  createTask,
  getAllTasks,
  deleteTask,
} = require("../controller/todoController");
const router = express.Router();

/* GET todo listing. */
router.get("/", getAllTasks);

/*Create New Todo*/
router.post("/", createTask);

/* Delete Todo*/
router.delete("/:id", deleteTask);

module.exports = router;
