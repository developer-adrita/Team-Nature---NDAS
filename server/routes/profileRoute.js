const router = require("express").Router();
const { getProfile, addProfile } = require("../controllers/profileController");
const { verifyToken } = require("../middlewares/jwtMiddleware");
const upload = require("../middlewares/upload");

router.get("/", verifyToken, getProfile);
router.post("/add", verifyToken, upload.single("profile-pic"), addProfile);

module.exports = router;
