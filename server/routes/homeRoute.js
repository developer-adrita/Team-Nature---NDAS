const router = require("express").Router();

router.get("/", (_, res) => {
	res.status(200).json({
		status: "default",
		message: "Home route",
	});
});

module.exports = router;
