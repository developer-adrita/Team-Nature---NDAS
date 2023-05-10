const router = require("express").Router();
const { getTips, addTips } = require("../controllers/tipsController");
// const { addClass, getClasses } = require("../controllers/tipsController");
const { verifyToken } = require("../middlewares/jwtMiddleware");

router.get("/",  getTips);
router.post("/add",   addTips);

module.exports = router;
