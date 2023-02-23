const { verifyToken } = require("../controllers/jwtController");

exports.verifyToken = (req, res, next) => {
	const token = req.cookies.auth;

	if (token) {
		req.user = verifyToken(token);
		return next();
	}
	res.status(401).json({
		code: 401,
		message: "Unauthorized request",
	});
};
