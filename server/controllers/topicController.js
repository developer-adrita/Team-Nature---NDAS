const expressAsyncHandler = require("express-async-handler");
const Topic = require("../models/TopicModel");
const cloudinary = require("../utils/cloudinaryHandler");

exports.addTopic = expressAsyncHandler(async (req, res) => {
	const newTopic = await new Topic(req.body).save();

	res.status(201).json({
		success: true,
		message: "New topic added successfully",
		topic: newTopic,
	});
});

exports.getTopics = expressAsyncHandler(async (req, res) => {
	const topic = await Topic.find();

	if (topic) {
		return res.status(201).json({
			success: true,
			message: "New topic added successfully",
			topic: topic,
		});
	}

	res.status(200).json({
		success: false,
		message: "topic not added",
		topic: null,
	});
});
