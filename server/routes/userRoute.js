const router = require("express").Router();
const {
	registerUser,
	loginUser,
	getLoggedInUser,
	logoutController,
	isLoggedIn,
	isTeacher,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/add-admin")
router.post("/login", loginUser);
router.get("/", getLoggedInUser);
router.get("/isLoggedIn", isLoggedIn);
router.get("/isTeacher", isTeacher);
router.patch("/logout", logoutController);

module.exports = router;
