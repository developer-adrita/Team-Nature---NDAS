const { Schema, model } = require("mongoose");

const topicSchema = new Schema({
	course: {
		type: Schema.Types.ObjectId,
		ref: "Course",
		required: true,
	},
	topicName: {
		type: String,
		required: true,
	},
	topicImg: {
		type: String,
		default:
			"https://res.cloudinary.com/hostingimagesservice/image/upload/v1674809872/eduBangla/images/Screenshot_1_xdl2df.png",
	},
	topicDescription: {
		type: String,
		maxLength: 1000,
	},
});

module.exports = model("Topic", topicSchema);
