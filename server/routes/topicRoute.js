const router = require("express").Router();
const { addTopic, getTopics } = require("../controllers/topicController");
const upload = require("../middlewares/upload");

router.get("/", getTopics);
router.post("/add", upload.single("topic-img"), addTopic);

module.exports = router;
