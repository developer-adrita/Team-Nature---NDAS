const router = require("express").Router();

const {
  addHelps,
  getHelps,
  deleteHelpController,
} = require("../controllers/helpController");
// const { addClass, getClasses } = require("../controllers/tipsController");
const { verifyToken } = require("../middlewares/jwtMiddleware");
const upload = require("../middlewares/upload");
router.get("/", getHelps);
router.post("/add", upload.single("helpAvatar"), addHelps);
router.delete("/delete/:helpId", deleteHelpController);

module.exports = router;
