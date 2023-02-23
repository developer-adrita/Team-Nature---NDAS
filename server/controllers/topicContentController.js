const expressAsyncHandler = require("express-async-handler");
const TopicContent = require("../models/TopicContentModel");
const cloudinary = require("../utils/cloudinaryHandler");

exports.addTopicContent = expressAsyncHandler(async (req, res) => {
	const results = await cloudinary.uploader.upload(req.file?.path, {
		resource_type: "video",
		folder: "eduBangla/videos",
	});

	const newTopic = await new TopicContent({
		...req.body,
		topic: "63d3ff0595122ea6d61c4b72",
		topicVideo: results ? results.secure_url : "",
		topicVideoCloudinaryId: results ? results.public_id : "",
	}).save();

	if (newTopic) {
		return res.status(201).json({
			success: true,
			message: "New topic content added successfully",
			topic: newTopic,
		});
	}

	res.status(500).json({
		success: false,
		message: "Content not added",
		topic: "",
	});
});

exports.getTopicContent = expressAsyncHandler(async (req, res) => {
	const { topicId } = req.params;

	const topicContents = await TopicContent.find({ topic: topicId });

	if (topicContents) {
		return res.status(200).json({
			success: true,
			message: "Topic content found",
			topicContents,
		});
	}

	res.status(200).json({
		success: false,
		message: "Topic content not found",
		topicContents: null,
	});
});
