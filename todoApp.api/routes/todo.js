var express = require("express");
const { createTask, getAllTasks } = require("../controller/todoController");
var router = express.Router();

/* GET todo listing. */
router.get("/", getAllTasks);

router.post("/", createTask);

module.exports = router;
