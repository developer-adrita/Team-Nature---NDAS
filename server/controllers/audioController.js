const expressAsyncHandler = require("express-async-handler");
const Audio = require("../models/AudioModel");

exports.addAudio = expressAsyncHandler(async (req, res) => {
	let audio = {};

	if (req.file) {
		audio = await cloudinary.uploader.upload(req.file.path, {
			resource_type: video,
			folder: "eduBangla/audio",
		});
	}

	const newAudio = new Audio({
		...req.body,
		audio: audio.secure_url,
		audioCloudinaryId: audio.public_id,
	});

	if (newAudio) {
		return res.status(200).json({
			success: true,
			message: "Audio added successfully",
			audio,
		});
	}

	res.status(500).json({
		success: false,
		message: "Audio not added",
		audio: null,
	});
});

exports.getAudioCourses = expressAsyncHandler(async (req, res) => {
	const audios = await Audio.find();

	if (audios) {
		return res.status(200).json({
			success: true,
			message: "Audio fetched successfully",
			audios,
		});
	}

	res.status(200).json({
		success: false,
		message: "Audio not available",
		audios: null,
	});
});
