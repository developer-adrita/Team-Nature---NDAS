const { Schema, model } = require("mongoose");

const topicContentSchema = new Schema(
	{
		topic: {
			type: Schema.Types.ObjectId,
			ref: "Topic",
		},
		teacherName: String,
		topicName: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
		},
		topicVideo: {
			type: String,
			required: true,
		},
		topicVideoCloudinaryId: String,
		views: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
);

module.exports = model("TopicContent", topicContentSchema);
