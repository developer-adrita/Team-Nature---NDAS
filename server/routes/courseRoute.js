const router = require("express").Router();
const upload = require("../middlewares/upload");
const { addCourse, viewCourses } = require("../controllers/courseController");

router.get("/", viewCourses);
router.post("/add", upload.single("course-img"), addCourse);

module.exports = router;
