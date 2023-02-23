const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const middlewares = [
	cors({ credentials: true, origin: "http://localhost:3001" }),
	cookieParser(),
	express.static("public"),
	express.json(),
	express.urlencoded({ extended: true }),
];

module.exports = (app) => {
	app.use(middlewares);
};
