const { model, Schema } = require("mongoose");

const commentSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		topic: {
			type: Schema.Types.ObjectId,
			ref: "Topic",
			required: true,
		},
		body: {
			type: String,
			required: true,
			maxLength: 1000,
		},
	},
	{ timestamps: true }
);

module.exports = model("Comment", commentSchema);
