const { model, Schema } = require("mongoose");

const replySchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		Comment: {
			type: Schema.Types.ObjectId,
			ref: "Comment",
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

module.exports = model("Message", replySchema);
