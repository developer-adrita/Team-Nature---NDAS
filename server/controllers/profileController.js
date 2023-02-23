const expressAsyncHandler = require("express-async-handler");
const Profile = require("../models/ProfileModel");
const cloudinary = require("../utils/cloudinaryHandler");

exports.getProfile = expressAsyncHandler(async (req, res) => {
	const { id } = req.user;

	const profile = await Profile.findOne({ user: id });

	if (profile) {
		return res.status(200).json({
			success: true,
			message: "Profile found",
			profile,
		});
	}

	res.status(200).json({
		success: false,
		message: "Profile not found",
		profile: null,
	});
});

exports.addProfile = expressAsyncHandler(async (req, res) => {
	const { id } = req.user;

	let result = {};
	if (req.file) {
		result = await cloudinary.uploader.upload(req.file.path, {
			folder: "eduBangla/images",
		});
	}

	const addProfile = await new Profile({
		...req.body,
		user: id,
		profilePicture: result.secure_url,
		profilePictureCloudinaryId: result.public_id,
	}).save();

	if (addProfile) {
		return res.status(201).json({
			success: true,
			message: "Profile added",
			profile: addProfile,
		});
	}

	res.status(500).json({
		success: false,
		message: "Profile not added",
		profile: null,
	});
});
