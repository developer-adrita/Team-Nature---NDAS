const expressAsyncHandler = require("express-async-handler");
const Class = require("../models/ClassModel");

exports.addClass = expressAsyncHandler(async (req, res) => {
	const { user_type } = req.user;

	if (user_type === "admin" || user_type === "teacher") {
		const addClass = await new Class(req.body).save();

		if (addClass) {
			return res.status(201).json({
				success: true,
				message: "Class added successfully",
				class: addClass,
			});
		}

		return res.status(500).json({
			success: false,
			message: "Class not added",
			class: addClass,
		});
	}
	res.status(403).json({
		success: false,
		message: "Unauthorized access",
		class: null,
	});
});

exports.getClasses = expressAsyncHandler(async (req, res) => {
	const allClasses = await Class.find();

	if (allClasses) {
		return res.status(200).json({
			success: true,
			message: "Classes found",
			class: allClasses,
		});
	}

	res.status(200).json({
		success: false,
		message: "Classes not found",
		class: null,
	});
});
