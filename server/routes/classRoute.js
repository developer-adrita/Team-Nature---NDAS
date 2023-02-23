const router = require("express").Router();
const { addClass, getClasses } = require("../controllers/classController");
const { verifyToken } = require("../middlewares/jwtMiddleware");

router.get("/", verifyToken, getClasses);
router.post("/add", verifyToken, addClass);

module.exports = router;
