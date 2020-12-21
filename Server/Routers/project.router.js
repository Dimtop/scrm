var express = require('express')
var router = express.Router();

const projectController = require("../Controllers/project.controller");


router.get("/",projectController.getProjects);

router.get("/byManager",projectController.getProjectByManager)
router.get("/:projectID",projectController.getProject);
module.exports = router;