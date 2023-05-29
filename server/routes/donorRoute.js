const router = require("express").Router();

const {
  getDonors,
  addDonors,
  deleteDonorController,
} = require("../controllers/donorController");
// const { addClass, getClasses } = require("../controllers/tipsController");
const { verifyToken } = require("../middlewares/jwtMiddleware");
const upload = require("../middlewares/upload");
router.get("/", getDonors);
router.post("/add",upload.single("donorImage"), addDonors);
router.delete("/delete/:donorId", deleteDonorController);

module.exports = router;
