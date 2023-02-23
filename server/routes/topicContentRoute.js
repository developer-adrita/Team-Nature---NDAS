const router = require("express").Router();
const upload = require("../middlewares/upload");
const { addTopicContent, getTopicContent } = require("../controllers/topicContentController");

router.get("/", getTopicContent);
router.post("/add", upload.single("topic-video"), addTopicContent);

module.exports = router;
