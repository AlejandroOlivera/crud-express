const express = require("express");
const router = express.Router();
const model = require("../models/task");
const tasks = require("../controller/tasks_controller");

router.get("/", tasks.index);
router.post("/add", tasks.new);
router.get("/turn/:id", tasks.update);
router.get("/delete/:id", tasks.destroy);

module.exports = router;
