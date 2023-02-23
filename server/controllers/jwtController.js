const jwt = require("jsonwebtoken");

exports.generateToken = function generateToken(user) {
	return jwt.sign(user, process.env.JWT_SECRET);
};

exports.verifyToken = function verifyToken(token) {
	return jwt.verify(token, process.env.JWT_SECRET);
};
