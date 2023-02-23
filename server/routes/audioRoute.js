const router = require("express").Router();
const { getAudioCourses, addAudio } = require("../controllers/audioController");

router.get("/", getAudioCourses);
router.post("/add", addAudio);

module.exports = router;
