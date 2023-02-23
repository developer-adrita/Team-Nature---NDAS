const { model, Schema } = require("mongoose");

const qnaSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		question: {
			type: Schema.Types.ObjectId,
			ref: "Topic",
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = model("Message", qnaSchema);
